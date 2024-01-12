import type { AppProps } from "next/app";
import { EffectorNext } from "@effector/next";
import { RouterInitialize } from "@services/Router/model";
import { MantineProvider, theme } from "@ui/theme";

const App = ({ Component, pageProps }: AppProps<{ values: any }>) => {
  return (
    <EffectorNext values={pageProps.values}>
      <RouterInitialize />
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </EffectorNext>
  );
};

export default App;
