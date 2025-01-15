import lazyImport from "@/components/lazyImport";
const DiscordUIAppCard = lazyImport(() => import("./(ui)/appCard"));

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
          </div>
        </div>
        <div className="text-center">
          <span className="font-semibold text-neutral-500">
            This service is not affiliated with Discord Official.
          </span>
        </div>
      </div>
      <div className="bg-zinc-50 dark:bg-zinc-900 py-28">
        <div className="container max-w-5xl w-[90%] mx-auto p-0">
          <div className="text-center">
            <h1 className="text-2xl sm:!text-4xl md:!text-5xl mb-6 sm:!mb-8 md:!mb-10">
              お馴染み・お気に入りのアプリ
            </h1>
            <span className="text-sm sm:!text-lg md:!text-xl mb-2">
              メールを送りました。交渉先とハイタッチしました。お電話までかけました。あなたが「配信」という何よりも大切なことを最高のツールでできるように、たくさんの努力を重ねてまいりました。
            </span>
          </div>
          <section className="grid gap-5 grid-cols-1 md:!grid-cols-2 mt-20">
            <DiscordUIAppCard
              app={{
                name: "obs",
                label: "OBS",
                description:
                  "配信中にDiscordのコミュニティをカスタマイズ、宣伝、そして自慢しましょう。TwitchとDiscordのチャット欄をそれぞれ並べて表示し、ミームを同時に見せることができます。",
                icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625d0cd012636d73d27871e3_49fd096c6427cff5f45280c450895c48.png",
              }}
              list={[
                "Discordのボイスチャンネルで誰が話しているのか表示する",
                "配信中、全てのDiscordチャンネルのテキストチャットを表示する",
                "Discordのコミュニティリンクを表示する",
                "自分専用のスタイルシートで見た目や雰囲気をカスタマイズする",
                "画面上のウィジェットを好きなようにに配置できる",
              ]}
              buttons={{
                customize: {
                  label: "カスタマイズ",
                  link: "/discord/overlay",
                },
                addToDiscord: {
                  label: "Discordと連携する",
                  link: "https://streamkit.discord.com/overlay",
                },
                website: {
                  label: "公式サイト",
                  link: "https://obsproject.com/",
                },
              }}
            />
            <DiscordUIAppCard
              app={{
                name: "xsplit",
                label: "XSplit",
                description:
                  "配信中にDiscordのコミュニティをカスタマイズ、宣伝、そして自慢しましょう。Discordのチャット欄を配信上で共有して、注目を浴びせてあげましょう。",
                icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625d0cd0eb2b29576603b645_33c29f656f10691e240bd25d47f4243b.png",
              }}
              list={[
                "Discordのボイスチャンネルで誰が話しているのか表示する",
                "配信中、全てのDiscordチャンネルのテキストチャットを表示する",
                "Discordのコミュニティリンクを表示する",
                "自分専用のスタイルシートで見た目や雰囲気をカスタマイズする",
                "画面上のウィジェットを好きなようにに配置できる",
              ]}
              buttons={{
                customize: {
                  label: "カスタマイズ",
                  link: "/discord/overlay",
                },
                addToDiscord: {
                  label: "Discordと連携する",
                  link: "https://streamkit.discord.com/overlay",
                },
                website: {
                  label: "公式サイト",
                  link: "https://www.xsplit.com/",
                },
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}