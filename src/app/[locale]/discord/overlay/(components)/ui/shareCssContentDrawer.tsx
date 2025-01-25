import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Link,
} from "@nextui-org/react";
import { handleCopyText } from "../../../(components)/edit";

export default function ShareCssContentDrawer({
  shareUrl,
  isOpen,
  onClose,
  onOpenChange,
}: {
  shareUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
}) {
  return (
    <Drawer
      backdrop="blur"
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">Share URL</DrawerHeader>
        <DrawerBody>
          <p className="opacity-80">
            このURLを共有することで、現在のカスタマイズを共有することができます。
          </p>
          <p>
            このURLは一度圧縮されていますが、それでもとても長いです。SNSや誰かと共有する時は
            URL圧縮 サービスを利用して再度圧縮することをお勧めします。
            <br />
            たとえば、
            <Link
              isExternal
              showAnchorIcon
              href="https://x.gd"
              className="text-blue-500"
            >
              X.gd
            </Link>
            などです。
          </p>
          <div className="w-full p-3 text-nowrap border overflow-auto select-all">
            <span>{shareUrl}</span>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button className="bg-indigo-600 dark:bg-indigo-500 text-white" onPress={() => handleCopyText(shareUrl)}>
            Copy
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
