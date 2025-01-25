"use client";

import { lazyImport } from "@/components/lazyImport";
const InfiniteMovingCards = lazyImport(
  () => import("@/components/ui/infinite-moving-cards")
);

function CustomInfiniteMovingCards({
  items,
  direction,
}: {
  items: {
    light: string;
    dark: string;
  }[];
  direction: "left" | "right";
}) {
  return (
    <div className="w-full overflow-hidden select-none pointer-events-none">
      <InfiniteMovingCards
        items={items}
        speed="normal"
        direction={direction}
        pauseOnHover={false}
      />
    </div>
  );
}

export default function PageHeroAnimateBrands() {
  const items = [
    {
      light: "/wp-content/discord/brand/full_logo_blurple.png",
      dark: "/wp-content/discord/brand/full_logo_blurple.png",
    },
    {
      light: "/wp-content/youtube/brand/full_logo_light.png",
      dark: "/wp-content/youtube/brand/full_logo_dark.png",
    },
    {
      light: "/wp-content/twitch/brand/wordmark_extruded_purple.png",
      dark: "/wp-content/twitch/brand/wordmark_extruded_purple.png",
    },
    {
      light: "/wp-content/streamlabs/brand/full_logo_light.png",
      dark: "/wp-content/streamlabs/brand/full_logo_dark.png",
    },
  ];

  return (
    <div className="w-full mt-10">
      <div className="relative container flex flex-col justify-center items-center max-w-5xl px-8 py-5 mx-auto">
        <div className="flex flex-col w-full text-center mb-10">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#00000066] dark:from-[#FFFFFF] dark:to-[#FFFFFF66] font-bold text-xl sm:!text-3xl md:!text-4xl mb-3">
            対応しているサービス
          </h1>
          <p className="text-sm text-foreground-500">
            当サービスでカスタマイズやテンプレートを提供しているサービス
          </p>
        </div>
        <CustomInfiniteMovingCards items={items} direction="left" />
        <CustomInfiniteMovingCards items={items} direction="right" />
      </div>
    </div>
  );
}
