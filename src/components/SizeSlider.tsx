import { Slider, Text } from "@mantine/core";
import { styles_atom } from "@/atoms/styles_atom";

export default function SizeSlider() {
  const size = styles_atom.use("size");

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Size</Text>
        <Text size="lg">{size} px</Text>
      </div>
      <Slider
        value={size}
        onChange={(value) => styles_atom.change("size", value)}
        label={null}
        min={0}
        max={512}
        color="#f15757"
      />
    </div>
  );
}
