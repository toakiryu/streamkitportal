import { Link } from "@/i18n/routing";

import { Suspense } from "react";
import { useDisclosure } from "@nextui-org/react";
import { templateType } from "@/components/template";

import { lazyImport } from "@/components/lazyImport";
const TemplatePreviewCard = lazyImport(() => import("./templatePreviewCard"));
const TemplateModal = lazyImport(() => import("./templateModal"));

export default function TemplateCardContainer({
  index,
  template,
}: {
  index: number;
  template: templateType;
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
              <div className="ml-5">
                <TemplatePreviewCard id={index} code={template.code} />
              </div>
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
        index={index}
        template={template}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
