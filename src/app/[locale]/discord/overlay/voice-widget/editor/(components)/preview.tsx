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
          <div className="relative w-full">
            <style>{customCss}</style>
            <div className="voiceContainer">
              <ul className="voiceStates">
                <li className="voiceState" data-userid={0}>
                  <img
                    className="avatar avatarSpeaking"
                    src={getIconPass("blue")}
                    alt=""
                  />
                  <div className="user">
                    <span className="name">Username</span>
                  </div>
                </li>
                <li className="voiceState" data-userid={1}>
                  <img className="avatar" src={getIconPass("green")} alt="" />
                  <div className="user">
                    <span className="name">Username</span>
                  </div>
                </li>
                <li className="voiceState" data-userid={2}>
                  <img className="avatar" src={getIconPass("grey")} alt="" />
                  <div className="user">
                    <span className="name">Username</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
