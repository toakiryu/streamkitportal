"use client";

import { Suspense, useEffect, useState } from "react";
import { Button, Input, Pagination, Skeleton } from "@nextui-org/react";
import { getTemplates, templateType } from "@/components/template";

import { lazyImport } from "@/components/lazyImport";
import { IconSearch, IconTemplate } from "@tabler/icons-react";
const TemplateCardContainer = lazyImport(
  () => import("./templatesContainerContent")
);

export function TemplatesContainerSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md"
        />
      ))}
    </>
  );
}

export default function TemplatesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [templates, setTemplates] = useState<templateType[]>([]); // テンプレートデータ
  const [totalPages, setTotalPages] = useState(1); // ページ数
  const [filter, setFilter] = useState(""); // 現在のフィルタ値
  const [pendingFilter, setPendingFilter] = useState(""); // 入力中のフィルタ値

  const ITEMS_PER_PAGE = 12; // 1ページあたりのテンプレート数

  // テンプレートデータを取得する関数
  const fetchTemplates = async () => {
    try {
      const res = await getTemplates(
        ["discord", "overlay", "chat-widget"],
        (currentPage - 1) * ITEMS_PER_PAGE,
        ITEMS_PER_PAGE,
        filter
      );

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

  // フィルタを適用する関数
  const applyFilter = () => {
    setCurrentPage(1); // ページ番号をリセット
    setFilter(pendingFilter); // 現在のフィルタを更新
  };

  return (
    <div className="">
      <form
        className="flex"
        onSubmit={(event) => {
          event.preventDefault(); // フォームのデフォルト動作を防ぐ
          applyFilter(); // フィルタを適用
        }}
      >
        <Input
          id="template-filter-input"
          type="text"
          placeholder="template or creator name"
          isClearable
          variant="underlined"
          color="success"
          classNames={{
            inputWrapper: "after:!bg-indigo-600",
          }}
          onValueChange={setPendingFilter}
          startContent={
            <Button
              aria-label="template-search-button"
              isIconOnly
              variant="light"
              type="submit"
            >
              <IconSearch />
            </Button>
          }
        />
      </form>
      <div className="flex flex-col justify-center items-center mt-10">
        {templates.length > 0 ? (
          <section
            id="templates-container"
            className="grid gap-5 grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3"
          >
            {templates.map((template: templateType, index) => (
              <Suspense
                key={index}
                fallback={
                  <Skeleton className="w-[256px] sm:!w-[409px] md:!w-[306px] h-[120px] rounded-md" />
                }
              >
                <TemplateCardContainer index={index} template={template} />
              </Suspense>
            ))}
          </section>
        ) : (
          <div>
            <div className="flex flex-col justify-center items-center mx-auto opacity-60">
              <IconTemplate className="size-8" />
              <h1>該当するテンプレートは見つかりません</h1>
            </div>
          </div>
        )}
        <div className="mt-5">
          {totalPages > 1 && (
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
          )}
        </div>
      </div>
    </div>
  );
}
