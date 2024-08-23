import { jbMono, archivo } from "@/lib/constants";
import {
  Separator,
  Button,
  cn,
  GitHubIcon,
  Heading,
  Label,
} from "@edge-ui/react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="mt-5 flex items-center justify-center flex-col background min-h-[75vh]">
      <div className="flex flex-col items-center md:max-w-[90%] lg:max-w-[70%] mt-16 space-y-10">
        <Heading.H1
          className={cn(
            "lg:text-8xl md:text-7xl text-5xl uppercase select-none text-center",
              archivo.className
          )}
        >
          lazycanvas
        </Heading.H1>
        <Heading.H5 className="text-muted-foreground font-normal border-t-0 text-center md:text-center">
          LazyCanvas is designed specifically to simplify interaction with canvas, and reduce development time with available functionality.
        </Heading.H5>
      </div>
      <div className="flex items-center gap-4 mt-6 px-4 flex-col md:flex-row w-full md:w-auto">
        <Link href="/docs" className="w-full md:w-auto">
          <Button size="lg" className="w-full md:w-auto">
            Get Started
          </Button>
        </Link>
        <Link
          href="https://github.com/hitomihiumi/lazy-canvas-ts"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full md:w-auto"
        >
          <Button
            variant="outline"
            className="gap-1 w-full  md:w-auto"
            size="lg"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </Button>
        </Link>
      </div>
      <div className="mt-5">
        <Label className={cn(jbMono.className, "text-muted-foreground")}>
          <span className="select-none">$</span> npm i @hitomihiumi/lazycanvas@latest
        </Label>
      </div>
    </div>
  );
}
