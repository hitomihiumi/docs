import { docs, Docs } from './docs';
import Fuse from "fuse.js";
import type { Documentation } from "@hitomihiumi/micro-docgen";

function sortPackages(packages: Array<Documentation>): Array<Documentation> {
    return packages.sort((a, b) => b.metadata.timestamp - a.metadata.timestamp);
}

export const DocumentationStore = {
    libraries: sortPackages(docs.modules),
};

type Doc = {
    name: string;
    type: "class" | "function" | "type" | "property" | "variable" | "enum";
    href: string;
    module: string;
    displayName: string;
};

export const EXTERNAL_LINKS = {
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

export function searchDocs(query: string){
    var props: Doc[] = [];

    DocumentationStore.libraries.forEach((mod) => {
        //console.log(mod)
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

                return props;
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

                return props;
            });

            return props;
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
        return props;
    })

    const fuse = new Fuse(props, {
        keys: ["name"],
        shouldSort: true,
        threshold: 0.5,
        location: 0,
        distance: 80,
        minMatchCharLength: 1,
    });

    //console.log(props)
    //console.log(fuse.search(query, { limit: 50 }).map((r) => r.item))

    return fuse.search(query, { limit: 50 }).map((r) => r.item);
}