import { icons } from "@/utils/icons";

export default function SelectIconButton() {
  return (
    <div className="w-fit">
      <div className="font-semibold text-center">Icon</div>
      <icons.CiFaceSmile
        className="bg-gray-300 p-2 rounded-md cursor-pointer"
        size={40}
      />
    </div>
  );
}
