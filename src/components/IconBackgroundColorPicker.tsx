import { Text } from "@mantine/core";
import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export default function IconBackgroundColorPicker() {
  const [color, setColor] = useState("#f15757");

  return (
    <div>
      <Text size="lg">Icon Color</Text>
      <ColorPicker
        value={color}
        onChange={setColor}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
}
