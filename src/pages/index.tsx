import MainPage from "@/components/MainPage";
import Head from "next/head";
import ReactGA from "react-ga";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID || "");
  ReactGA.pageview("/");

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content={
            "We build digital experiences that help people connect through the power of social community. Our technology is designed to fuel and fortify modern relationships of every kind."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={
            "Opingo,Connect with People,Got a Question?,Question Everything,Your Questions, Our Platform"
          }
        />
        <meta name="apple-itunes-app" content="app-id=6451158818" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <main>
        <MainPage />
      </main>
    </>
  );
}
