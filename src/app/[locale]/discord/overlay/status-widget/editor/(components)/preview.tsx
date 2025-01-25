"use client";

import { getIconPass } from "@/app/[locale]/discord/(components)/getRandomIcon";
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
      className="w-[340px] bg-no-repeat border rounded-md shadow-lg select-none overflow-hidden"
      style={{
        height: isPreviewOpen ? "250px" : "fit-content",
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
                    src={getIconPass("blue")}
                    style={{
                      filter: isImageLoaded ? "none" : "blur(20px)",
                    }}
                    loading="lazy"
                    fetchPriority="high"
                  />
                </div>
                <div className="serverInfo">
                  <span className="name">
                    Server name
                  </span>
                  <span className="onlineCount">0{` `}Online</span>
                </div>
                <div className="inviteLink">discord.gg/{}server</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
