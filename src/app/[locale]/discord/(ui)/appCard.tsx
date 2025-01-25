import React from "react";
import { Image } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

function DiscordUIAppCard({
  app,
  list,
  buttons,
}: {
  app: {
    label: string;
    name: string;
    description: string;
    icon?: string;
  };
  list?: string[];
  buttons?: {
    customize?: {
      label: string;
      link: string;
    };
    addToDiscord?: {
      label: string;
      link: string;
    };
    website?: {
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
        <Image alt={`${app.name} icon`} src={app.icon} className="w-20 h-auto rounded-none" />
      </div>
      <h2 className="font-bold text-3xl mb-5">{app.label}</h2>
      <p className="text-sm my-5">{app.description}</p>
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
      {buttons?.addToDiscord && (
        <Link
          data-track="add_to_discord"
          href={buttons.addToDiscord.link}
          target={
            buttons.addToDiscord.link.startsWith("http://") ||
            buttons.addToDiscord.link.startsWith("https://")
              ? "_blank"
              : "_self"
          }
          className="bg-indigo-600/90 dark:!bg-indigo-500/90 text-white text-sm text-center font-normal flex justify-center items-center w-full mt-5 py-2 px-4 rounded-full transition-all duration-200 ease-in-out hover:opacity-70 hover:shadow-md active:scale-95"
        >
          {buttons.addToDiscord.label}
        </Link>
      )}
      {buttons?.website && (
        <div className="flex justify-center items-center mt-5 mx-auto">
          <Link
            data-track="obs_website"
            href={buttons.website.link}
            target={
              buttons.website.link.startsWith("http://") ||
              buttons.website.link.startsWith("https://")
                ? "_blank"
                : "_self"
            }
            className="text-indigo-600/90 dark:!text-indigo-500/90 text-sm font-normal no-underline hover:underline active:opacity-70"
          >
            {buttons?.website.label}
          </Link>
        </div>
      )}
    </div>
  );
}

export default DiscordUIAppCard;
