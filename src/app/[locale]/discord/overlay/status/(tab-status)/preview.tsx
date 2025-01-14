"use client";

import { useEffect, useState } from "react";

export default function DiscordOverlayStatusPreview({
  customCss,
}: {
  customCss: string | null;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(true);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 500);
  }, []);

  return (
    <div
      className="w-[340px] bg-no-repeat border rounded-md shadow-lg select-none"
      style={{
        height: isPreviewOpen ? "150px" : "fit-content",
        backgroundImage: isImageLoaded
          ? "url(/wp-content/discord/cdn/media/preview-c07aa81e1a6ff9e685b2.png)"
          : "transparent",
        filter: isImageLoaded ? "none" : "blur(20px)",
      }}
      onClick={() => setIsPreviewOpen(!isPreviewOpen)}
    >
      <div
        className="bg-black/20 text-white w-full p-2 backdrop-blur"
        style={{
          borderTopLeftRadius: "calc(var(--radius) - 2px)",
          borderTopRightRadius: "calc(var(--radius) - 2px)",
          borderBottomLeftRadius: isPreviewOpen
            ? "0px"
            : "calc(var(--radius) - 2px)",
          borderBottomRightRadius: isPreviewOpen
            ? "0px"
            : "calc(var(--radius) - 2px)",
        }}
      >
        {isPreviewOpen ? "Hide Preview" : "Show Preview"}
      </div>
      {isPreviewOpen && (
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
                    style={{
                      filter: isImageLoaded ? "none" : "blur(20px)",
                    }}
                    loading="lazy"
                    fetchPriority="high"
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
      )}
    </div>
  );
}
