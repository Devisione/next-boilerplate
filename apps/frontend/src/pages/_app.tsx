import type { AppProps } from "next/app";
import { EffectorNext } from "@effector/next";
import { RouterInitialize } from "@services/Router/model";
import "@entities/global_stores";
import type { NextPageWithLayout } from "@features/Layout/model/types";
import LayoutFeature from "@features/Layout";

const App = ({
  Component,
  pageProps,
}: AppProps<{ values: any }> & { Component: NextPageWithLayout }) => {
  const getLayout =
    Component.getLayout || ((page) => <LayoutFeature>{page}</LayoutFeature>);

  return (
    <EffectorNext values={pageProps.values}>
      <RouterInitialize />
      {getLayout(<Component {...pageProps} />)}
    </EffectorNext>
  );
};

export default App;
