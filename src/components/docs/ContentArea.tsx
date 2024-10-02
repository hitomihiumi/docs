import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type {
  Documentation,
  DocumentedClass,
  DocumentedFunction,
  DocumentedTypes,
} from "@hitomihiumi/micro-docgen";
import { HeadingMeta } from "../heading";
import { Function } from "./entities/Function";
import { ClassRenderer } from "./renderer/ClassRenderer";
import { TypeRenderer } from "./renderer/TypeRenderer";

interface IProps {
  data: Documentation;
}

interface IContentAreaProps {
    data: DocumentedClass | DocumentedTypes | DocumentedFunction | null;
    type: string | string[] | undefined;
}

export function ContentArea({ data }: IProps) {
  const router = useRouter();
  const { package: packageName, version: packageVersion, type, target, scrollTo } = router.query;
  const [currentItem, setCurrentItem] = useState<
      IContentAreaProps | null
  >(() => {
    const t =
      type === "class"
        ? "classes"
        : type === "function"
        ? "functions"
        : type === "variables"
        ? "variable"
        : type === "enum"
        ? "enum"
        : "types";
    const res = data[t as Exclude<keyof typeof data, "name">] as unknown as {
      data: DocumentedClass | DocumentedTypes | DocumentedFunction;
    }[];
    const entity: IContentAreaProps = {} as IContentAreaProps;
    entity.data = res.find((e) => e.data.name === target)?.data || null;
    entity.type = type;

    return entity;
  });

  useEffect(() => {
    const elm = document.getElementById(scrollTo as string);
    if (!elm) return;
    elm.scrollIntoView({ behavior: "smooth" });
  }, [scrollTo]);

  useEffect(() => {
    if (!packageName) return;
    if (!target || !type) {
      if (
        data.classes.length ||
        data.functions.length ||
        data.types.length ||
        data.variables.length ||
        data.enum.length
      ) {
        const t = data.classes.length
          ? "classes"
          : data.functions.length
          ? "functions"
          : data.variables.length
          ? "variable"
          : data.enum.length
          ? "enum"
          : "types";
        const resolvedType =
          t === "classes"
            ? "class"
            : t === "functions"
            ? "function"
            : type === "variable"
            ? "variable"
            : type === "enum"
            ? "enum"
            : "type";
        if (!type) {
          const dest = `/docs/${encodeURIComponent(
            packageName as string
          )}/${encodeURIComponent(packageVersion as string)}?type=${resolvedType}&target=${
            // @ts-ignore
            data[t as Exclude<keyof typeof data, "name">][0].data.name
          }${
            router.query.scrollTo ? `&scrollTo=${router.query.scrollTo}` : ""
          }`;
          return void router.replace(dest);
        }
      }
    } else {
      const t =
        type === "class"
          ? "classes"
          : type === "function"
          ? "functions"
          : type === "variable"
          ? "variables"
          : type === "enum"
          ? "enum"
          : "types";
      const res = data[t as Exclude<keyof typeof data, "name">] as unknown as {
        data: DocumentedClass | DocumentedTypes | DocumentedFunction;
      }[];

      const entity: IContentAreaProps = {} as IContentAreaProps;
      entity.data = res?.find((e) => e.data.name === target)?.data || null;
      entity.type = type;

      setCurrentItem(entity);
    }
  }, [target, type, packageName, packageVersion, data]);

  if (!currentItem || currentItem.type !== type || currentItem.data?.name !== target) return <></>;

  return (
    <>
      <HeadingMeta
        title={`${currentItem.data?.name} - ${packageName}`}
        description={`Documentation for ${currentItem.data?.name}.`}
      />
      <div className="mb-16">
        {["enum", "type", "variable"].includes(type as string) ? (
          <TypeRenderer
            entity={currentItem.data as DocumentedTypes}
            type={type as any}
          />
        ) : type === "class" ? (
          <ClassRenderer entity={currentItem.data as DocumentedClass} />
        ) : type === "function" ? (
          <Function entity={currentItem.data as DocumentedFunction} />
        ) : null}
      </div>
    </>
  );
}
