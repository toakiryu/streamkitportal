import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import localFont from "next/font/local";

import "./_modules/root.css"

const ggsans = localFont({
  variable: "--font-gg-sans",
  src: [
    {
      path: "./_fonts/ggsans-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/ggsans-600-semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./_fonts/ggsans-700-bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      template: `%s -Discord | ${t(`title`)}`,
      default: "Discord",
    },
  };
}

export default async function DiscordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${ggsans.className} w-full h-full bg-zinc-100 dark:bg-zinc-900 font-ggsans`}
    >
      {children}
    </div>
  );
}
