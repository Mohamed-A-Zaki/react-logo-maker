import Navbar from "@/components/Navbar";
import { Group, Stack } from "@mantine/core";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import useCache from "./hooks/useCache";
import IconsModal from "./components/IconsModal";

export default function App() {
  useCache();

  return (
    <Stack className="h-screen p-3 overflow-auto" gap={10}>
      <Navbar />

      <Group className="flex-1" gap={10}>
        <Sidebar />
        <Main />
      </Group>

      <IconsModal />
    </Stack>
  );
}
