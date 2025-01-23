export const uiControlScriptGetUiPropertyValue = (
  css: string,
  className: string,
  property: string
) => {
  const regex = new RegExp(
    `(${className}[^\\{]*\\{[^\\}]*?)(\\b${property}:\\s?)([^;]+);`,
    "g"
  );

  const match = regex.exec(css);

  if (match) {
    // 該当プロパティの値を返す
    const value = match[3].trim(); // プロパティ値（3番目のキャプチャグループ）
    return value;
  }

  // 見つからなかった場合はnullを返す
  return null;
};

export const uiControlScriptHandleUiChange = (
  css: string,
  className: string,
  property: string,
  value: string | number
) => {
  if (className === "*") {
    // グローバル適用: 特定のプロパティの値を変更
    const updatedCss = css.replace(
      new RegExp(`(\\b${property}:\\s?)[^;]+;`, "g"),
      `$1${value};`
    );
    return updatedCss;
  } else {
    // 特定クラスへの適用
    const regex = new RegExp(
      `(${className}[^\\{]*\\{[^\\}]*?)(\\b${property}:\\s?)[^;]+;`,
      "g"
    );
    const updatedCss = css.replace(regex, `$1$2${value};`);

    // 該当プロパティが存在しない場合、新しいプロパティを追加
    return updatedCss;
  }
};
