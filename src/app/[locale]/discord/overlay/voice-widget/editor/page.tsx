import { Suspense } from "react";
import { lazyImport } from "@/components/lazyImport";
import { Link } from "@/i18n/routing";
import { Metadata } from "next";
const TabStatusMainContainer = lazyImport(() => import("./(components)/main"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Voice Widget Editor",
  };
}

export default async function PageDiscordOverlayStatusWidget() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="bg-indigo-600 text-white">
        <div className="container max-w-5xl py-10">
          <div>
            <h1 className="font-bold text-5xl uppercase mb-3">
              Voice widget - Editor
            </h1>
            <span>
              配信中にDiscordのコミュニティをカスタマイズ、宣伝、そして自慢しましょう。TwitchとDiscordのチャット欄をそれぞれ並べて表示し、ミームを同時に見せることができます。
            </span>
          </div>
          <div className="flex flex-wrap gap-5 w-full mt-10">
            <Link
              href="/discord/overlay/voice-widget"
              className="bg-zinc-50 text-indigo-600 font-bold p-3 rounded-md shadow transition-all duration-200 ease-in-out hover:opacity-70 active:scale-95"
            >
              テンプレートを見る
            </Link>
            <Link
              href="/discord/overlay"
              className="bg-zinc-50 text-indigo-600 font-bold p-3 rounded-md shadow transition-all duration-200 ease-in-out hover:opacity-70 active:scale-95"
            >
              他のツールも見る
            </Link>
          </div>
        </div>
      </div>
      <Suspense>
        <TabStatusMainContainer />
      </Suspense>
    </div>
  );
}
