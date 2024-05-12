import { open_icon_modal_atom } from "@/atoms/open_icon_modal_atom";
import { selected_icon_atom } from "@/atoms/selected_icon_atom";
import { icons } from "@/utils/icons";
import { Modal, ScrollArea } from "@mantine/core";

export default function IconsModal() {
  const opened = open_icon_modal_atom.use("opened");

  const handleSelectIcon = (name: keyof typeof icons) => {
    selected_icon_atom.update(name);
    open_icon_modal_atom.close();
  };

  return (
    <Modal
      opened={opened}
      onClose={open_icon_modal_atom.close}
      title="Pic Your Favorite Icon"
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <div className="grid grid-cols-6 gap-2">
        {Object.values(icons).map((Icon, indx) => {
          return (
            <Icon
              key={indx}
              size={40}
              className="p-2 border rounded-md cursor-pointer w-full"
              onClick={() => handleSelectIcon(Icon.name as keyof typeof icons)}
            />
          );
        })}
      </div>
    </Modal>
  );
}
