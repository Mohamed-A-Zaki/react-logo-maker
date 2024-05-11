import { styles_atom } from "@/atoms/styles_atom";
import { Slider, Text } from "@mantine/core";

export default function RoundedSlider() {
  const rounded = styles_atom.use("rounded");

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Rounded</Text>
        <Text size="lg">{rounded} px</Text>
      </div>
      <Slider
        value={rounded}
        onChange={(value) => styles_atom.change("rounded", value)}
        label={null}
        min={0}
        max={512}
        color="#f15757"
      />
    </div>
  );
}
