import type { AppProps } from "next/app";
import { EffectorNext } from "@effector/next";
import { RouterInitialize } from "@services/Router/model";
import { cache, MantineProvider, theme, useMantineTheme } from "@ui/theme";
import "@entities/global_stores";
import type { FC, PropsWithChildren } from "react";
import type { NextPageWithLayout } from "@features/Layout/model/types";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import LayoutFeature from "@features/Layout";

const WrappedApp: FC<PropsWithChildren> = ({ children }) => {
  const mantineTheme = useMantineTheme();
  return <ThemeProvider theme={mantineTheme as any}>{children}</ThemeProvider>;
};

const App = ({
  Component,
  pageProps,
}: AppProps<{ values: any }> & { Component: NextPageWithLayout }) => {
  const getLayout =
    Component.getLayout || ((page) => <LayoutFeature>{page}</LayoutFeature>);

  return (
    <EffectorNext values={pageProps.values}>
      <RouterInitialize />
      <MantineProvider theme={theme}>
        <WrappedApp>
          <CacheProvider value={cache}>
            {getLayout(<Component {...pageProps} />)}
          </CacheProvider>
        </WrappedApp>
      </MantineProvider>
    </EffectorNext>
  );
};

export default App;
