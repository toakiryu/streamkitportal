"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function GenerationBreadcrumbs({
  pathSegments,
}: {
  pathSegments: string;
}) {
  const newPathSegments = pathSegments.split("/");

  return (
    <Breadcrumbs>
      {/* 固定のHomeリンク */}
      <BreadcrumbItem>Home</BreadcrumbItem>
      {newPathSegments.map((segment, index) => {
        // セグメントをタイトルケース（例: 'music' -> 'Music'）に変換
        const title = segment.charAt(0).toUpperCase() + segment.slice(1);

        // リンク生成のためのパス
        const link = "/" + newPathSegments.slice(0, index + 1).join("/");

        return (
          <BreadcrumbItem key={index + 1} href={link}>
            {title}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
