import { useThemeDarkOrLight } from "@/hooks/theme";
import { css } from "@codemirror/lang-css";
import ReactCodeMirror from "@uiw/react-codemirror";

export default function DiscordOverlayCustomCodeEditor({
  customCss,
  setCustomCss,
}: {
  customCss: string;
  setCustomCss: React.Dispatch<React.SetStateAction<string>>;
}) {
  const themeDarkOrLight = useThemeDarkOrLight();

  return (
    <ReactCodeMirror
      value={customCss}
      height="auto"
      theme={themeDarkOrLight}
      extensions={[css()]}
      className="border"
      onChange={(value) => setCustomCss(value)}
    />
  );
}
