import Head from "next/head";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ReactGA from "react-ga";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

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
    </>
  );
}
