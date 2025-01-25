import { ReactNode } from "react";
import { Image, ImageProps } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

// テキストをスラッグ化する関数
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // スペースをハイフンに置換
    // .replace(/[^\w\-]+/g, "") // 英数字とハイフン以外を削除
    .replace(/\-\-+/g, "-") // 連続するハイフンを1つに
    .replace(/^-+|-+$/g, ""); // 先頭または末尾のハイフンを削除
}

// カスタム見出しコンポーネント
function CustomH1({ children }: { children: ReactNode }) {
  const id = slugify(children as string);
  return <h1 id={id}>{children}</h1>;
}

function CustomH2({ children }: { children: ReactNode }) {
    const id = slugify(children as string);
  return <h2 id={id}>{children}</h2>;
}

function CustomH3({ children }: { children: ReactNode }) {
  const id = slugify(children as string);
  return <h3 id={id}>{children}</h3>;
}

// 他のカスタムコンポーネント
function CustomP({ children }: { children: ReactNode }) {
  return <div className="mb-[10px]">{children}</div>;
}

function CustomA({ children, href }: { children: ReactNode; href: string }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  return (
    <Link
      href={href || "/"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

function CustomImg({ ...props }: ImageProps) {
  return <Image sizes="100vw" className="w-full h-auto" {...props} />;
}

// MDXコンポーネントのマッピング
export const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  p: CustomP,
  a: CustomA,
  img: CustomImg,
};
