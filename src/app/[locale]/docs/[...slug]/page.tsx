import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdxComponents";
import { getLocale, getTranslations } from "next-intl/server";

import config from "../../../../../richtpl.config";

// ファイルを順番に確認するヘルパー関数
const findLocalizedFile = (
  basePath: string,
  slug: string[],
  locale: string
): string | null => {
  const pathsToCheck = [
    `${basePath}/${slug.join("/")}.${locale}.mdx`, // ロケール付き
    `${basePath}/${slug.join("/")}.${config.i18n.defaultLocale}.mdx`, // デフォルトロケール付き
    `${basePath}/${slug.join("/")}.mdx`, // 通常ファイル
  ];

  for (const filePath of pathsToCheck) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  return null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });

  const slug = (await params).slug;

  // ファイルを検索
  const filePath = findLocalizedFile(
    path.join(process.cwd(), "docs"),
    slug,
    locale
  );

  // ファイルの存在確認
  if (filePath) {
    const mdxDocs = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(mdxDocs);

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        type: "website",
        url: config.url,
        siteName:
          config.themeConfig?.metadata?.openGraph?.siteName ||
          config.title ||
          t(`title`),
        title: data.title,
        description: data.description,
        images:
          config.themeConfig.metadata?.openGraph?.images ||
          config.themeConfig.image,
        locale:
          config.themeConfig?.metadata?.openGraph?.locale ||
          config.i18n.localeConfigs[locale].htmlLang ||
          "ja-JP",
      },
      twitter: {
        card: "summary_large_image",
        site: `@${
          config.themeConfig?.metadata?.twitter?.site ||
          config.themeConfig?.metadata?.creator ||
          "toakiryu"
        }`,
        title: data.title,
        description: data.description,
        creator: `@${data.creator || "toakiryu"}`,
        images:
          config.themeConfig.metadata?.twitter?.images ||
          config.themeConfig.image,
      },
    };
  } else {
    console.error(`File not found: ${filePath}`);
  }

  return {
    openGraph: {
      type: "website",
      url: config.url,
      siteName:
        config.themeConfig?.metadata?.openGraph?.siteName ||
        config.title ||
        t(`title`),
      title: {
        template: `%s | ${
          config.themeConfig?.metadata?.openGraph?.title ||
          config.title ||
          t(`title`)
        }`,
        default: `${
          config.themeConfig?.metadata?.openGraph?.title ||
          config.title ||
          t(`title`)
        }`,
      },
      description:
        config.themeConfig?.metadata?.openGraph?.description ||
        config.description ||
        t(`description`),
      images:
        config.themeConfig.metadata?.openGraph?.images ||
        config.themeConfig.image,
      locale:
        config.themeConfig?.metadata?.openGraph?.locale ||
        config.i18n.localeConfigs[locale].htmlLang ||
        "ja-JP",
    },
    twitter: {
      card: "summary_large_image",
      site: `@${
        config.themeConfig?.metadata?.twitter?.site ||
        config.themeConfig?.metadata?.creator ||
        "toakiryu"
      }`,
      title: {
        template: `%s | ${
          config.themeConfig?.metadata?.openGraph?.title ||
          config.title ||
          t(`title`)
        }`,
        default: `${
          config.themeConfig?.metadata?.openGraph?.title ||
          config.title ||
          t(`title`)
        }`,
      },
      description:
        config.themeConfig?.metadata?.twitter?.description ||
        config.description ||
        t(`description`),
      creator: `@${
        config.themeConfig?.metadata?.twitter?.creator ||
        config.themeConfig?.metadata?.creator ||
        "toakiryu"
      }`,
      images:
        config.themeConfig.metadata?.twitter?.images ||
        config.themeConfig.image,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const locale = await getLocale();

  const slug = (await params).slug;

  // ファイルを検索
  const filePath = findLocalizedFile(
    path.join(process.cwd(), "docs"),
    slug,
    locale
  );

  // ファイルが見つからない場合
  if (!filePath) {
    console.error(`File not found for slug: ${slug.join("/")}`);
    return notFound();
  }

  const mdxContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(mdxContent);

  return (
    <div>
      <p className="opacity-70">{data.date || "N/A"}</p>
      <h1>{data.title || "Untitled"}</h1>
      <MDXRemote components={mdxComponents} source={content} />
    </div>
  );
}
