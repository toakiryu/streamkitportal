"use client";

import { ReactNode } from "react";
import { ColorModeSwitcher } from "./ui/colorModeSwitcher";
import LocaleSwitcher from "./ui/LocaleSwitcher";

export function IsDevContent({ children }: { children: ReactNode }) {
  const isDev = process.env.NEXT_PUBLIC_IS_DEV;

  if (!isDev) {
    return null;
  }
  return children;
}
export function DevFooter() {
  return (
    <IsDevContent>
      <div>
        <ColorModeSwitcher />
        <LocaleSwitcher />
      </div>
    </IsDevContent>
  );
}
