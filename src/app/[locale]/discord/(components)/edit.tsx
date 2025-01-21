import LZString from "lz-string";
import toast from "react-hot-toast";

// CSSコードを圧縮
export const encodeShareCode = (code: string): string => {
  return encodeURIComponent(LZString.compressToEncodedURIComponent(code)); // 圧縮してURLエンコード
};

// 圧縮されたCSSコードを解凍
export const decodeShareCode = (encodedCode: string): string | null => {
  const decoded = LZString.decompressFromEncodedURIComponent(
    decodeURIComponent(encodedCode)
  ); // URLデコードして解凍
  return decoded || null; // 解凍できなかった場合は空文字列
};

export const handleCopyText = (text: string | null) => {
  navigator.clipboard.writeText(text as string).then(
    () => {
      toast.success("コピーしました");
    },
    (err) => {
      console.warn(err);
      toast.error("コピーに失敗しました");
    }
  );
};

// クラス名を動的に変換
export const generateCustomCss = (cssText: string) => {
  return cssText
    .split("\n")
    .map((line) => {
      if (line.includes("{")) {
        // クラス名を変換
        const className = line.replace(/^\s+/, "").split(" ")[0].trim();
        const newClassName = `[class*="Status_${className.replace(
          ".",
          ""
        )}__"]`;
        return line.replace(className, newClassName);
      } else if (line.includes(":")) {
        // すべてのプロパティに !important を追加
        return line.replace(/([^\s:]+:\s?[^;]+)(;)/g, "$1 !important$2");
      }
      return line;
    })
    .join("\n");
};
