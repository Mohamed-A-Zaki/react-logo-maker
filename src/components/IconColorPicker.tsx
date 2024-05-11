import { Text } from "@mantine/core";
import ColorPicker from "react-best-gradient-color-picker";
import { styles_atom } from "@/atoms/styles_atom";

export default function IconColorPicker() {
  const color = styles_atom.use("color");

  return (
    <div>
      <Text size="lg">Icon Color</Text>
      <ColorPicker
        value={color}
        onChange={(value) => styles_atom.change("color", value)}
        hideControls
      />
    </div>
  );
}
