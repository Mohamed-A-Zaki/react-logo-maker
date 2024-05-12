import { open_icon_modal_atom } from "@/atoms/open_icon_modal_atom";
import { selected_icon_atom } from "@/atoms/selected_icon_atom";
import { icons } from "@/utils/icons";

export default function SelectIconButton() {
  const icon = selected_icon_atom.useValue();

  const Icon = icons[icon] || icons.CiFaceSmile;

  return (
    <div className="w-fit">
      <div className="font-semibold text-center">Icon</div>
      <Icon
        className="bg-gray-300 p-2 rounded-md cursor-pointer"
        size={40}
        onClick={open_icon_modal_atom.open}
      />
    </div>
  );
}
