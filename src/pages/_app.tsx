import { Menu } from "@/components/Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Lato, Oswald } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const oswald = Oswald({
  weight: ["400", "700", "200", "300", "500", "600"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  let label = "";
  if (router.pathname === "/" || router.pathname === "") {
    label = "Next Template";
  } else if (
    router.pathname === "/about-us" ||
    router.pathname === "/about-us/"
  ) {
    label = "ABOUT US";
  } else if (
    router.pathname === "/contact-us" ||
    router.pathname === "/contact-us/"
  ) {
    label = "CONTACT US";
  }
  return (
    <>
      <style jsx global>
        {`
          :root {
            --montserrat-font: ${montserrat.style.fontFamily};
            --oswald-font: ${oswald.style.fontFamily};
          }
        `}
      </style>
      <main className="font-montserrat">
        <Menu />
        {/* <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat opacity-50" /> */}
        <div className="absolute top-0 z-[9] flex h-screen w-full flex-col items-center justify-center ">
          <h1 className="font-oswald text-[72pt] font-[400] leading-[1.2] text-[#7a44ed] max-md:text-[50pt] max-sm:text-[30pt]">
            {label}
          </h1>
        </div>
        <div className="p-[50px] max-sm:p-[20px]" id="content">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
};
export default App;
