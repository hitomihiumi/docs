import { Container } from "@/components/layout/Container";
import { Loader } from "@edge-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DocumentationStore } from "@/lib/store";
const { libraries } = DocumentationStore;

export default function DocumentationEntryPoint() {
  const router = useRouter();

    useEffect(() => {
         var pkg = libraries.find((lib) => lib.name === 'lazycanvas');

            if (!pkg) return;

            const name = pkg.name;
            const version = pkg.packageVersion;
            const type = pkg.classes.length ? 'class' : pkg.types.length ? 'type' : pkg.functions.length ? 'function' : '';
            const target = pkg.classes.length ? pkg.classes[0].data.name : pkg.types.length ? pkg.types[0].data.name : pkg.functions.length ? pkg.functions[0].data.name : '';

            if (!target || !type) return;

            router.push(`/docs/${encodeURIComponent(name)}/${encodeURIComponent(version)}/${encodeURIComponent(type)}/${encodeURIComponent(target)}`);
    });

  return (
    <Container>
      <div className="grid place-items-center h-[80vh]">
        <Loader variant="bubble" className="h-16 w-16" />
      </div>
    </Container>
  );
}
