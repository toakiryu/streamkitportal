import { cn } from "@/lib/utils";

export type ButtonClassType = "discord"
export function ButtonClass(type: ButtonClassType, className?: string) {
  let defClass;
  if (type === "discord") {
    defClass =
      "bg-indigo-600/90 dark:!bg-indigo-500/90 text-white text-sm text-center font-normal flex justify-center items-center w-full py-2 px-4 rounded-full transition-all duration-200 ease-in-out hover:opacity-70 hover:shadow-md active:scale-95";
  }

  return cn(defClass, className);
}
