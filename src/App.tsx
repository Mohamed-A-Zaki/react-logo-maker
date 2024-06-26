import Navbar from "@/components/Navbar";
import { Group, Stack } from "@mantine/core";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import useCache from "./hooks/useCache";
import IconsModal from "./components/IconsModal";
import { useRef } from "react";

export default function App() {
  useCache();

  const image_ref = useRef<HTMLDivElement | null>(null!);

  return (
    <Stack className="h-screen p-3 overflow-auto" gap={10}>
      <Navbar image_ref={image_ref} />

      <Group className="flex-1" gap={10}>
        <Sidebar />
        <Main image_ref={image_ref} />
      </Group>

      <IconsModal />
    </Stack>
  );
}
