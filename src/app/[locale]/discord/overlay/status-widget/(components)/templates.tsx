"use client";

import { Suspense, useEffect, useState } from "react";
import { Input, Pagination, Skeleton } from "@nextui-org/react";
import { getTemplates, templateType } from "@/components/template";

import { lazyImport } from "@/components/lazyImport";
const TemplatesContainerContent = lazyImport(() => import("./templatesContainerContent"));

export function TemplatesContainerSkeleton() {
  return (
    <>
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
      <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
    </>
  );
}

export default function TemplatesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [templates, setTemplates] = useState<templateType[]>([]); // テンプレートデータ
  const [totalPages, setTotalPages] = useState(1); // ページ数
  const [filter, setFilter] = useState(""); // フィルタ入力

  const ITEMS_PER_PAGE = 12; // 1ページあたりのテンプレート数

  // テンプレートデータを取得する関数
  const fetchTemplates = async () => {
    try {
      const res = await getTemplates(
        ["discord", "overlay", "status-widget"],
        (currentPage - 1) * ITEMS_PER_PAGE,
        ITEMS_PER_PAGE,
        filter
      );

      console.log(res);

      setTemplates(res?.templates);
      setTotalPages(Math.ceil(res.total / ITEMS_PER_PAGE));
    } catch (error) {
      console.error(error);
    }
  };

  // 初回レンダリングと`currentPage`または`filter`が変更されたときに再取得
  useEffect(() => {
    fetchTemplates();
  }, [currentPage, filter]);

  return (
    <div className="">
      <div>
        <Input
          id="template-filter-input"
          type="text"
          isClearable
          placeholder="template or creator name"
          variant="underlined"
          color="success"
          classNames={{
            inputWrapper: "after:!bg-indigo-600",
          }}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <section
          id="templates-container"
          className="grid gap-5 grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3"
        >
          <Suspense fallback={<TemplatesContainerSkeleton/>}>
            <TemplatesContainerContent templates={templates}/>
          </Suspense>
        </section>
        <div className="mt-5">
          <Pagination
            loop
            isCompact
            showControls
            total={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
            classNames={{
              wrapper: "border",
            }}
          />
        </div>
      </div>
    </div>
  );
}
