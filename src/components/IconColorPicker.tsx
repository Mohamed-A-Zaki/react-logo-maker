import { useState } from "react";
import { ColorPicker, Text } from "@mantine/core";

export default function IconColorPicker() {
  const [color, setColor] = useState("#f15757");

  return (
    <div>
      <Text size="lg">Icon Color</Text>
      <ColorPicker
        size="md"
        format="hex"
        value={color}
        onChange={setColor}
        swatchesPerRow={9}
        swatches={[
          "#2e2e2e",
          "#868e96",
          "#fa5252",
          "#e64980",
          "#be4bdb",
          "#7950f2",
          "#4c6ef5",
          "#228be6",
          "#15aabf",
          "#12b886",
          "#40c057",
          "#82c91e",
          "#fab005",
          "#fd7e14",
        ]}
      />
    </div>
  );
}
