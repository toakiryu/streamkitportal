const icon = {
  dir: "/wp-content/discord/cdn/icons/",
  icons: [
    "icon-blue.png",
    "icon-green.png",
    "icon-grey.png",
    "icon-red.png",
    "icon-yellow.png",
  ],
};

export type iconsType = "blue" | "green" | "grey" | "red" | "yellow";

export function getIconPass(color: iconsType): string {
  const iconName = `icon-${color}.png`;
  const foundIcon = icon.icons.find((e) => e === iconName);
  if (!foundIcon) {
    throw new Error(`Icon with color "${color}" not found.`);
  }
  return `${icon.dir}${foundIcon}`;
}

export function getRandomIcon(): string {
  const randomIndex = Math.floor(Math.random() * icon.icons.length);
  return icon.icons[randomIndex];
}

export function getRandomIconPass(): string {
  const randomIcon = getRandomIcon();
  return `${icon.dir}${randomIcon}`;
}
