/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  return (
    <div className="flex h-[100svh] items-center justify-between">
      <div className="flex w-6/12 flex-col items-center">
        <Image
          src="/images/header.svg"
          alt="header"
          className="w-10/12"
          width={200}
          height={200}
        />
      </div>
      <div className="flex w-6/12 flex-col items-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mb-10 mt-5">
          We need you to help us with some basic information to create your
          account.
        </p>
        <div className="w-6/12 items-center">
          <input
            placeholder="Username or Email"
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
          />
          <input
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
            placeholder="Password"
          />
          <button className="h-10 w-full rounded-md bg-[#29524A]">
            <p className="text-white">sign up</p>
          </button>
        </div>
        <Image
          src="/icons/line.svg"
          alt="line"
          className="mt-10 w-8/12"
          width={200}
          height={20}
        />
        <div className="mb-4 mt-6 flex w-8/12 justify-between">
          <button className="w-12/12 rounded-3xl border-x border-y border-[#88A09E] px-10 py-3">
            <div className="flex items-center justify-center">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                className="mr-1"
                width={20}
                height={20}
              />
              <p className="text-[14px] text-[#88A09E]">
                Continue with facebook
              </p>
            </div>
          </button>
          <button className="w-12/12 rounded-3xl border-x border-y border-[#88A09E] px-10 py-3">
            <div className="flex items-center justify-center">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                className="mr-1"
                width={20}
                height={20}
              />
              <p className="text-[14px] text-[#88A09E]">
                Continue with Linkedin
              </p>
            </div>
          </button>
        </div>
        <button className="w-8/12 rounded-3xl border-x border-y border-[#88A09E] px-6 py-3">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/google.svg"
              alt="google"
              className="mr-1"
              width={20}
              height={20}
            />
            <p className="text-[14px] text-[#88A09E]">Continue with Google</p>
          </div>
        </button>
        <div className="mt-5 flex items-center">
          <p className="mx-2">Don't have an account?</p>
          <Link href="/signup" className="text-sm font-bold text-[#29524A]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
