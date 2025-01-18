import { Image } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

import { templateType } from "@/components/template";

export default function TemplatesContainerContent({
  templates,
}: {
  templates: templateType[];
}) {
  return (
    <>
      {templates.map((template: templateType, index) => (
        <div
          key={index}
          className="bg-white dark:bg-zinc-800 w-[256px] sm:!w-[409px] md:!w-[306px] rounded-md shadow-lg"
        >
          <div className="p-3">
            <h1 className="text-lg font-semibold truncate">{template.name}</h1>
          </div>
          <div>
            <Image
              src={template.image || undefined}
              alt={template.name}
              className="rounded-md w-full object-cover"
            />
          </div>
          <div className="p-3">
            <p className="flex text-sm">
              <span className="mr-1 opacity-70">By</span>
              <Link
                href={template.creator?.link}
                className="text-indigo-600 dark:text-indigo-500 truncate hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {template.creator?.name}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
