import React, { ReactElement } from "react";
import useLayout from "./useLayout";
import { Menu } from "../menu";

interface MainLayoutProps {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { noLayout, asPath } = useLayout();
  return (
    <main className="">
      {noLayout.some((item) => asPath.toLocaleLowerCase().includes(item)) ? (
        children
      ) : (
        <Menu />
      )}
    </main>
  );
}
