"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { ButtonClass } from "@/components/ui/buttonclass";

import { lazyImport } from "@/components/lazyImport";
const Spotlight = lazyImport(() => import("@/components/ui/spotlight-new"));

export default function PageHeroTopSection() {
  return (
    <div className="w-full overflow-x-hidden pb-20">
      <Spotlight />
      <div className="relative container mx-auto pt-[100px] flex max-w-5xl flex-col items-start px-8">
        <section className="relative z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <Link href="/apps">
            <button
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased tap-highlight-transparent active:!scale-[0.97] outline-none min-w-20 gap-2 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none hover:!opacity-hover h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
              type="button"
            >
              サービスを無料で体験
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="flex-none outline-none [&>path]:stroke-[2] iconify iconify--solar group-hover:translate-x-2 transition-all duration-200 ease-in-out"
                focusable="false"
                tabIndex={-1}
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </Link>
          <div className="flex flex-col gap-6 w-auto">
            <div className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#00000066] dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
                ストリーマ向け
                <br />
                カスタマイズを提供します
              </div>
            </div>
            <div className="text-start font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
              配信サービスが提供するウィジェットやオーバーレイのカスタマイズを提供します。自分に合った色やデザインを作成またはテンプレートを見つけることができます。
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link href="/apps" className={ButtonClass("discord", "w-fit")}>
                対応アプリを見る
              </Link>
              <Link href="#features-section">
                <button
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent active:!scale-[0.97] outline-none min-w-20 gap-2 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-foreground hover:!opacity-hover h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
                  type="button"
                >
                  機能を見る
                  <span
                    className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100 group-hover:translate-x-2 transition-all duration-200 ease-in-out"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="text-default-500 [&>path]:stroke-[1.5] iconify iconify--solar"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 12h16m0 0l-6-6m6 6l-6 6"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
