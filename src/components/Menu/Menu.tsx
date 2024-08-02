import clsx from "clsx";
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
  return (
    <div className="w-full">
      <div className={clsx("max-sm:hidden")}>
        <DesktopMenu links={links} />
      </div>
      <div className="sm:hidden">
        <MobileMenu links={links} />
      </div>
    </div>
  );
};

export default Menu;
