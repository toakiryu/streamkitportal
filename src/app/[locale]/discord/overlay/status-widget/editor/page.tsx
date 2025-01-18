import { Suspense } from "react";
import { lazyImport } from "@/components/lazyImport";
const TabStatusMainContainer = lazyImport(() => import("./(components)/main"));

export default async function PageDiscordOverlayStatusWidget() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <Suspense>
        <TabStatusMainContainer />
      </Suspense>
    </div>
  );
}
