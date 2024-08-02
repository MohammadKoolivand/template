import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex w-6/12 flex-col items-center">
      <Image
        src="/images/header.svg"
        alt="header"
        className="w-10/12"
        width={200}
        height={200}
      />
    </div>
  );
}
