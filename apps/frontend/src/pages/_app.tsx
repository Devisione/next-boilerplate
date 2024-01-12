import type { AppProps } from "next/app";
import { MantineProvider, theme } from "@ui/theme";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;