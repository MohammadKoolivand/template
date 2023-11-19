import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";

export default function ContactUs() {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID || "");
  ReactGA.pageview("/contact-us");

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="We welcome you to reach out to us at whatsup@opingoapp.com with any inquiries, suggestions, or requests you may have. Our team is here to assist you and address any questions or feedback you would like to share. Don't hesitate to contact us – we value your input and look forward to hearing from"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=6451158818" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <div className="flex flex-col">
        <p className="mb-[20px] font-montserrat text-[13pt] font-[400] text-[#222222]">
          We welcome you to reach out to us at{" "}
          <a className="underline" href="mailto:whatsup@opingoapp.com">
            whatsup@opingoapp.com
          </a>{" "}
          with any inquiries, suggestions, or requests you may have. Our team is
          here to assist you and address any questions or feedback you would
          like to share. Don't hesitate to contact us – we value your input and
          look forward to hearing from you!{" "}
        </p>
      </div>
    </>
  );
}
