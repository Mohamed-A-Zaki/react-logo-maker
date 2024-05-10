import { useState } from "react";
import { Text } from "@mantine/core";
import ColorPicker from "react-best-gradient-color-picker";

export default function IconColorPicker() {
  const [color, setColor] = useState("#f15757");

  return (
    <div>
      <Text size="lg">Icon Color</Text>
      <ColorPicker value={color} onChange={setColor} hideControls />
    </div>
  );
}
