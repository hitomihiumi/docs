import { Container } from '@/components/layout/Container';
import { DocumentationStore } from '@/lib/store';
import { Loader } from '@edge-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {Docs, docsProcess, fetchDocs} from "@/lib/docs";

export default function DocumentationEntryPoint() {
    const router = useRouter();

    useEffect(() => {
        if (!router.query.package) return;
        let docs: Docs = { modules: [] };
        fetchDocs().then((data) => {
            docs.modules = data;
            docs = docsProcess(docs);

            DocumentationStore.libraries = docs.modules;
            var pkg = DocumentationStore.libraries.find((lib) => lib.name === router.query.package as string);
            if (router.query.version) DocumentationStore.libraries.find((lib) => lib.name === router.query.package as string && lib.version === router.query.version as string);

            if (!pkg) return;

            const name = pkg.name;
            const version = pkg.version;
            const type = pkg.classes.length ? 'class' : pkg.types.length ? 'type' : pkg.functions.length ? 'function' : '';
            const target = pkg.classes.length ? pkg.classes[0].data.name : pkg.types.length ? pkg.types[0].data.name : pkg.functions.length ? pkg.functions[0].data.name : '';

            if (!target || !type) return;

            router.push(`/docs/${encodeURIComponent(name)}/${encodeURIComponent(version)}/${encodeURIComponent(type)}/${encodeURIComponent(target)}`);
        });
    }, [router.query.package, router.query.version]);

    return (
        <Container>
            <div className="grid place-items-center h-[80vh]">
                <Loader variant="bubble" className="h-16 w-16" />
            </div>
        </Container>
    );
}
