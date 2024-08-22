import Link from "next/link";
import { cn } from "@edge-ui/react";

export default function Footer() {
  return (
    <footer className="border-t py-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center">
          <h2 className={cn("text-lg font-bold select-none")}>LazyCanvas</h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">Links</h3>
            <Link href="/docs" className="text-blue-500">
              Documentation
            </Link>
          </div>
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">Social</h3>
            <Link
              href="https://github.com/hitomihiumi"
              className="text-blue-500"
            >
              GitHub
            </Link>
          </div>
          <div className="flex items-start flex-col text-sm">
            <h3 className="font-semibold">About</h3>
            <Link
              href="https://github.com/hitomihiumi/lazy-canvas-ts/blob/master/CODE_OF_CONDUCT.md"
              className="text-blue-500"
            >
              Code of Conduct
            </Link>
            <Link
              href="https://github.com/hitomihiumi/lazy-canvas-ts/blob/master/license.md"
              className="text-blue-500"
            >
              LICENSE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
