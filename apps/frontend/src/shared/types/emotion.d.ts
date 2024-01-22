import "@emotion/react";
import { MantineTheme } from "@ui/theme";

declare module "@emotion/react" {
  export interface Theme extends MantineTheme {}
}
