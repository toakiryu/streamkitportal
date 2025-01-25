import { Metadata } from "next";
import { lazyImport } from "@/components/lazyImport";
import { Link } from "@/i18n/routing";
const PageAppsAppList = lazyImport(() => import("./(components)/appList"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Apps",
  };
}

export default function PageApps() {
  return (
    <div className="flex flex-col justify-center items-baseline w-full min-h-dvh py-10">
      <PageAppsAppList />
      <div className="container max-w-5xl flex flex-col justify-center items-center w-full mt-10">
        <Link
          href="/"
          className="bg-indigo-600/90 dark:!bg-indigo-500/90 text-white text-sm text-center font-normal flex justify-center items-center w-full max-w-xl mt-5 py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:opacity-70 hover:shadow-md active:scale-95"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
