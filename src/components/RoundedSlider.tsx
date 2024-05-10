import { Slider, Text } from "@mantine/core";
import { useState } from "react";

export default function RoundedSlider() {
  const [rounded, setRounded] = useState(0);

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Size</Text>
        <Text size="lg">{rounded} px</Text>
      </div>
      <Slider
        value={rounded}
        onChange={setRounded}
        label={null}
        min={0}
        max={512}
        color="#f15757"
      />
    </div>
  );
}
