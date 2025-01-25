"use server";

import fs from "fs/promises";
import path from "path";

export type templateType = {
  name: string;
  image: string;
  fileName: string;
  creator: {
    name: string;
    link: string;
  };
  code: string;
};

export type getTemplatesResType = {
  templates: templateType[];
  total: number;
  init: number;
  offset: number;
  filter: string;
};

export async function getTemplates(
  dir: string[] = [],
  init: number = 0,
  offset: number = 10,
  filter: string = ""
): Promise<getTemplatesResType> {
  const templatesDir = path.join(process.cwd(), "templates", ...dir);

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

    return {
      templates: paginatedTemplates,
      total: filteredTemplates.length, // フィルター後の件数
      init,
      offset,
      filter,
    };
  } catch (error) {
    console.error("Error reading templates:", error);
    throw new Error("Failed to load templates.");
  }
}
