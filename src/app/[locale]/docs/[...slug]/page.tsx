import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdxComponents";
import { getLocale, getTranslations } from "next-intl/server";

import config from "../../../../../richtpl.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });

  const slug = (await params).slug;

  // ファイルパスを生成
  const filePath = path.join(process.cwd(), "docs", `${slug.join("/")}.mdx`);

  // ファイルの存在確認
  if (fs.existsSync(filePath)) {
    const mdxDocs = fs.readFileSync(`docs/${slug.join("/")}.mdx`, "utf-8");
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
  const slug = (await params).slug;
  const filePath = path.join(process.cwd(), "docs", `${slug.join("/")}.mdx`);

  // ファイルの存在確認
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
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
