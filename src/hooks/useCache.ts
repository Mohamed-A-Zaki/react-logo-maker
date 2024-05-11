import { styles_atom } from "@/atoms/styles_atom";
import cache from "@mongez/cache";
import { useEffect } from "react";

export default function useCache() {
  const styles_value = styles_atom.useValue();

  useEffect(() => {
    const data = cache.get("styles");
    styles_atom.update(data);
  }, []);

  useEffect(() => {
    cache.set("styles", styles_value);
  }, [styles_value]);
}
