"use client";

import React from "react";
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
      <div className={idStyle("chatContainer")}>
        <div className={idStyle("channelName")}>
          <span className={idStyle("poundSign")}>#</span>Channel
        </div>
        <ul className={idStyle("messages")}>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:00</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(255, 102, 14)" }}
            >
              Ghost
            </span>
            <span className={idStyle("messageText")}>
              Discord は最高のアプリケーションです。
            </span>
          </li>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:01</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(184, 230, 136)" }}
            >
              Apple
            </span>
            <span className={idStyle("messageText")}>スイカ</span>
          </li>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:02</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(137, 227, 205)" }}
            >
              Otaku
            </span>
            <span className={idStyle("messageText")}>カラス</span>
          </li>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:03</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(137, 227, 205)" }}
            >
              Kentorrr
            </span>
            <span className={idStyle("messageText")}>ストローク</span>
          </li>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:04</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(184, 230, 136)" }}
            >
              Misd
            </span>
            <span className={idStyle("messageText")}>クリックリロード</span>
          </li>
          <li className={idStyle("message")}>
            <span className={idStyle("timestamp")}>午後12:05</span>
            <span
              className={idStyle("username")}
              style={{ color: "rgb(255, 102, 14)" }}
            >
              OwnerOne
            </span>
            <span className={idStyle("messageText")}>
              ドロップダウンメニュー
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TemplatePreviewCard;
