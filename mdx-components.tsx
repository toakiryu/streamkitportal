import { Link } from "@/i18n/routing";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      const { children, href } = props;
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");
      return (
        <Link
          href={href || "/"}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
    ...components,
  };
}
