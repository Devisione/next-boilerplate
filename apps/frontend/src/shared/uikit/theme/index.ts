import type { MantineThemeOverride, MantineTheme } from "@mantine/core";
import "@mantine/core/styles/global.css";
import createCache from "@emotion/cache";

export const cache = createCache({
    key: "mantine",
    prepend: false,
});

export const theme: MantineThemeOverride = {};
export type { MantineTheme };
export { createStylesServer, ServerStyles } from "@mantine/next";
export { MantineProvider, useMantineTheme} from "@mantine/core";
