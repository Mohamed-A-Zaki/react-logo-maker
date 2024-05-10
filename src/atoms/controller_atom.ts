import { atom } from "@mongez/react-atom";

export const controller_atom = atom<"icon" | "background">({
  key: "controller",
  default: "icon",
});
