export type appsLinkType = {
  link?: string;
  releaseType: "release" | "pre-release" | "beta" | "dev" | "comingsoon" | "!coming"
  alt: string;
  src: string;
  className: string;
};

export const appsLinks: appsLinkType[] = [
  {
    link: "/discord",
    releaseType: "pre-release",
    alt: "Discord",
    src: "/wp-content/discord/brand/full_logo_white.png",
    className: "bg-indigo-500",
  },
  {
    releaseType: "comingsoon",
    alt: "Youtube",
    src: "/wp-content/youtube/brand/full_logo_light.png",
    className: "bg-white",
  },
  {
    releaseType: "comingsoon",
    alt: "Twitch",
    src: "/wp-content/twitch/brand/wordmark_extruded_white.png",
    className: "bg-violet-500",
  },
  {
    releaseType: "comingsoon",
    alt: "Streamlabs",
    src: "/wp-content/streamlabs/brand/full_logo_light.png",
    className: "bg-white",
  },
  {
    releaseType: "!coming",
    alt: "COMING SOON",
    src: "/wp-content/streamkitportal/brand/full_logo_white.png",
    className: "bg-black/20 dark:bg-white/20",
  },
];
