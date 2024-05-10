import IconBackgroundColorPicker from "./IconBackgroundColorPicker";
import PaddingSlider from "./PaddingSlider";
import RoundedSlider from "./RoundedSlider";

export default function BackgroundController() {
  return (
    <div className="border p-4 rounded-md">
      <RoundedSlider />
      <PaddingSlider />
      <IconBackgroundColorPicker />
    </div>
  );
}
