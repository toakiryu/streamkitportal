"use client";

import React, { Suspense, useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { templateType } from "@/components/template";
import { Link } from "@/i18n/routing";

import { useThemeDarkOrLight } from "@/hooks/theme";
import { css } from "@codemirror/lang-css";
import ReactCodeMirror from "@uiw/react-codemirror";
import { IconCircleDashedX } from "@tabler/icons-react";
import TemplatePreviewCard from "../status-widget/(components)/templatePreviewCard";
import {
  decodeShareCode,
  generateCustomCss,
  handleCopyText,
} from "../../(components)/edit";

function LoadShareCodeModal({
  index,
  sharecode,
  isOpen,
  onClose,
  onOpenChange,
}: {
  index: number;
  sharecode: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
}) {
  const [isCodeView, setIsView] = useState<boolean>(false);

  const themeDarkOrLight = useThemeDarkOrLight();

  const cssCode = generateCustomCss(decodeShareCode(sharecode) || "");

  return (
    <Modal
      scrollBehavior="inside"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          共有カスタマイズを読み込みました
        </ModalHeader>
        <div className="relative flex flex-1 flex-col gap-3 px-6 py-2 overflow-hidden">
          {isCodeView ? (
            <div className="absolute z-[40] bottom-0 right-0">
              <Button
                className="float-end mb-3 mr-7"
                variant="flat"
                isIconOnly
                onPress={() => setIsView(false)}
              >
                <IconCircleDashedX className="text-indigo-600 dark:text-indigo-500" />
              </Button>
            </div>
          ) : (
            <div className="flex justify-center items-center absolute z-[40] top-0 left-0 w-full h-full">
              <div className="flex flex-col justify-center items-center bg-zinc-100/90 dark:bg-zinc-900/90 w-full h-full mx-6 my-2 border rounded-md">
                <div className="flex flex-col gap-3 w-full px-5">
                  <Suspense>
                    <div className="w-auto max-w-full mx-auto py-2 overflow-hidden">
                      <div>
                        <TemplatePreviewCard id={index} code={sharecode} />
                      </div>
                    </div>
                  </Suspense>
                  <Button
                    className="bg-indigo-600 dark:bg-indigo-500 text-white"
                    onPress={() => handleCopyText(cssCode)}
                  >
                    コピー
                  </Button>
                  <Button
                    variant="bordered"
                    className="border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500"
                    onPress={() => setIsView(true)}
                  >
                    コードを表示
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="border rounded-md overflow-y-auto">
            <ReactCodeMirror
              value={cssCode}
              height="auto"
              theme={themeDarkOrLight}
              extensions={[css()]}
              readOnly
            />
          </div>
        </div>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button
            className="bg-indigo-600 dark:bg-indigo-500 text-white"
            onPress={onClose}
          >
            Edit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoadShareCodeModal;
