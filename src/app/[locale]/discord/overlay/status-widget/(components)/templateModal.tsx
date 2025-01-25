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
import TemplatePreviewCard from "./templatePreviewCard";
import { Link } from "@/i18n/routing";
import {
  decodeShareCode,
  generateCustomCss,
  handleCopyText,
} from "../../../(components)/edit";

import { useThemeDarkOrLight } from "@/hooks/theme";
import { css } from "@codemirror/lang-css";
import ReactCodeMirror from "@uiw/react-codemirror";
import { IconCircleDashedX } from "@tabler/icons-react";

function TemplateModal({
  index,
  template,
  isOpen,
  onClose,
  onOpenChange,
}: {
  index: number;
  template: templateType;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
}) {
  const [isCodeView, setIsView] = useState<boolean>(false);

  const themeDarkOrLight = useThemeDarkOrLight();

  const editURL = `http://localhost:3000/discord/overlay/status-widget/editor?sharecode=${template.code}`;
  const cssCode = generateCustomCss("Status",decodeShareCode(template.code) || "");

  return (
    <Modal
      scrollBehavior="inside"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {template.name}
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
                <IconCircleDashedX className="text-indigo-600 dark:text-indigo-400" />
              </Button>
            </div>
          ) : (
            <div className="flex justify-center items-center absolute z-[40] top-0 left-0 w-full h-full">
              <div className="flex flex-col justify-center items-center bg-zinc-100/90 dark:bg-zinc-900/90 w-full h-full mx-6 my-2 border rounded-md">
                <div className="flex flex-col gap-3 w-full px-5">
                  <Suspense>
                    <div className="w-auto max-w-full mx-auto py-2 overflow-hidden">
                      <div>
                        <TemplatePreviewCard id={index} code={template.code} />
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
                    className="border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400"
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
          <div className="flex justify-center items-center mr-auto">
            <span className="flex text-sm">
              <span className="mr-1 opacity-70">By</span>
              {template.creator.name === "!!ghost" ? (
                <span className="truncate hover:underline">匿名</span>
              ) : (
                <Link
                  href={template.creator?.link}
                  className="text-indigo-600 dark:text-indigo-400 truncate hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {template.creator?.name}
                </Link>
              )}
            </span>
          </div>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Link
            href={editURL}
            target="_blank"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden bg-indigo-600 dark:bg-indigo-400 text-white px-4 min-w-20 h-10 text-small gap-2 rounded-medium transition-all duration-200 ease-in-out hover:opacity-70 active:scale-95"
          >
            Edit
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TemplateModal;
