"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const entry = {
  category: 932465090,
  template_name: 1005398389,
  creator_name: 1160523928,
  creator_link: 967303941,
  style_share_code: 1548861492,
};

// /template_add_request?category=<pass>&style_share_code=<encodedCss>

export default function TemplateAddRequest() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams();

    // 動的にパラメーターを生成
    Object.entries(entry).forEach(([key, value]) => {
      const paramValue = searchParams.get(key);
      if (paramValue) {
        params.append(`entry.${value}`, paramValue);
      }
    });

    // リダイレクト先URL
    const redirectUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZz-8DWDrB83PId0PoPF3Fdo6Gh2BTzf5k9rhwkNBDOfwFBQ/formResponse?${params.toString()}`;
    router.replace(redirectUrl);
  }, [router, searchParams]);

  return null;
}
