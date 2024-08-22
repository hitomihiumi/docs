import { Container } from "@/components/layout/Container";
import { Loader } from "@edge-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

async function getLatestVersion(packageName: string): Promise<string | null> {
    try {
        const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
        if (!response.ok) {
            throw new Error(`Failed to fetch latest version for package: ${packageName}`);
        }
        const data = await response.json();
        return data.version;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default function DocumentationEntryPoint() {
  const router = useRouter();

  var ver: string = "";
    useEffect(() => {
        if (!router.query.package) return;
        getLatestVersion(router.query.package as string).then((version) => {
            console.log(version)

            if (!version) return;
            ver = version;
        });
    }, [router.query.package]);

  useEffect(() => {
    router.push(`/docs/lazycanvas/${ver}/class/LazyCanvas`);
  }, []);

  return (
    <Container>
      <div className="grid place-items-center h-[80vh]">
        <Loader variant="bubble" className="h-16 w-16" />
      </div>
    </Container>
  );
}
