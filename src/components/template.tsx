"use server";

import { getTemplatesResType } from "@/types/templates";

export async function getTemplates(
  dir: string[] = [],
  init: number = 0,
  offset: number = 10,
  filter: string = ""
): Promise<getTemplatesResType> {
  const params = new URLSearchParams({
    dir: dir.join("/"),
    init: init.toString(),
    offset: offset.toString(),
    filter,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}/ja/api/templates/get?${params.toString()}`;

  try {
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Failed to fetch templates: ${response.statusText}`);
    }

    const data: getTemplatesResType = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching templates:", error);
    throw new Error("Failed to load templates.");
  }
}
