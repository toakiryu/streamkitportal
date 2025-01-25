import {
  UiSettingCardGroupTitle,
  UiSettingColorPickerContent,
  UiSettingSliderContent,
  UiSettingSwitchContent,
} from "../../../(components)/ui/setting";
import {
  uiControlScriptGetUiPropertyValue,
  uiControlScriptHandleUiChange,
} from "../../../(components)/uiCssCtrl";

export default function DiscordOverlayCustomUIControlStatusWidget({
  customCss,
  setCustomCss,
}: {
  customCss: string;
  setCustomCss: React.Dispatch<React.SetStateAction<string>>;
}) {
  const getUiPropertyValue = (className: string, property: string) => {
    return uiControlScriptGetUiPropertyValue(customCss, className, property);
  };

  const handleUiChange = (
    className: string,
    property: string,
    value: string | number
  ) => {
    setCustomCss(
      uiControlScriptHandleUiChange(customCss, className, property, value)
    );
  };

  return (
    <section id="setting-items-container" className="flex flex-col h-full">
      <UiSettingCardGroupTitle
        label="Container Setting"
        classNames={{
          div: "pt-5",
        }}
      />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "voiceContainer",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "voiceContainer",
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
      <UiSettingCardGroupTitle label="avatar setting" />
      <UiSettingSliderContent
        label="Radius"
        classContent={{
          group: "avatar",
          name: "border-radius",
          endContent: "%",
        }}
        slider={{
          defaultValue: 50,
          maxValue: 100,
          minValue: 0,
          step: 1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="avatar speaking setting" />
      <UiSettingColorPickerContent
        label="Border Color"
        classContent={{
          group: "avatarSpeaking",
          name: "border-color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="name setting" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "name",
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
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "name",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingColorPickerContent
        label="Background Color"
        classContent={{
          group: "name",
          name: "background-color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Radius"
        classContent={{
          group: "name",
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
    </section>
  );
}
