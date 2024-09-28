import type { Documentation } from "@hitomihiumi/micro-docgen";

export interface Docs {
    modules: Array<Documentation>;
}

export var docs = { modules: [] } as Docs;

// @ts-ignore
export async function fetchDocs(): Promise<Documentation[]>  {
    try {
        const response = await fetch('https://api.hitomihiumi.xyz/v1/docs/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка при загрузке файла: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export function docsProcess(docs: Docs) {
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
    return docs;
}