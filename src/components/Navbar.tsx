import { icons } from "@/utils/icons";
import { images } from "@/utils/images";
import { Button } from "@mantine/core";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 border rounded-md">
      <img src={images.logo} alt="logo" className="w-60" />
      <Button className="!bg-primary_color text-white">
        <icons.MdOutlineFileDownload className="text-xl mr-2" />
        Download
      </Button>
    </nav>
  );
}
