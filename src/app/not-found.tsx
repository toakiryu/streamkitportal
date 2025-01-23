"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next/client";
import config from "../../richtpl.config";

export default function NotFoundPage() {
  const pathname = usePathname();
  // const params = useParams();
  const preLang = getCookie("NEXT_LOCALE");

  useEffect(() => {
    const useLang = preLang || window.navigator.language.slice(0, 2);
    const isLang = config.i18n.locales.some((lang) => lang === useLang);
    const redirectUrl = `/${isLang ? useLang : config.i18n.defaultLocale}/${pathname}`;
    window?.location.replace(redirectUrl);
  }, []);

  return null;
}
