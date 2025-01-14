export default function PageDiscordOverlay() {
  return (
    <div className="bg-white bg-fixed bg-[200px_202px] bg-[url(/wp-content/discord/cdn/media/ptrn_consoles_light.png)]">
      <div className="container max-w-5xl min-h-dvh flex flex-col justify-center items-center">
        <div className="flex flex-[1_1] flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="font-black text-3xl sm:!text-4xl md:!text-5xl text-neutral-900">
                StreamKit Portal
              </h1>
            </div>
            <span className="font-thin text-2xl sm:!text-3xl text-neutral-600 uppercase">
              For
            </span>
            <div className="flex">
              <h1 className="font-black text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl text-indigo-500">
                Discord
              </h1>
              <h1 className="font-thin text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl text-indigo-500 uppercase ml-1">
                StreamKit
              </h1>
            </div>
            <span className="font-semibold text-xl sm:!text-2xl text-zinc-800 uppercase">
              Overlay for OBS & XSplit
            </span>
          </div>
        </div>
        <div>
          <span className="font-semibold text-neutral-500">Three customizable Discord widgets for your stream.</span>
        </div>
      </div>
    </div>
  );
}
