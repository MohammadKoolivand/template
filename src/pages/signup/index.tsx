import { API } from "@/config/api";
import { FetchContext } from "@/context/fetchContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("!@QW12qw");
  const [profileUrl, setProfileUrl] = useState<string>("");
  const { request } = useContext(FetchContext);

  const registerUser = () => {
    const body = { email, password, firstName, lastName, profileUrl };
    request(API.Authentication.Register, "POST", body).then(
      ({ status, data }) => {
        if (status === 200) {
          console.log("/signin");
        }
      }
    );
  };
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
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="mb-10 mt-5">
          We need you to help us with some basic information to create your
          account.
        </p>
        <div className="w-6/12 items-center">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
            placeholder="Last name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username or Email"
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 h-10 w-full rounded-md border-x border-y border-black p-2 outline-0"
            placeholder="Password"
          />
          <button
            onClick={() => registerUser()}
            className="h-10 w-full rounded-md bg-[#29524A]">
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
          <p className="mx-2">Already have an account?</p>
          <Link href="/login" className="text-sm font-bold text-[#29524A]">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
