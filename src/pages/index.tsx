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

      <div className="flex flex-col">
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          We build digital experiences that help people connect through the
          power of social community. Our technology is designed to fuel and
          fortify modern relationships of every kind.
        </p>
        <div className="mb-[30px] flex items-center justify-center">
          <div className="mb-[20px] w-[300px]">
            <Slider {...settings}>
              {[
                {
                  image: "/images/1.jpg",
                  label: "Ask for Advice! See what is out there!",
                },
                { image: "/images/2.jpg", label: "Let them hear you!" },
                {
                  image: "/images/3.jpg",
                  label: "You never know who is there for you!",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <Image
                    src={item.image}
                    alt="opingo"
                    className="h-[300px] w-[300px]"
                    width={300}
                    height={300}
                  />
                  <span className="flex w-full items-center justify-center text-[10pt]">
                    {item.label}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          We invite you to join us on an exciting journey by downloading and
          installing{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>{" "}
          from the App Store. We are thrilled to have you as a part of our
          community, exploring the app's features, and sharing your valuable
          feedback.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          Our flagship product,{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>
          , serves as a platform for individuals to engage in structured
          conversations. Your input and suggestions play a crucial role in
          shaping the future of our platform. We value your feedback as it
          enables us to enhance existing features, introduce new
          functionalities, and ensure that{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>{" "}
          remains a valuable tool for connecting, seeking advice, and making
          informed decisions.
        </p>
        <div className="mb-[20px] flex items-center justify-center">
          <Image
            alt="Opingo"
            src="/images/opingo.png"
            className="h-[113px] w-[113px]"
            width={113}
            height={113}
          />
        </div>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          By becoming an early adopter of{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>
          , you have the opportunity to actively contribute to the growth and
          development of our platform. Your experiences and insights will help
          us refine the app, tailor it to your preferences, and create an
          exceptional user experience.{" "}
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          Download{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>{" "}
          today and embark on a journey of discovery, engagement, and community.
          We can't wait to hear your thoughts, suggestions, and ideas as we work
          together to shape the future of social connection and empowerment.
          Your feedback is instrumental in making{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>{" "}
          the go-to app for structured conversations, diverse opinions, and
          building relationships within a private and secure environment.
        </p>
      </div>
    </>
  );
}
