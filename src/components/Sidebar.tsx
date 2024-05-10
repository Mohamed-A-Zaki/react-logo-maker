import { icons } from "@/utils/icons";
import { controller_atom } from "@/atoms/controller_atom";

export default function Sidebar() {
  const [controller, setController] = controller_atom.useState();

  const data = [
    {
      id: 1,
      name: "Icon",
      Icon: icons.FaRegEdit,
      onClick: () => setController("icon"),
    },
    {
      id: 2,
      name: "Background",
      Icon: icons.CiImageOn,
      onClick: () => setController("background"),
    },
  ];

  return (
    <div className="w-60 h-full border rounded-md p-2">
      {data.map(({ id, Icon, name, onClick }) => {
        return (
          <div
            key={id}
            onClick={onClick}
            className={`flex items-center gap-3 p-3 my-2 rounded-md text-gray-500 hover:bg-primary_color hover:text-white cursor-pointer transition duration-300 ${
              controller === name.toLocaleLowerCase() &&
              "bg-primary_color text-white"
            }`}
          >
            <Icon />
            {name}
          </div>
        );
      })}
    </div>
  );
}
