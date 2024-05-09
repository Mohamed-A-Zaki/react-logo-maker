import { useState } from "react";
import { Slider, Text } from "@mantine/core";

export default function SizeSlider() {
  const [size, setSize] = useState(180);

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Size</Text>
        <Text size="lg">{size} px</Text>
      </div>
      <Slider
        value={size}
        onChange={setSize}
        label={null}
        min={0}
        max={512}
        color="#f15757"
      />
    </div>
  );
}
