import { Suspense } from "react";
import lazyImport from "@/components/lazyImport";
const TabStatusMainContainer = lazyImport(() => import("./(tab-status)/main"));

export default function PageDiscordOverlay() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <Suspense>
        <TabStatusMainContainer />
      </Suspense>
    </div>
  );
}
