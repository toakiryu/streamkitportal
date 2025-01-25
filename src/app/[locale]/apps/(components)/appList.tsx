import { Link } from "@/i18n/routing";
import { Image } from "@nextui-org/react";
import { appsLinks } from "../apps.link";
import { cn } from "@/lib/utils";

export default function PageAppsAppList() {
  return (
    <section className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-3 container max-w-5xl">
      {appsLinks.map((app, index) => {
        if (app.releaseType === "!coming") {
          return (
            <div
              key={index}
              className={cn(
                "relative flex justify-center items-center w-full h-36 p-5 border rounded-md shadow-md cursor-not-allowed hover:opacity-70 active:scale-95 transition-all duration-200 ease-in-out select-none",
                app.className
              )}
            >
              <h1 className="text-2xl">COMING SOON</h1>
            </div>
          );
        }
        if (app.link) {
          return (
            <Link
              key={index}
              href={app.link}
              className={cn(
                "relative flex justify-center items-center w-full h-36 p-5 border rounded-md shadow-md cursor-pointer hover:opacity-70 active:scale-95 transition-all duration-200 ease-in-out",
                app.className
              )}
            >
              <Image
                alt={app.alt}
                src={app.src}
                width={288}
                className="w-72 h-auto rounded-none pointer-events-none select-none"
                loading="lazy"
              />
            </Link>
          );
        }
        return (
          <div
            key={index}
            className={cn(
              "relative flex justify-center items-center w-full h-36 p-5 border rounded-md shadow-md cursor-not-allowed hover:opacity-70 active:scale-95 transition-all duration-200 ease-in-out select-none",
              app.className
            )}
            aria-disabled
          >
            <Image
              alt={app.alt}
              src={app.src}
              width={288}
              className="z-0 w-72 h-auto rounded-none"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 bg-black/80 flex flex-col justify-center items-center w-full h-full rounded-md">
              <h1 className="font-bold text-2xl text-white uppercase">
                no released
              </h1>
            </div>
          </div>
        );
      })}
    </section>
  );
}
