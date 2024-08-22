import { docs } from './docs';

export const DocumentationStore = {
    libraries: Object.values(docs.modules),
    libNames: Object.values(docs.modules).map((m) => m[0].name),
    libVersions: Object.values(docs.modules).flatMap((library) => {
        return library.map((v) => ({ version: v.packageVersion, name: v.name }));
    }),
};
