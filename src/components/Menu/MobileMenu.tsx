import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import OpingoIcon from "../../../../public/images/opingoIcon.png";
import MenuIcon from "../../../../public/icons/menu.png";
import CloseIcon from "../../../../public/icons/close.png";
import { LinkType } from "./Menu";

interface MobileMenuProps {
  links: LinkType[];
}
const MobileMenu = ({ links }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState<LinkType>(links[0]);

  return (
    <div
      className="flex w-full"
      role="button"
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="flex h-[56px] w-full flex-row items-center gap-3 bg-white pl-4"
        role="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(true);
        }}
      >
        <Image
          src="/images/menu.png"
          alt="passive social"
          className="h-[12px] w-[18px]"
          width={12}
          height={18}
        />
        <Image
          src="/images/logo.png"
          alt="passive social"
          className="aspect-[1] w-[30px] "
          width={56}
          height={56}
        />
      </div>

      <div
        className={clsx(
          "absolute	 h-screen w-[60%] bg-[#fff]  pt-4 transition-all duration-500",
          {
            "left-0": openMenu,
            "-left-full": !openMenu,
          }
        )}
      >
        <Image
          src="/images/close.png"
          alt="passive social"
          onClick={() => setOpenMenu(false)}
          width={40}
          height={40}
        />
        <div className="mt-4 flex  flex-col gap-4 pl-6">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx("font-lato text-[16px]", {
                "font-bold text-[#000000cc]": activeLink.label === item.label,
                "font-light text-[#000000a3]": activeLink.label !== item.label,
              })}
              onClick={() => setActiveLink(item)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
