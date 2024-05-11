import { Text } from "@mantine/core";
import { styles_atom } from "@/atoms/styles_atom";
import ColorPicker from "react-best-gradient-color-picker";

export default function IconBackgroundColorPicker() {
  const background = styles_atom.use("background");

  return (
    <div>
      <Text size="lg">Icon Color</Text>
      <ColorPicker
        value={background}
        onChange={(value) => styles_atom.change("background", value)}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
}
