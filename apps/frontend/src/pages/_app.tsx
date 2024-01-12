import type { AppProps } from "next/app";
import { EffectorNext } from "@effector/next";
import { MantineProvider, theme } from "@ui/theme";


// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ну тут хз что прийдёт
const App = ({ Component, pageProps }: AppProps<{ values: any }>) => {
  return (
    <EffectorNext values={pageProps.values}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </EffectorNext>
  );
};

export default App;