import { Grid } from "@mantine/core";
import IconPreview from "./IconPreview";
import IconController from "./IconController";

export default function Main() {
  return (
    <main className="h-full border rounded-md p-4 flex-1">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <IconController />
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <IconPreview />
        </Grid.Col>
      </Grid>
    </main>
  );
}
