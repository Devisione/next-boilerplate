import React from "react";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";
import UserAvatar from "@entities/User/ui/Avatar";

const LayoutFeature: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>
        <div>
          <Link href="/profile">
            <button>text</button>
          </Link>
        </div>
        <UserAvatar />
      </header>
      <div>{children}</div>
    </div>
  );
};

export default LayoutFeature;
