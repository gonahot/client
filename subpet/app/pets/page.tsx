"use client";
import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isSign, setIsSign] = useState(false);

  function SignIn() {
    // alert("确认登录？");
    setIsSign(true);
  }
  function onClose() {
    setIsSign(false);
  }

  return (
    <main className="bg-black">
      <div className="flex flex-row w-full min-h-screen">
        {/* left button */}
        <div className="w-1/5 ml-10 mt-20 flex flex-col">
          <div className="flex flex-row w-full">
            <div className="w-1/4">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/pets/signin-icon.png"
                alt="Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className="w-3/4">
              <button
                className="w-1/2 bg-white text-lg border-2 border-white rounded-lg"
                onClick={() => SignIn()}
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full mt-6">
            <div className="w-1/4">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/pets/cloth.png"
                alt="Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className="w-3/4">
              <button className="w-1/2 bg-white text-lg border-2 border-white rounded-lg">
                Accessories
              </button>
            </div>
          </div>
        </div>

        <div className="w-4/5 mt-20 flex flex-row h-96 ">
          <div className="w-3/4">
            <div className="text-2xl flex flex-col h-full">
              <div className="p-3 bg-white border rounded-lg flex flex-col w-2/3 items-center justify-content ">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-20"
                  src="/base.gif"
                  alt="Base"
                  width={900}
                  height={900}
                  priority
                />
              </div>
              {isSign && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
                    <button
                      onClick={onClose}
                      className="absolute top-2 left-1 text-gray-500 hover:text-gray-700  w-10 h-10 border-2 rounded-full scale-50"
                    >
                      X
                    </button>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-6">
                        Get Sign-in Rewards
                      </h2>
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-8 h-8"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        <span className="text-2xl font-semibold">Score +5</span>
                      </div>
                      <button className="bg-gray-200 text-black px-8 py-2 rounded-md hover:bg-gray-300 transition-colors w-full">
                        Get
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-1/4 flex flex-col -ml-40">
            <div className="text-3xl bg-white rounded-md w-full">
              Pets Information
            </div>

            <div className="text-3xl mt-3 bg-white rounded-md h-96 w-full p-3">
              <ul>
                <li>Name:</li>
                <li>Birth:</li>
                <li>Level:</li>
                <li>Name:</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
