"use client";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
  Switch,
} from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import { ColorResult, RGBColor, SketchPicker } from "react-color";

export function UiSettingCardGroupTitle({
  classNames,
  label,
}: {
  classNames?: {
    div?: string;
    title?: string;
  };
  label: string;
}) {
  return (
    <div className={cn("pt-12", classNames?.div)}>
      <span
        className={cn(
          "font-bold uppercase text-orange-700 dark:text-orange-500",
          classNames?.title
        )}
      >
        {label}
      </span>
    </div>
  );
}

export function UiSettingCard({
  label,
  children,
  classNames,
}: {
  label: string;
  children: ReactNode;
  classNames?: {
    card?: string;
    label?: string;
    body?: string;
  };
}) {
  return (
    <div
      className={cn("flex flex-row items-center h-[76px]", classNames?.card)}
    >
      <label className={cn("flex-[1_1]", classNames?.label)}>{label}</label>
      <div className={cn("", classNames?.body)}>{children}</div>
    </div>
  );
}

export function UiSettingColorPickerContent({
  label,
  classContent,
  handleUiChange,
  getUiPropertyValue,
}: {
  label: string;
  classContent: {
    group: string;
    name: string;
  };
  handleUiChange: (
    className: string,
    property: string,
    value: string | number
  ) => void;
  getUiPropertyValue: (className: string, property: string) => string | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // 色コードをrgba形式に変換するユーティリティ関数
  const parseColorToRgb = (color: string) => {
    const rgbaMatch = color.match(
      /rgba?\((\d+), (\d+), (\d+),? (\d*\.?\d+)?\)/
    );
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1], 10),
        g: parseInt(rgbaMatch[2], 10),
        b: parseInt(rgbaMatch[3], 10),
        a: rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1,
      };
    }
    return {
      r: 30,
      g: 33,
      b: 36,
      a: 0.95,
    };
  };

  // 初期の背景色などをCSSから取得
  const initialColor = getUiPropertyValue(
    classContent.group,
    classContent.name
  );
  const initialColorRGB = initialColor
    ? parseColorToRgb(initialColor) // 色をRGBに変換
    : {
        r: 30,
        g: 33,
        b: 36,
        a: 0.95,
      };
  // 初期のhexカラーコードも設定
  const initialColorHex = initialColor
    ? `#${(
        (1 << 24) +
        (initialColorRGB.r << 16) +
        (initialColorRGB.g << 8) +
        initialColorRGB.b
      )
        .toString(16)
        .slice(1)}`
    : "#1e2124"; // デフォルトのカラーコード

  const [currentColor, setCurrentColor] = useState<RGBColor>(initialColorRGB);
  const [currentColorHex, setCurrentColorHex] = useState(initialColorHex); // 初期値を反映

  // CSSと同期を取るために状態を更新する関数
  const updateColorFromCss = () => {
    const updatedColor = getUiPropertyValue(
      classContent.group,
      classContent.name
    );
    if (updatedColor) {
      const updatedColorRgb = parseColorToRgb(updatedColor);
      setCurrentColor(updatedColorRgb);
      setCurrentColorHex(
        `#${(
          (1 << 24) +
          (updatedColorRgb.r << 16) +
          (updatedColorRgb.g << 8) +
          updatedColorRgb.b
        )
          .toString(16)
          .slice(1)}`
      ); // 色を更新
    }
  };

  useEffect(() => {
    // 初回レンダリング後にCSSから色を取得して同期
    updateColorFromCss();
  }, [classContent.group, classContent.name]); // クラス名が変更された時に同期

  const handlePickerVisibleChange = (visible?: boolean) => {
    const element = document.getElementById("element-html");
    if (visible) {
      if (element) {
        element.style.overflow = "hidden";
        element.style.userSelect = "none";
      }
    } else {
      if (element) {
        element.style.overflow = "auto";
        element.style.userSelect = "auto";
      }
    }

    setIsOpen(!!visible);
  };

  // 色変更処理
  const handleColorChange = (color: ColorResult) => {
    setCurrentColorHex(color.hex); // HEXを更新
    setCurrentColor(color.rgb); // RGBを更新
    const newColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    handleUiChange(classContent.group, classContent.name, newColor); // UIの変更
  };

  return (
    <UiSettingCard label={label}>
      <div className="flex items-center gap-10">
        <Popover
          classNames={{
            content: ["bg-transparent p-0 border-0"],
          }}
          placement="bottom"
          isOpen={isOpen}
          onOpenChange={(open) => handlePickerVisibleChange(open)}
        >
          <PopoverTrigger>
            <div
              role="button"
              aria-label="color picker trigger"
              className="w-[142px] h-[48px] bg-white dark:bg-black rounded-md shadow-md cursor-pointer"
            >
              <div className="float-left p-3 pr-0">
                {currentColorHex || "#######"}
              </div>
              <div
                className="float-right inline-block w-10 h-10 mt-1 mr-1 border rounded-md"
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  backgroundColor: `${currentColorHex}`,
                }}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <SketchPicker
              className="border shadow-lg"
              color={currentColor}
              onChange={handleColorChange}
            />
          </PopoverContent>
        </Popover>
      </div>
    </UiSettingCard>
  );
}

export function UiSettingSliderContent({
  label,
  classContent,
  slider,
  handleUiChange,
  getUiPropertyValue,
}: {
  label: string;
  classContent: {
    group: string;
    name: string;
    endContent: string;
  };
  slider: {
    defaultValue: number;
    maxValue: number;
    minValue: number;
    step: number;
  };
  handleUiChange: (
    className: string,
    property: string,
    value: string | number
  ) => void;
  getUiPropertyValue: (className: string, property: string) => string | null;
}) {
  // CSSから初期値を取得
  const initialSize = getUiPropertyValue(classContent.group, classContent.name);
  const initialValue = initialSize
    ? parseFloat(initialSize)
    : slider.defaultValue;

  const [size, setSize] = useState<number>(initialValue);

  const handleSizeChange = (value: number | number[]) => {
    if (isNaN(Number(value))) return;
    setSize(value as number);
    handleUiChange(
      classContent.group,
      classContent.name,
      `${value}${classContent.endContent}`
    );
  };

  return (
    <UiSettingCard label={label}>
      <Slider
        aria-label={`UiSettingCard > Slider > ${label}`}
        classNames={{
          base: "w-28 sm:!w-48 md:!w-56",
          track: "border-s-indigo-500",
          filler: "bg-indigo-500",
        }}
        value={size} // 初期値を状態に反映
        maxValue={slider.maxValue}
        minValue={slider.minValue}
        step={slider.step}
        onChange={(e) => handleSizeChange(e)}
        renderThumb={(props) => (
          <div
            {...props}
            className="group py-1 px-5 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-md cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span>
              {size}
              {classContent.endContent}
            </span>
          </div>
        )}
      />
    </UiSettingCard>
  );
}

export function UiSettingSwitchContent({
  label,
  classContent,
  switchContent,
  handleUiChange,
  getUiPropertyValue,
}: {
  label: string;
  classContent: {
    group: string;
    name: string;
  };
  switchContent: {
    trueContent: string;
    falseContent: string;
  };
  handleUiChange: (
    className: string,
    property: string,
    value: string | number
  ) => void;
  getUiPropertyValue: (className: string, property: string) => string | null;
}) {
  // CSSから初期値を取得
  const getInitial = getUiPropertyValue(classContent.group, classContent.name);
  const initialValue = getInitial === switchContent.trueContent ? true : false;

  const [isSelected, setIsSelected] = useState(initialValue);

  const handleChange = (isSelected: boolean) => {
    setIsSelected(isSelected);
    handleUiChange(
      classContent.group,
      classContent.name,
      `${isSelected ? switchContent.trueContent : switchContent.falseContent}`
    );
  };

  const id = `${classContent.group}-${classContent.name}`;

  return (
    <UiSettingCard label={label}>
      <Switch
        aria-label="setting switch"
        id={id}
        isSelected={isSelected}
        onValueChange={handleChange}
        color="success"
        classNames={{
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn(
            "w-6 h-6 shadow-lg",
            "group-data-[hover=true]:border-primary",
            //selected
            "group-data-[selected=true]:ms-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ms-4"
          ),
        }}
      />
    </UiSettingCard>
  );
}
