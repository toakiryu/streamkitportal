import { Link } from "@/i18n/routing";

import { ReactNode, Suspense } from "react";
import { useDisclosure } from "@nextui-org/react";
import { templateType } from "@/types/templates";
import TemplateModal from "./templateModal";

export default function TemplateCardContainer({
  index,
  passEditURL,
  baseClassName,
  template,
  templatePreviewCard,
}: {
  index: number;
  passEditURL: string;
  baseClassName: string;
  template: templateType;
  templatePreviewCard: ReactNode;
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="w-full h-full place-self-auto border-none cursor-pointer"
        onClick={onOpen}
      >
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-zinc-800 w-[256px] sm:!w-[409px] md:!w-[306px] h-full rounded-md shadow-lg"
        >
          <div className="p-3">
            <h1 className="text-lg font-semibold truncate">{template.name}</h1>
          </div>
          <div className="">
            <Suspense>
              <div className="ml-5">{templatePreviewCard}</div>
            </Suspense>
          </div>
          <div className="p-3 mt-auto">
            <span className="flex text-sm">
              <span className="mr-2 opacity-70">By</span>
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
        </div>
      </div>
      <TemplateModal
        passEditURL={passEditURL}
        baseClassName={baseClassName}
        template={template}
        templatePreviewCard={templatePreviewCard}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
