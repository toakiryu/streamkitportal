import localFont from "next/font/local";

const ggsans = localFont({
  variable: "--font-gg-sans",
  src: [
    {
      path: "./overlay/_fonts/ggsans-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./overlay/_fonts/ggsans-600-semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./overlay/_fonts/ggsans-700-bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

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
