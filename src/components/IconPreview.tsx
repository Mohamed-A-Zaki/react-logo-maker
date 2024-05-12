import { selected_icon_atom } from "@/atoms/selected_icon_atom";
import { styles_atom } from "@/atoms/styles_atom";
import { icons } from "@/utils/icons";

export default function IconPreview() {
  const { background, color, padding, rotate, rounded, size } =
    styles_atom.useValue();

  const icon = selected_icon_atom.useValue();

  const Icon = icons[icon] || icons.CiFaceSmile;

  return (
    <div className="border p-4 rounded-md flex items-center justify-center">
      <div className="bg-gray-100 h-[520px] w-[520px] border-4 border-dotted rounded-md flex items-center justify-center">
        <div
          style={{
            background: background,
            borderRadius: rounded,
          }}
        >
          <Icon
            color={color}
            size={size}
            style={{
              padding: padding,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
