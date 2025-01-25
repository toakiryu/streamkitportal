import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type themeDarkOrLightType = "dark" | "light";
export function useThemeDarkOrLight(): themeDarkOrLightType {
  const [isTheme, setIsTheme] = useState<themeDarkOrLightType>("light");
  const { theme, systemTheme } = useTheme();
  useEffect(() => {
    setIsTheme(
      (theme === "system"
        ? systemTheme || "light"
        : theme || "light") as themeDarkOrLightType
    );
  }, [theme, systemTheme]);
  return isTheme;
}
