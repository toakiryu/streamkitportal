import { Spotlight } from "@/components/ui/spotlight-new";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Spotlight <br /> which is not overused.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A subtle yet effective spotlight effect, because the previous
            version is used a bit too much these days.
          </p>
        </div>
      </div>
      <div className="w-full h-dvh">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/wp-content/streamkitportal/icon-3d.png"
              className="w-52"
            />
            <h1 className="font-bold text-5xl text-center">StreamKit Portal</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
