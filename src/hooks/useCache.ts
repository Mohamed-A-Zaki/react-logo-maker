import { selected_icon_atom } from "@/atoms/selected_icon_atom";
import { styles_atom } from "@/atoms/styles_atom";
import cache from "@mongez/cache";
import { useEffect } from "react";

export default function useCache() {
  const icon = selected_icon_atom.useValue();
  const styles_value = styles_atom.useValue();

  useEffect(() => {
    const cachedIcon = cache.get("icon");
    const cachedStyles = cache.get("styles");

    if (cachedIcon) {
      selected_icon_atom.update(cachedIcon);
    } else {
      selected_icon_atom.update("CiFaceSmile");
    }

    if (cachedStyles) {
      styles_atom.update(cachedStyles);
    } else {
      styles_atom.update({
        size: 180,
        rotate: 0,
        color: "#000",
        rounded: 10,
        padding: 30,
        background: "#f15757",
      });
    }
  }, []);

  useEffect(() => {
    cache.set("icon", icon);
    cache.set("styles", styles_value);
  }, [styles_value, icon]);
}
