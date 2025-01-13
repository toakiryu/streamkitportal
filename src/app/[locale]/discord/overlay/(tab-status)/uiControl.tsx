import {
  UiSettingCardGroupTitle,
  UiSettingColorPickerContent,
  UiSettingSliderContent,
  UiSettingSwitchContent,
} from "../(ui)/setting";

export default function DiscordOverlayCustomUIControlStatusWidget({
  customCss,
  setCustomCss,
}: {
  customCss: string;
  setCustomCss: React.Dispatch<React.SetStateAction<string>>;
}) {
  const getUiPropertyValue = (className: string, property: string) => {
    const regex = new RegExp(
      `(${className}[^\\{]*\\{[^\\}]*?)(\\b${property}:\\s?)([^;]+);`,
      "g"
    );

    const match = regex.exec(customCss);

    if (match) {
      // 該当プロパティの値を返す
      const value = match[3].trim(); // プロパティ値（3番目のキャプチャグループ）
      return value;
    }

    // 見つからなかった場合はnullを返す
    return null;
  };

  const handleUiChange = (
    className: string,
    property: string,
    value: string | number
  ) => {
    if (className === "*") {
      // グローバル適用: 特定のプロパティの値を変更
      const updatedCss = customCss.replace(
        new RegExp(`(\\b${property}:\\s?)[^;]+;`, "g"),
        `$1${value};`
      );
      setCustomCss(updatedCss);
    } else {
      // 特定クラスへの適用
      const regex = new RegExp(
        `(${className}[^\\{]*\\{[^\\}]*?)(\\b${property}:\\s?)[^;]+;`,
        "g"
      );
      const updatedCss = customCss.replace(regex, `$1$2${value};`);

      // 該当プロパティが存在しない場合、新しいプロパティを追加
      setCustomCss(updatedCss);
    }
  };

  return (
    <section id="setting-items-container" className="flex flex-col h-full">
      <UiSettingCardGroupTitle
        label="Card Setting"
        classNames={{
          div: "pt-5",
        }}
      />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "statusContainer",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "statusContainer",
          name: "font-size",
          endContent: "px",
        }}
        slider={{
          defaultValue: 14,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Radius"
        classContent={{
          group: "statusContainer",
          name: "border-radius",
          endContent: "px",
        }}
        slider={{
          defaultValue: 3,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingColorPickerContent
        label="Background Color"
        classContent={{
          group: "statusContainer",
          name: "background-color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="Server Icon Setting" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "serverIcon",
          name: "display",
        }}
        switchContent={{
          trueContent: "inline-block",
          falseContent: "none",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Radius"
        classContent={{
          group: "serverIcon",
          name: "border-radius",
          endContent: "px",
        }}
        slider={{
          defaultValue: 10,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="Server Name Setting" />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "name",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "name",
          name: "font-size",
          endContent: "px",
        }}
        slider={{
          defaultValue: 14,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="Online Count Setting" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "onlineCount",
          name: "display",
        }}
        switchContent={{
          trueContent: "inline-block",
          falseContent: "none",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "onlineCount",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Opacity"
        classContent={{
          group: "onlineCount",
          name: "opacity",
          endContent: "",
        }}
        slider={{
          defaultValue: 0.3,
          maxValue: 1,
          minValue: 0,
          step: 0.1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "onlineCount",
          name: "font-size",
          endContent: "px",
        }}
        slider={{
          defaultValue: 12,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="Invite Link Setting" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "inviteLink",
          name: "display",
        }}
        switchContent={{
          trueContent: "inline-block",
          falseContent: "none",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "inviteLink",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "inviteLink",
          name: "font-size",
          endContent: "px",
        }}
        slider={{
          defaultValue: 12,
          maxValue: 50,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
    </section>
  );
}
