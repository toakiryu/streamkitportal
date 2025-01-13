import { useTheme } from "next-themes";

export type themeDarkOrLightType = "dark" | "light";
export function useThemeDarkOrLight(): themeDarkOrLightType {
  const { theme, systemTheme } = useTheme();
  const res = theme === "system" ? systemTheme || "light" : theme || "light";
  return res as themeDarkOrLightType;
}
