"use client";

import { useThemeDarkOrLight } from "@/hooks/theme";
import React from "react";
import { Toaster } from "sonner";

function ToasterProvider() {
  const themeDarkOrLight = useThemeDarkOrLight();
  return <Toaster richColors theme={themeDarkOrLight} />;
}

export default ToasterProvider;
