"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, useDisclosure } from "@nextui-org/react";
import { defaultCss } from "./default-css";
import { lazyImport } from "@/components/lazyImport";
import {
  decodeShareCode,
  encodeShareCode,
  generateCustomCss,
} from "../../../../(components)/edit";
import toast from "react-hot-toast";
import LoadShareCodeModal from "@/app/[locale]/discord/overlay/(components)/loadShareCodeModal";
import { Link } from "@/i18n/routing";
const DiscordOverlayStatusPreview = lazyImport(() => import("./preview"));
const DiscordOverlayStatusCustom = lazyImport(() => import("./tab"));
const GenerationCssContentModal = lazyImport(
  () => import("../../../(components)/ui/generationCssContentModal")
);
const ShareCssContentDrawer = lazyImport(
  () => import("../../../(components)/ui/shareCssContentDrawer")
);

export default function TabStatusMainContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [customCss, setCustomCss] = useState<string>("");

  const {
    isOpen: isLoadShareCodeModalOpen,
    onOpen: onLoadShareCodeModalOpen,
    onClose: onLoadShareCodeModalClose,
    onOpenChange: onLoadShareCodeModalOpenChange,
  } = useDisclosure();
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
  const loadSharecode = searchParams.get("loadsharecode");

  useEffect(() => {
    if (sharecode && typeof sharecode === "string") {
      const decodedShareURL = decodeShareCode(sharecode);
      if (decodedShareURL) {
        const queryParams = new URLSearchParams(searchParams.toString());
        queryParams.delete("sharecode");
        queryParams.set("loadsharecode", sharecode);
        router.replace(`?${queryParams.toString()}`);
        onLoadShareCodeModalOpen();
        toast.success("カスタムデータを読み込みました");
        return;
      }
    }
    setCustomCss(defaultCss);
    setIsCssLoaded(true); // デフォルトCSSが読み込まれたことを示す
  }, [sharecode]);

  useEffect(() => {
    const decodedCss = decodeShareCode(loadSharecode || "");
    if (decodedCss) {
      setCustomCss(decodedCss);
      setIsCssLoaded(true); // CSSが読み込まれたことを示す
    }
  }, [loadSharecode]);

  const handleGeneratedCSS = () => {
    setGeneratedCustomCss(generateCustomCss(customCss));
    onModalOpen();
  };

  const handleShare = () => {
    const encodedCss = encodeShareCode(customCss); // 現在のCSSをエンコード
    const shareUrl = `${window.location.origin}/discord/overlay/status-widget/editor?sharecode=${encodedCss}`; // URLを生成
    setShareUrl(shareUrl);
    onDrawerOpen();
  };

  const handleTemplateAddRequest = () => {
    const encodedCss = encodeShareCode(customCss);
    return `/template_add_request?category=discord/overlay/status-widget&style_share_code=${encodedCss}`;
  };

  function ButtonContentContainer() {
    return (
      <div className="flex flex-col gap-3 w-full mt-5 mb-10">
        <Button
          className="w-full bg-indigo-600 dark:bg-indigo-500 text-white"
          variant="shadow"
          onPress={handleGeneratedCSS}
        >
          Copy Generated CSS
        </Button>
        <Button
          className="w-full bg-indigo-600 dark:bg-indigo-500 text-white"
          variant="shadow"
          onPress={handleShare}
        >
          Share Customize
        </Button>
        <Link
          href={handleTemplateAddRequest()}
          target="_blank"
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden bg-indigo-600 dark:bg-indigo-500 text-white w-full p-2 rounded-xl transition-all duration-200 ease-in-out hover:opacity-70 active:scale-95"
        >
          Template add request
        </Link>
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
      {loadSharecode && (
        <LoadShareCodeModal
          index={1}
          sharecode={loadSharecode}
          isOpen={isLoadShareCodeModalOpen}
          onClose={onLoadShareCodeModalClose}
          onOpenChange={onLoadShareCodeModalOpenChange}
        />
      )}
      <GenerationCssContentModal
        generatedCustomCss={generatedCustomCss}
        cssCode={customCss}
        isOpen={isModalOpen}
        onClose={onModalClose}
        onOpenChange={onModalOpenChange}
      />
      <ShareCssContentDrawer
        shareUrl={shareUrl}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
        onOpenChange={onDrawerOpenChange}
      />
    </div>
  );
}
