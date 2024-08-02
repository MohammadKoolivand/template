import { Menu } from "@/components/menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Oswald } from "next/font/google";
import { store } from "@/redux/Store";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import MainLayout from "@/components/layout";
import LoginContextProvider from "@/context/loginContext";
import FetchContextProvider from "@/context/fetchContext";

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
      <LoginContextProvider>
        <FetchContextProvider>
          <MainLayout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </MainLayout>
        </FetchContextProvider>
      </LoginContextProvider>
    </>
  );
};
export default App;
