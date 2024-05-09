import SizeSlider from "./SizeSlider";
import RotateSlider from "./RotateSlider";
import IconColorPicker from "./IconColorPicker";
import SelectIconButton from "./SelectIconButton";

export default function IconController() {
  return (
    <div className="border p-4 rounded-md">
      <SelectIconButton />
      <SizeSlider />
      <RotateSlider />
      <IconColorPicker />
    </div>
  );
}
