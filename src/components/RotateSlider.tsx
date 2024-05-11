import { Slider, Text } from "@mantine/core";
import { styles_atom } from "@/atoms/styles_atom";

export default function RotateSlider() {
  const rotate = styles_atom.use("rotate");

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Rotate</Text>
        <Text size="lg">{rotate} °</Text>
      </div>
      <Slider
        value={rotate}
        onChange={(value) => styles_atom.change("rotate", value)}
        label={null}
        min={0}
        max={360}
        color="#f15757"
      />
      CS
    </div>
  );
}
