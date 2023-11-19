import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";

export default function AboutUs() {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID || "");
  ReactGA.pageview("/about-us");

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="At Passive Social, we are dedicated to creating innovative digital experiences that foster meaningful connections and empower individuals through the strength of social communities. With our cutting-edge technology, we aim to revolutionize the way people interact, collaborate, and support each"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=6451158818" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <div className="flex flex-col">
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          At Passive Social, we are dedicated to creating innovative digital
          experiences that foster meaningful connections and empower individuals
          through the strength of social communities. With our cutting-edge
          technology, we aim to revolutionize the way people interact,
          collaborate, and support each other in the modern world.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          Our flagship product,{" "}
          <a
            className="font-[700] underline"
            href="https://apps.apple.com/app/apple-store/id6451158818?pt=126476240&ct=Own_Web_Opg_Lin_12_US_EG&mt=8"
          >
            Opingo
          </a>{" "}
          , serves as a platform for individuals to engage in structured
          conversations. We believe that by providing a space where users can
          ask questions, seek advice, and share opinions, we can facilitate
          stronger connections and enhance relationships across a diverse range
          of topics and interests.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          Through our app, users have the opportunity to explore and engage with
          a vibrant community of like-minded individuals who share their
          passions and curiosities. Whether it's discussing the latest gaming
          trends, seeking investment advice, or discovering new travel
          destinations, our technology empowers users to tap into the collective
          wisdom and experiences of the community.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          One of the core principles driving our app is privacy. We understand
          the importance of creating a safe and confidential environment where
          individuals can freely express themselves without fear of judgment or
          exposure. We prioritize the protection of user identities and ensure
          that all interactions remain private, allowing users to openly share
          their thoughts and opinions without hesitation.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          Our technology not only connects people but also empowers individuals
          to make informed decisions and enrich their lives. By presenting users
          with clear and structured information, we enable them to gather
          insights, seek guidance, and ultimately make choices that align with
          their preferences and values.
        </p>
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          We believe in the transformative power of social communities. We are
          committed to building digital experiences that bring people closer
          together, foster authentic connections, and fortify relationships in
          the modern era. Join us on this exciting journey as we revolutionize
          the way individuals connect and engage through the power of our
          innovative technology. Together, let's shape a vibrant and thriving
          social community that inspires and supports one another.
        </p>
      </div>
    </>
  );
}
