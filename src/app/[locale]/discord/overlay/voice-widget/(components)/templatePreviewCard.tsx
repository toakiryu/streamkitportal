"use client";

import React from "react";
import { getIconPass } from "../../../(components)/getRandomIcon";
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
      <div className={idStyle("voiceContainer")}>
        <ul className={idStyle("voiceStates")}>
          <li className={idStyle("voiceState")} data-userid={0}>
            <img
              className={`${idStyle("avatar")} ${idStyle("avatarSpeaking")}`}
              src={getIconPass("blue")}
              alt=""
            />
            <div className={idStyle("user")}>
              <span className={idStyle("name")}>Username</span>
            </div>
          </li>
          <li className={idStyle("voiceState")} data-userid={1}>
            <img className={idStyle("avatar")} src={getIconPass("green")} alt="" />
            <div className={idStyle("user")}>
              <span className={idStyle("name")}>Username</span>
            </div>
          </li>
          <li className={idStyle("voiceState")} data-userid={2}>
            <img className={idStyle("avatar")} src={getIconPass("grey")} alt="" />
            <div className={idStyle("user")}>
              <span className={idStyle("name")}>Username</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TemplatePreviewCard;
