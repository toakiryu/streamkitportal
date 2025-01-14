"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, useDisclosure } from "@nextui-org/react";
import LZString from "lz-string";

import { defaultCss } from "./default-css";
import lazyImport from "@/components/lazyImport";
const DiscordOverlayStatusPreview = lazyImport(() => import("./preview"));
const DiscordOverlayStatusCustom = lazyImport(() => import("./custom"));
const GenerationCssContentModal = lazyImport(
  () => import("../../(ui)/generationCssContentModal")
);
const ShareCssContentDrawer = lazyImport(
  () => import("../../(ui)/shareCssContentDrawer")
);

// CSSコードを圧縮
const encodeShareCode = (code: string): string => {
  return encodeURIComponent(LZString.compressToEncodedURIComponent(code)); // 圧縮してURLエンコード
};

// 圧縮されたCSSコードを解凍
const decodeShareCode = (encodedCode: string): string | null => {
  const decoded = LZString.decompressFromEncodedURIComponent(
    decodeURIComponent(encodedCode)
  ); // URLデコードして解凍
  return decoded || null; // 解凍できなかった場合は空文字列
};

export default function TabStatusMainContainer() {
  const searchParams = useSearchParams();
  const [customCss, setCustomCss] = useState<string>("");

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
    onOpenChange: onDrawerOpenChange,
  } = useDisclosure();

  const [shareUrl, setShareUrl] = useState<string | null>(null);

  const [generatedCustomCss, setGeneratedCustomCss] = useState<string>("");
  const [isCssLoaded, setIsCssLoaded] = useState(false); // CSSが読み込まれたかを追跡

  // `sharecode`パラメータがあれば、それをデコードして表示
  const sharecode = searchParams.get("sharecode");

  useEffect(() => {
    if (sharecode && typeof sharecode === "string") {
      const decodedCss = decodeShareCode(sharecode);
      if (decodedCss) {
        setCustomCss(decodedCss);
        setIsCssLoaded(true); // CSSが読み込まれたことを示す
        return;
      }
    }
    setCustomCss(defaultCss);
    setIsCssLoaded(true); // デフォルトCSSが読み込まれたことを示す
  }, [sharecode]);

  const handleCopy = (text: string | null) => {
    navigator.clipboard.writeText(text as string).then(
      () => {
        console.log("clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: " + err);
      }
    );
  };

  // クラス名を動的に変換
  const generateCustomCss = (cssText: string) => {
    return cssText
      .split("\n")
      .map((line) => {
        if (line.includes("{")) {
          // クラス名を変換
          const className = line.split(" ")[0].trim();
          const newClassName = `[class*="Status_${className.replace(
            ".",
            ""
          )}__"]`;
          return line.replace(className, newClassName);
        } else if (line.includes(":")) {
          // すべてのプロパティに !important を追加
          return line.replace(/([^\s:]+:\s?[^;]+)(;)/g, "$1 !important$2");
        }
        return line;
      })
      .join("\n");
  };

  const handleGeneratedCSS = () => {
    setGeneratedCustomCss(generateCustomCss(customCss));
    onModalOpen();
  };

  const handleShare = () => {
    const encodedCss = encodeShareCode(customCss); // 現在のCSSをエンコード
    const shareUrl = `${window.location.origin}/discord/overlay?sharecode=${encodedCss}`; // URLを生成
    setShareUrl(shareUrl);
    onDrawerOpen();
  };

  function ButtonContentContainer() {
    return (
      <div className="flex flex-wrap gap-3 w-full mt-5 mb-10">
        <Button
          className="w-full bg-green-700 text-white"
          variant="shadow"
          onPress={handleGeneratedCSS}
        >
          Copy Generated CSS
        </Button>
        <Button
          className="w-full bg-green-700 text-white"
          variant="shadow"
          onPress={handleShare}
        >
          Share Customize
        </Button>
      </div>
    );
  }

  if (!isCssLoaded) {
    // CSSが読み込まれていない場合、コンポーネントを遅延表示
    return null;
  }

  return (
    <div className="container max-w-5xl">
      <div className="relative grid grid-cols-1 md:!grid-cols-2 w-full">
        <div className="sticky top-0 z-50 block md:!hidden">
          <div className="sticky top-0 z-50">
            <div className="flex justify-center w-full pt-1">
              <DiscordOverlayStatusPreview customCss={customCss} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <DiscordOverlayStatusCustom
            customCss={customCss}
            setCustomCss={setCustomCss}
          />
          <div className="block md:!hidden">
            <ButtonContentContainer />
          </div>
        </div>
        <div className="sticky top-0 z-50 hidden md:!block">
          <div className="sticky top-0 z-50 float-right mt-10">
            <DiscordOverlayStatusPreview customCss={customCss} />
            <ButtonContentContainer />
          </div>
        </div>
      </div>
      <GenerationCssContentModal
        generatedCustomCss={generatedCustomCss}
        handleCopy={handleCopy}
        isOpen={isModalOpen}
        onClose={onModalClose}
        onOpenChange={onModalOpenChange}
      />
      <ShareCssContentDrawer
        shareUrl={shareUrl}
        handleCopy={handleCopy}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
        onOpenChange={onDrawerOpenChange}
      />
    </div>
  );
}
