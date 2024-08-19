"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ConnectButton } from "@mysten/dapp-kit";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex w-full h-50 bg-white flex-row">
      <div className="w-1/3 flex flex-row">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.gif"
          alt="Logo"
          width={70}
          height={40}
          priority
        />
        <p className="mt-4 text-2xl">SuiPet</p>
      </div>
      <div className="w-1/3 flex flex-between bg-white text-2xl">
        <button className="w-1/3 text-black hover:bg-black hover:text-white hover:border-md">
          <Link
            className={`link ${
              pathname === "/home" ? "bg-active text-active" : ""
            } block w-full h-full leading-[52px]`}
            href="/home"
          >
            Home
          </Link>
        </button>
        <button className="w-1/3 text-black hover:bg-black hover:text-white hover:border-md">
          <Link
            className={`link ${
              pathname === "/pets" ? "bg-active text-active" : ""
            } block w-full h-full leading-[52px]`}
            href="/pets"
          >
            Pets
          </Link>
        </button>
        <button className="w-1/3 text-black hover:bg-black hover:text-white hover:border-md">
          <Link
            className={`link ${
              pathname === "/topic" ? "bg-active text-active" : ""
            } block w-full h-full leading-[52px]`}
            href="/topic"
          >
            Topic
          </Link>
        </button>
        <button className="w-1/3 text-black hover:bg-black hover:text-white hover:border-md">
          <Link
            className={`link ${
              pathname === "/more" ? "bg-active text-active" : ""
            } block w-full h-full leading-[52px]`}
            href="/more"
          >
            More
          </Link>
        </button>
      </div>

      <div className="w-1/3 flex flex-row justify-end bg-white text-xl mr-3 p-1">
        <ConnectButton />
        {/* <button className="bg-[#E7E7E7] bordered rounded-md h-2/3 mt-2 p-1">Connect Wallet</button> */}
      </div>
    </div>
  );
}
