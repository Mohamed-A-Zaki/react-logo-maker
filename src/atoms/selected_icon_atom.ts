import { icons } from "@/utils/icons";
import { atom } from "@mongez/react-atom";

export const selected_icon_atom = atom<keyof typeof icons>({
  key: "selected_icon",
  default: "CiFaceSmile",
});
