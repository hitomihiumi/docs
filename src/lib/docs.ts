import type { Documentation } from "@hitomihiumi/micro-docgen";

interface Docs {
    modules: Array<Documentation>;
}

export var docs = { modules: [] } as Docs;

// @ts-ignore
async function fetchAndProcessDocs(docs: Docs): Promise<Docs>  {
    const rawUrl = 'https://raw.githubusercontent.com/hitomihiumi/docsholder/master/packages/versions.json';

    try {
        const response = await fetch(rawUrl);

        if (!response.ok) {
            throw new Error(`Ошибка при загрузке файла: ${response.statusText}`);
        }

        const data = await response.json();

        var result = await processDocs(data, docs)

        //console.log('Результат:', result);

        return result;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function processDocs(data: any, docs: Docs): Promise<Docs> {
    //console.log('Обрабатываемые данные:', data.module);
    data.modules.forEach((module: any) => {
        //console.log('Обрабатываемый модуль:', module)
        data.module[module].forEach(async (version: any) => {
            const rawUrl = `https://raw.githubusercontent.com/hitomihiumi/docsholder/master/packages/${module}/${version}.json`;

            try {
                const response = await fetch(rawUrl);

                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке файла: ${response.statusText}`);
                }

                const data = await response.json();
                //console.log(data)
                docs.modules.push(data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        });
    });
    //console.log('Обработанные данные:', data);
    return docs;
}

(async () => {
    docs = await fetchAndProcessDocs(docs);
})();

docs.modules.forEach((versions) =>
    versions.classes.forEach(
        // @ts-expect-error
        (c) => (c.data.__type = "class")
    ))
docs.modules.forEach((versions) =>
    versions.functions.forEach(
        // @ts-expect-error
        (c) => (c.data.__type = "function")
    ))
docs.modules.forEach((versions) =>
    versions.types.forEach(
        // @ts-expect-error
        (c) => (c.data.__type = "type")
    ));
docs.modules.forEach((versions) =>
    versions.variables.forEach(
        // @ts-expect-error
        (c) => (c.data.__type = "variable")
    ));
docs.modules.forEach((versions) =>
    versions.enum.forEach(
        // @ts-expect-error
        (c) => (c.data.__type = "enum")
    ));

function compareVersions(a: string, b: string): number {
    const parseVersion = (version: string) => {
        const [mainVersion, suffix] = version.split('-');
        const versionParts = mainVersion.split('.').map(Number);
        return { versionParts, suffix: suffix || '' };
    };

    const { versionParts: aParts, suffix: aSuffix } = parseVersion(a);
    const { versionParts: bParts, suffix: bSuffix } = parseVersion(b);

    for (let i = 0; i < 3; i++) {
        if (aParts[i] !== bParts[i]) {
            return aParts[i] - bParts[i];
        }
    }

    if (aSuffix === '' && bSuffix === '') return 0;
    if (aSuffix === '') return 1;
    if (bSuffix === '') return -1;

    return aSuffix.localeCompare(bSuffix);
}

function sortPackages(packages: Docs): Array<Documentation> {
    return packages.modules.sort((a, b) => compareVersions(a.packageVersion, b.packageVersion));
}

sortPackages(docs);