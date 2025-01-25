import { Suspense } from "react";
import { headers } from "next/headers";

import "./githubMarkdown.css";

import { lazyImport } from "@/components/lazyImport";
const GenerationBreadcrumbs = lazyImport(() => import("./(ui)/generationBreadcrumbs"));

export default async function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = await headers();
  const pathname = header.get("x-pathname");
  let pathSegments = "/";

  if (pathname) {
    const modifiedPathname = pathname.split("/").slice(2).join("/");
    pathSegments = modifiedPathname;
  } else {
    console.error("Pathname not found in headers.");
  }

  return (
    <div className="w-full h-full min-h-dvh bg-zinc-100 dark:bg-zinc-900">
      <div className="container max-w-5xl">
        <div className="flex flex-col pb-5">
          <div className="my-5">
            <Suspense>
              <GenerationBreadcrumbs pathSegments={pathSegments} />
            </Suspense>
          </div>
          <div className="markdown-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
