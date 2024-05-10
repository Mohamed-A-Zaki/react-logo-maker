import { Slider, Text } from "@mantine/core";
import { useState } from "react";

export default function PaddingSlider() {
  const [padding, setPadding] = useState(0);

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Size</Text>
        <Text size="lg">{padding} px</Text>
      </div>
      <Slider
        value={padding}
        onChange={setPadding}
        label={null}
        min={0}
        max={100}
        color="#f15757"
      />
    </div>
  );
}
