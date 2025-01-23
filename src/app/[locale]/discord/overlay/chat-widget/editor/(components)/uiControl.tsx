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
          group: "chatContainer",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "chatContainer",
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
          group: "chatContainer",
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
      <UiSettingCardGroupTitle label="Channel name" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "channelName",
          name: "display",
        }}
        switchContent={{
          trueContent: "block",
          falseContent: "none",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingSliderContent
        label="Font Size"
        classContent={{
          group: "channelName",
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
          group: "channelName",
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
          group: "channelName",
          name: "background-color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="pound sign" />
      <UiSettingSliderContent
        label="Opacity"
        classContent={{
          group: "poundSign",
          name: "opacity",
          endContent: "",
        }}
        slider={{
          defaultValue: 0.5,
          maxValue: 1,
          minValue: 0,
          step: 0.1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="messages" />
      <UiSettingSliderContent
        label="Radius"
        classContent={{
          group: "messages",
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
          group: "messages",
          name: "background-color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="message" />
      <UiSettingCardGroupTitle label="message Hidden" />
      <UiSettingSliderContent
        label="Opacity"
        classContent={{
          group: "messageHidden",
          name: "opacity",
          endContent: "",
        }}
        slider={{
          defaultValue: 0,
          maxValue: 1,
          minValue: 0,
          step: 0.1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="timestamp" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "timestamp",
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
        label="Opacity"
        classContent={{
          group: "timestamp",
          name: "opacity",
          endContent: "",
        }}
        slider={{
          defaultValue: 0.5,
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
          group: "timestamp",
          name: "font-size",
          endContent: "px",
        }}
        slider={{
          defaultValue: 9.65517,
          maxValue: 50,
          minValue: 0,
          step: 0.1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "timestamp",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="username" />
      <UiSettingSwitchContent
        label="Display Show"
        classContent={{
          group: "username",
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
        label="Opacity"
        classContent={{
          group: "username",
          name: "opacity",
          endContent: "",
        }}
        slider={{
          defaultValue: 1,
          maxValue: 1,
          minValue: 0,
          step: 0.1,
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
      <UiSettingCardGroupTitle label="message text" />
      <UiSettingColorPickerContent
        label="Text Color"
        classContent={{
          group: "messageText",
          name: "color",
        }}
        handleUiChange={handleUiChange}
        getUiPropertyValue={getUiPropertyValue}
      />
    </section>
  );
}
