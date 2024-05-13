import { Grid } from "@mantine/core";
import IconPreview from "./IconPreview";
import IconController from "./IconController";
import BackgroundController from "./BackgroundController";
import { controller_atom } from "@/atoms/controller_atom";

export default function Main({
  image_ref,
}: {
  image_ref: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const controller = controller_atom.useValue();

  return (
    <main className="h-full border rounded-md p-4 flex-1">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          {controller === "icon" ? (
            <IconController />
          ) : (
            <BackgroundController />
          )}
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <IconPreview image_ref={image_ref} />
        </Grid.Col>
      </Grid>
    </main>
  );
}
