"use client";

import { useSearchParams } from "next/navigation";
import { Tab, Tabs } from "@nextui-org/react";
import lazyImport from "@/components/lazyImport";

const DiscordOverlayCustomCodeEditor = lazyImport(
  () => import("../(ui)/codeEditor")
);
const DiscordOverlayCustomUIControlStatusWidget = lazyImport(
  () => import("./uiControl")
);

export default function DiscordOverlayStatusCustom({
  customCss,
  setCustomCss,
}: {
  customCss: string;
  setCustomCss: React.Dispatch<React.SetStateAction<string>>;
}) {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") || "ui-control";

  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-blue-500",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-blue-500",
          }}
          color="primary"
          variant="underlined"
          defaultSelectedKey={defaultTab}
        >
          <Tab
            key="ui-control"
            title={
              <div className="flex items-center space-x-2 font-bold uppercase">
                <span>Ui Control</span>
              </div>
            }
          >
            <DiscordOverlayCustomUIControlStatusWidget
              customCss={customCss}
              setCustomCss={setCustomCss}
            />
          </Tab>
          <Tab
            key="code-editor"
            title={
              <div className="flex items-center space-x-2 font-bold uppercase">
                <span>Code Editor</span>
              </div>
            }
          >
            <DiscordOverlayCustomCodeEditor
              customCss={customCss}
              setCustomCss={setCustomCss}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
