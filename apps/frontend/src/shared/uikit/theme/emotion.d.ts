import "@emotion/react";
import { MantineTheme } from "@shared/uikit/theme/index";

declare module "@emotion/react" {
  export interface Theme extends MantineTheme {}
}
