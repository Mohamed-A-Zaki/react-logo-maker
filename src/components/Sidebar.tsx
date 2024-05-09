import { icons } from "@/utils/icons";

export default function Sidebar() {
  const data = [
    {
      id: 1,
      name: "Icon",
      Icon: icons.FaRegEdit,
    },
    {
      id: 2,
      name: "Background",
      Icon: icons.CiImageOn,
    },
    // {
    //   id: 3,
    //   name: "Upgrade",
    //   Icon: icons.GrUpgrade,
    // },
  ];

  return (
    <div className="w-60 h-full border rounded-md p-2">
      {data.map(({ id, Icon, name }) => {
        return (
          <div
            key={id}
            className="flex items-center gap-3 p-3 rounded-md text-gray-500 hover:bg-primary_color hover:text-white cursor-pointer transition duration-300"
          >
            <Icon />
            {name}
          </div>
        );
      })}
    </div>
  );
}
