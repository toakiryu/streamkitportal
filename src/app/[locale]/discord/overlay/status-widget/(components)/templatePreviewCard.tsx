"use client";

import React from "react";
import { getRandomIconPass } from "../../../(components)/getRandomIcon";
import { decodeShareCode } from "../../../(components)/edit";

// クラス名を動的に変換
const generateCustomCss = (id: number, cssText: string) => {
  return cssText
    .split("\n")
    .map((line) => {
      if (line.includes("{")) {
        // クラス名を変換
        const className = line.replace(/^\s+/, "").split(" ")[0].trim();
        const newClassName = `.${className.replace(".", "")}__${id}`;
        return line.replace(className, newClassName);
      } else if (line.includes(":")) {
        // すべてのプロパティに !important を追加
        return line.replace(/([^\s:]+:\s?[^;]+)(;)/g, "$1 !important$2");
      }
      return line;
    })
    .join("\n");
};

function TemplatePreviewCard({
  id,
  code,
  css,
}: {
  id: number;
  code?: string;
  css?: string;
}) {
  const style = css
    ? generateCustomCss(id, css)
    : generateCustomCss(id, decodeShareCode(code || "") || "");

  function idStyle(style: string) {
    return `${style}__${id}`;
  }

  return (
    <div className="overflow-hidden select-none">
      <style>{style}</style>
      <div className={idStyle("statusContainer")}>
        <div
          className={idStyle("status")}
          style={{
            backgroundImage: 'url("/wp-content/discord/icon-wite.svg")',
          }}
        >
          <div className={idStyle("serverIcon")}>
            <img
              alt="ICON"
              src={getRandomIconPass()}
              loading="lazy"
              fetchPriority="high"
            />
          </div>
          <div className={idStyle("serverInfo")}>
            <span className={idStyle("name")}>Server Name</span>
            <span className={idStyle("onlineCount")}>0{` `}Online</span>
          </div>
          <div className={idStyle("inviteLink")}>discord.gg/{}server</div>
        </div>
      </div>
    </div>
  );
}

export default TemplatePreviewCard;
