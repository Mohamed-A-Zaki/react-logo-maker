import { styles_atom } from "@/atoms/styles_atom";
import { icons } from "@/utils/icons";

export default function IconPreview() {
  const { background, color, padding, size, rotate, rounded } =
    styles_atom.useValue();

  return (
    <div className="border p-4 rounded-md flex items-center justify-center">
      <div className="bg-gray-100 h-[520px] w-[520px] border-4 border-dotted rounded-md flex items-center justify-center">
        <div
          style={{
            background: background,
            borderRadius: rounded,
          }}
        >
          <icons.FaRegEdit
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
