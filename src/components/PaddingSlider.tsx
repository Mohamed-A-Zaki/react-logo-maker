import { styles_atom } from "@/atoms/styles_atom";
import { Slider, Text } from "@mantine/core";

export default function PaddingSlider() {
  const padding = styles_atom.use("padding");
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <Text size="lg">Padding</Text>
        <Text size="lg">{padding} px</Text>
      </div>
      <Slider
        value={padding}
        onChange={(value) => styles_atom.change("padding", value)}
        label={null}
        min={0}
        max={100}
        color="#f15757"
      />
    </div>
  );
}
