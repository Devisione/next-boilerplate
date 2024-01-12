import React from "react";
import type { FC, PropsWithChildren } from "react";

const LayoutFeature: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutFeature;