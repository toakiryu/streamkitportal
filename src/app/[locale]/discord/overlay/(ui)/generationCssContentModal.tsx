import { useThemeDarkOrLight } from "@/hooks/theme";
import { Link } from "@/i18n/routing";
import { css } from "@codemirror/lang-css";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ReactCodeMirror from "@uiw/react-codemirror";

export default function GenerationCssContentModal({
  generatedCustomCss,
  handleCopy,
  isOpen,
  onClose,
  onOpenChange,
}: {
  generatedCustomCss: string;
  handleCopy: (text: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
}) {
  const themeDarkOrLight = useThemeDarkOrLight();

  return (
    <Modal
      scrollBehavior="inside"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalBody>
          <ModalHeader className="flex flex-col gap-1">
            あなたのカスタマイズ
            <p className="text-sm font-normal">
              使い方がわかりませんか？
              <Link
                href="/docs/discord/overlay/widget-setup"
                target="_blank"
                className="text-blue-500"
              >
                このドキュメント
              </Link>
              をご覧ください。
            </p>
          </ModalHeader>
          <ModalBody>
            <ReactCodeMirror
              value={generatedCustomCss}
              height="auto"
              theme={themeDarkOrLight}
              extensions={[css()]}
              className="border rounded-md"
              readOnly
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              onPress={() => {
                handleCopy(generatedCustomCss), onClose();
              }}
            >
              Copy
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
