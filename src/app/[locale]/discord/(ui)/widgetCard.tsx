import React from "react";
import { Image } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

import { IconPhotoCircle, IconProps } from "@tabler/icons-react";

type Icon = React.FunctionComponent<IconProps>;

function DiscordUIWidgetCard({
  widget,
  list,
  buttons,
}: {
  widget: {
    label: string;
    name: string;
    description: string;
    icon?: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<Icon>
    >;
  };
  list?: string[];
  buttons?: {
    customize?: {
      label: string;
      link: string;
    };
  };
}) {
  return (
    <div
      id="w-node-fb33c0ee-07bd-0c0c-53ab-414b5848db38-d9fcf2d0"
      className="bg-white dark:bg-zinc-800 text-center place-items-center rounded-lg p-10 sm:!p-14 md:!p-20 shadow-md"
    >
      <div className="min-h-[90px]">
        {widget.icon ? (
          <widget.icon className="size-20" />
        ) : (
          <IconPhotoCircle className="size-20" />
        )}
      </div>
      <h2 className="font-bold text-3xl mb-5">{widget.label}</h2>
      <p className="text-sm my-5">{widget.description}</p>
      <ul
        role="list"
        className="list-inside text-left *:bg-[url(https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625d1ae0948f3b0a9a8f4644_Vector%206%20\(1\).svg)] *:bg-[0_6px] *:bg-no-repeat *:mb-2 *:pl-6"
      >
        {list?.map((listboxItem, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundSize: "14px",
              }}
            >
              {listboxItem}
            </li>
          );
        })}
      </ul>
      {buttons?.customize && (
        <Link
          data-track="customize"
          href={buttons.customize.link}
          target={
            buttons.customize.link.startsWith("http://") ||
            buttons.customize.link.startsWith("https://")
              ? "_blank"
              : "_self"
          }
          className="bg-indigo-600/90 dark:!bg-indigo-500/90 text-white text-sm text-center font-normal flex justify-center items-center w-full mt-5 py-2 px-4 rounded-full transition-all duration-200 ease-in-out hover:opacity-70 hover:shadow-md active:scale-95"
        >
          {buttons.customize.label}
        </Link>
      )}
    </div>
  );
}

export default DiscordUIWidgetCard;
