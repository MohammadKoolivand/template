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
    label = "PASSIVE SOCIAL";
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
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[url(/bg.jpeg)] bg-cover bg-center bg-no-repeat opacity-50" />
        <div className="absolute top-0 z-[9] flex h-screen w-full flex-col items-center justify-center ">
          <h1 className="font-oswald text-[72pt] font-[400] leading-[1.2] text-[#7a44ed] max-md:text-[50pt] max-sm:text-[30pt]">
            {label}
          </h1>
          <div className="mt-[10px] h-[12px] w-[600px] max-w-[80%] bg-[#ff7361]" />
          <Image
            onClick={() => {
              let pageHeight = window.innerHeight;
              window.scrollBy(0, pageHeight - 56);
            }}
            src="/images/down.png"
            alt="passive social"
            width={40}
            height={40}
            className="absolute bottom-4 cursor-pointer opacity-70 hover:opacity-100"
          />
        </div>
        <div className="p-[50px] max-sm:p-[20px]" id="content">
          <Component {...pageProps} />
          <div className="mt-[30px] flex flex-col">
            <span className="text-[11pt] font-[400]">
              © 2023 Passive Social, Inc. All rights reserved.
            </span>
            {/* <span className="text-[11pt] font-[400]">
              Address: 1111B S Governors Ave, Dover, DE 19904
            </span>
            <span className="text-[11pt] font-[400]">
              Contact: +1(217)979-3176
            </span> */}
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
