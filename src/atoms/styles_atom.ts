import { IStyles } from "@/types/styles.type";
import { atom } from "@mongez/react-atom";

export const styles_atom = atom<IStyles>({
  key: "styles",
  default: {
    size: 180,
    rotate: 0,
    color: "#000",
    rounded: 10,
    padding: 30,
    background: "#f15757",
  },
});
