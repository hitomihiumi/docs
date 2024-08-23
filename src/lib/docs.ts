import type { Documentation } from "@hitomihiumi/micro-docgen";
import Fuse from "fuse.js";

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

fetchAndProcessDocs(docs).then((result) => {
    docs = result;
    //console.log('Обработанные данные:', result);
});

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

type Doc = {
  name: string;
  type: "class" | "function" | "type" | "property" | "variable" | "enum";
  href: string;
  module: string;
  displayName: string;
};

const EXTERNAL_LINKS = {
  string:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
  String:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
  number:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
  Number:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
  boolean:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
  Boolean:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
  symbol:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
  Symbol:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
  void: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
  undefined:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
  Object:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
  object:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
  Function:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
  function:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
  Array:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  Set: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
  Map: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
  Date: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
  RegExp:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  Promise:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  Error:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",
  Generator:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator",
  EventEmitter:
    "https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",
  Timeout:
    "https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",
  Buffer:
    "https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",
  ReadableStream:
    "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
  Readable:
    "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
  Duplex:
    "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_duplex",
  ChildProcess:
    "https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",
  Worker:
    "https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",
  MessagePort:
    "https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",
  IncomingMessage:
    "https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_incomingmessage",
  RequestInfo:
    "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch",
  RequestInit:
    "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch",
  RequestOptions:
    "https://nodejs.org/dist/latest/docs/api/http.html#http_http_request_options_callback",
  Response: "https://developer.mozilla.org/en-US/docs/Web/API/Response",
};

export const docsLink = (() => {
  type DocLink = {
    module: string;
    type: "class" | "function" | "type" | "variable" | "enum";
    href: string;
    target: string;
  };

  const entries: DocLink[] = [];

  const mods = Object.values(docs.modules);

  for (const mod of mods) {
    mod.classes.forEach((c) =>
        entries.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/class/${c.data.name}`,
            target: c.data.name,
            type: "class",
        }));
    mod.functions.forEach((c) =>
        entries.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/function/${c.data.name}`,
            target: c.data.name,
            type: "function",
        }));
    mod.types.forEach((c) =>
        entries.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/type/${c.data.name}`,
            target: c.data.name,
            type: "type",
        }));
    mod.variables.forEach((c) =>
        entries.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/variable/${c.data.name}`,
            target: c.data.name,
            type: "variable",
        }));
    mod.enum.forEach((c) =>
        entries.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/enum/${c.data.name}`,
            target: c.data.name,
            type: "enum",
        })
    );
  }

  return { internal: entries, external: EXTERNAL_LINKS };
})();

const seed: Doc[] = (() => {
  const props: Doc[] = [];

  for (const mod of Object.values(docs.modules)) {
    mod.classes.forEach((cls) => {
        props.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/class/${cls.data.name}`,
            name: cls.data.name,
            type: "class",
            displayName: cls.data.name,
        });

        cls.data.methods.forEach((method) => {
            props.push({
                href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/class/${
                    cls.data.name
                }?scrollTo=fm-${method.name}`,
                module: mod.name,
                name: method.name,
                type: "function",
                displayName: `${cls.data.name}.${method.name}()`,
            });
        });

        cls.data.properties.forEach((prop) => {
            props.push({
                href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/class/${
                    cls.data.name
                }?scrollTo=p-${prop.name}`,
                module: mod.name,
                name: prop.name,
                type: "property",
                displayName: `${cls.data.name}.${prop.name}`,
            });
        });
    });

    mod.types.forEach((cls) =>
        props.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/type/${cls.data.name}`,
            name: cls.data.name,
            type: "type",
            displayName: cls.data.name,
        })
    );

    mod.functions.forEach((cls) =>
        props.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/function/${cls.data.name}`,
            name: cls.data.name,
            type: "function",
            displayName: cls.data.name,
        })
    );

    mod.variables.forEach((cls) =>
        props.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/variable/${cls.data.name}`,
            name: cls.data.name,
            type: "variable",
            displayName: cls.data.name,
        })
    );

    mod.enum.forEach((cls) =>
        props.push({
            module: mod.name,
            href: `/docs/${encodeURIComponent(mod.name)}/${encodeURIComponent(mod.packageVersion)}/enum/${cls.data.name}`,
            name: cls.data.name,
            type: "enum",
            displayName: cls.data.name,
        })
    );
  }

  return props;
})();

const fuse = new Fuse(seed, {
  keys: ["name"],
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 80,
  minMatchCharLength: 1,
});

export function searchDocs(query: string) {
  return fuse.search(query, { limit: 50 }).map((r) => r.item);
}
