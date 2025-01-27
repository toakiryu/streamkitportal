"use server";

import { NextResponse, type NextRequest } from "next/server";

import fs from "fs/promises";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dir = searchParams.get("dir");

  const _init = searchParams.get("init") || 0;
  const init: number = Number(_init);

  const _offset = searchParams.get("offset") || 10;
  const offset = Number(_offset);

  const _filter = searchParams.get("filter") || "";
  const filter: string = _filter;

  const dirParts = dir ? [dir] : []; // 'dir' を配列形式に変換
  const templatesDir = path.join(process.cwd(), "templates", ...dirParts);

  try {
    // ディレクトリ内のファイル一覧を取得
    const files = await fs.readdir(templatesDir);

    // `.json`拡張子のファイルをフィルタリング
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    // 各ファイルの内容を読み込み、JSONとしてパース
    const allTemplates = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(templatesDir, file);
        const content = await fs.readFile(filePath, "utf-8");
        return {
          fileName: file, // ファイル名
          ...JSON.parse(content), // JSONとしてパースしたデータを展開
        };
      })
    );

    // フィルタリング処理
    const filteredTemplates = allTemplates.filter((template) => {
      // 検索対象のプロパティをまとめて文字列化
      const searchableText = `
        ${template.name || ""}
        ${template.creator?.name || ""}
      `.toLowerCase();

      return searchableText.includes(filter.toLowerCase());
    });

    // ページネーションの適用
    const paginatedTemplates = filteredTemplates.slice(init, init + offset);

    return NextResponse.json(
      {
        templates: paginatedTemplates,
        total: filteredTemplates.length, // フィルター後の件数
        init: init,
        offset: offset,
        filter: filter,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load templates.", error: error },
      { status: 500 }
    );
  }
}
