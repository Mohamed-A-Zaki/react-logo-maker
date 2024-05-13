import { icons } from "@/utils/icons";
import { images } from "@/utils/images";
import { Button } from "@mantine/core";
import html2canvas from "html2canvas";

export default function Navbar({
  image_ref,
}: {
  image_ref: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const downloadImage = async () => {
    const canvas = await html2canvas(image_ref.current!);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "myComponentImage.png";
    link.href = image;
    link.click();
  };

  return (
    <nav className="flex items-center justify-between p-5 border rounded-md">
      <img src={images.logo} alt="logo" className="w-60" />
      <Button className="!bg-primary_color text-white" onClick={downloadImage}>
        <icons.MdOutlineFileDownload className="text-xl mr-2" />
        Download
      </Button>
    </nav>
  );
}
