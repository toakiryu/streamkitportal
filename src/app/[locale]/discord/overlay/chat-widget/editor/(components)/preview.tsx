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
        <div className="relative flex justify-center w-full h-full py-5">
          <div className="absolute top-2 left-2 w-full h-full">
            <style>{customCss}</style>
            <div className="chatContainer">
              <div className="channelName">
                <span className="poundSign">#</span>Channel
              </div>
              <ul className="messages">
                <li className="message">
                  <span className="timestamp">午後12:00</span>
                  <span
                    className="username"
                    style={{ color: "rgb(255, 102, 14)" }}
                  >
                    Ghost
                  </span>
                  <span className="messageText">
                    Discord は最高のアプリケーションです。
                  </span>
                </li>
                <li className="message">
                  <span className="timestamp">午後12:01</span>
                  <span
                    className="username"
                    style={{ color: "rgb(184, 230, 136)" }}
                  >
                    Apple
                  </span>
                  <span className="messageText">スイカ</span>
                </li>
                <li className="message">
                  <span className="timestamp">午後12:02</span>
                  <span
                    className="username"
                    style={{ color: "rgb(137, 227, 205)" }}
                  >
                    Otaku
                  </span>
                  <span className="messageText">カラス</span>
                </li>
                <li className="message">
                  <span className="timestamp">午後12:03</span>
                  <span
                    className="username"
                    style={{ color: "rgb(137, 227, 205)" }}
                  >
                    Kentorrr
                  </span>
                  <span className="messageText">ストローク</span>
                </li>
                <li className="message">
                  <span className="timestamp">午後12:04</span>
                  <span
                    className="username"
                    style={{ color: "rgb(184, 230, 136)" }}
                  >
                    Misd
                  </span>
                  <span className="messageText">クリックリロード</span>
                </li>
                <li className="message">
                  <span className="timestamp">午後12:05</span>
                  <span
                    className="username"
                    style={{ color: "rgb(255, 102, 14)" }}
                  >
                    OwnerOne
                  </span>
                  <span className="messageText">
                    ドロップダウンメニュー
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
