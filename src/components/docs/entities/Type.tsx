import { EXTERNAL_LINKS, DocumentationStore } from "@/lib/store";
import { cleanupTypes } from "@/lib/util";
import { cn } from "@edge-ui/react";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from 'next/router';
import { Documentation } from "@hitomihiumi/micro-docgen";

/*
                module: mod.name,
                href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/enum/${c.data.name}`,
                target: c.data.name,
                type: "enum",
 */

export function Type({ types, prefix }: { types: string[]; prefix?: string }) {
  const router = useRouter();

  const docsLink = (() => {
    type DocLink = {
      module: string;
      type: "class" | "function" | "type" | "variable" | "enum";
      href: string;
      target: string;
    };

    const entries: DocLink[] = [];

    //@ts-ignore
    let lib: Documentation = DocumentationStore.libraries.find((module) => module.name === router.query.package as string && module.version === router.query.version as string)

    lib.classes.forEach((c) =>
        entries.push({
          module: lib.name,
          href: `/docs/${encodeURIComponent(lib.name)}/${encodeURIComponent(lib.version)}/class/${c.data.name}`,
          target: c.data.name,
          type: "class",
        }));
    lib.functions.forEach((c) =>
        entries.push({
          module: lib.name,
          href: `/docs/${encodeURIComponent(lib.name)}/${encodeURIComponent(lib.version)}/function/${c.data.name}`,
          target: c.data.name,
          type: "function",
        }));
    lib.types.forEach((c) =>
        entries.push({
          module: lib.name,
          href: `/docs/${encodeURIComponent(lib.name)}/${encodeURIComponent(lib.version)}/type/${c.data.name}`,
          target: c.data.name,
          type: "type",
        }));
    lib.variables.forEach((c) =>
        entries.push({
          module: lib.name,
          href: `/docs/${encodeURIComponent(lib.name)}/${encodeURIComponent(lib.version)}/variable/${c.data.name}`,
          target: c.data.name,
          type: "variable",
        }));
    lib.enum.forEach((c) =>
        entries.push({
          module: lib.name,
          href: `/docs/${encodeURIComponent(lib.name)}/${encodeURIComponent(lib.version)}/enum/${c.data.name}`,
          target: c.data.name,
          type: "enum",
        })
    );


    return { internal: entries, external: EXTERNAL_LINKS };
  })();

  const resolvedType = useMemo(() => {
    const resolved: JSX.Element[] = [];

    const _types = cleanupTypes(types);

    for (let i = 0; i < _types.length; i++) {
      const type = _types[i];
      const mod = docsLink.internal.find((entry) => entry.target === type);
      if (!mod) {
        if (!(type in EXTERNAL_LINKS)) {
          resolved.push(
            <span
              key={`${i}-${type}-unresolved`}
              className={cn(
                "font-semibold",
                ["keyof", "typeof", ";", "{", ":"].includes(type)
                  ? "mr-2"
                  : type === "|"
                  ? "mx-1"
                  : "",
                "text-sm"
              )}
            >
              {type}
            </span>
          );
          continue;
        }

        resolved.push(
          <Link
            href={EXTERNAL_LINKS[type as keyof typeof EXTERNAL_LINKS]}
            key={`${i}-${type}-${mod}`}
            className="text-teal-600 font-semibold text-sm"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>{type}</span>
          </Link>
        );
      } else {
        resolved.push(
          <Link
            href={mod.href}
            key={`${i}-${type}-${mod}`}
            className={cn(
              "font-semibold text-sm",
              mod.type === "class"
                ? "text-yellow-600"
                : mod.type === "function"
                ? "text-purple-600"
                : "text-sky-600"
            )}
          >
            <span>{mod.target}</span>
          </Link>
        );
      }
    }

    return resolved;
  }, [types]);

  return (
    <div className="flex flex-row items-center">
      {prefix ? <span className="mr-2">{prefix}</span> : null}
      {resolvedType}
    </div>
  );
}
