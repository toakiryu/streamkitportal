export default function DiscordOverlayStatusPreview({
  customCss,
}: {
  customCss: string | null;
}) {
  return (
    <div
      className="w-[340px] h-[300px] bg-no-repeat border rounded-md shadow-lg"
      style={{
        backgroundImage:
          "url(/wp-content/discord/cdn/media/preview-c07aa81e1a6ff9e685b2.png)",
      }}
    >
      <div className="bg-black/20 text-white w-full p-2 rounded-t-md backdrop-blur">
        Preview
      </div>
      <div className="flex justify-center w-full py-5">
        <div className="relative">
          <style>{customCss}</style>
          <div className="statusContainer">
            <div
              className="status"
              style={{
                backgroundImage: 'url("/wp-content/discord/icon-wite.svg")',
              }}
            >
              <div className="serverIcon">
                <img
                  alt="ICON"
                  src="/wp-content/discord/cdn/icons/1159691085149388800/a_4557218f6a68708cc3405519cd040ae8.gif"
                  loading="lazy"
                />
              </div>
              <div className="serverInfo">
                <span className="name">
                  𝒥𝒶𝓅𝒶𝓃 ⁓日本 🇯🇵 🏴English & Japanese🌸
                </span>
                <span className="onlineCount">0{` `}Online</span>
              </div>
              <div className="inviteLink">discord.gg/{}japan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
