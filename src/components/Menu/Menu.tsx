import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export type LinkType = {
  label: string;
  href: string;
};

const links: LinkType[] = [
  {
    label: "Home",
    href: "/",
  },
  // { label: "About Us", href: "/about-us" },
  // { label: "Contact Us", href: "/contact-us" },
];

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 z-10 w-full">
      <div
        className={clsx("sticky w-full max-sm:hidden", {
          "bg-white ": scrollY > 0,
        })}>
        <DesktopMenu links={links} />
      </div>
      <div className="w-full sm:hidden">
        <MobileMenu links={links} />
      </div>
    </div>
  );
};

export default Menu;
