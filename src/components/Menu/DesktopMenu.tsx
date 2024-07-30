import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { LinkType } from "./Menu";

interface DesktopMenuProps {
  links: LinkType[];
}

const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>(router.pathname);
  const isSmalSizeShow = /app/i.test(router.pathname);

  return (
    <div
      className={clsx(
        "flex h-[56px] w-full flex-row items-center justify-between px-4"
        // {
        //   "bg-white ": !isSmalSizeShow,
        // }
      )}>
      <div className="flex">
        <Link
          href={"/"}
          onClick={() => setActiveLink(links[0].href)}
          className="flex flex-row items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="passive social"
            className="mr-10 aspect-[1] w-[40px]"
            width={40}
            height={40}
          />
        </Link>
        {!isSmalSizeShow && (
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row gap-6">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx("font-lato text-[16px]", {
                    "font-light text-[#000000cc]": activeLink === item.href,
                    "font-light text-[#000000a3]": activeLink !== item.href,
                  })}
                  onClick={() => setActiveLink(item.href)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        <Link
          href={"/login"}
          onClick={() => setActiveLink(links[0].href)}
          className="flex flex-row items-center gap-3">
          <button className="mr-5 rounded-3xl border-2 pb-1 pl-3 pr-3 pt-1">
            Login
          </button>
        </Link>
        <Link
          href={"/register"}
          onClick={() => setActiveLink(links[0].href)}
          className="flex flex-row items-center gap-3">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
