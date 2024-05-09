import { useState } from "react";
import { Slider, Text } from "@mantine/core";

export default function RotateSlider() {
  const [rotate, setRotate] = useState(0);

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Rotate</Text>
        <Text size="lg">{rotate} °</Text>
      </div>
      <Slider
        value={rotate}
        onChange={setRotate}
        label={null}
        min={0}
        max={360}
        color="#f15757"
      />
      CS
    </div>
  );
}
