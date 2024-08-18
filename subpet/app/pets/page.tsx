"use client"
import { Sign } from "crypto";
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";

export default function Home() {

    const [isSign, setIsSign] = useState(false)

    function SignIn() {
        alert("确认登录？");
        setIsSign(true);
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
                            <button className="w-1/2 bg-white text-lg border-2 border-white rounded-lg"
                                onClick={() => SignIn()}>
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

                <div className="w-4/5 mt-20 flex flex-row h-96">
                    <div className="w-3/4">
                        <div className="text-2xl flex flex-col h-full">
                            <div className="p-3 bg-white border rounded-lg flex flex-col w-2/3 items-center justify-content h-full">
                                {
                                    isSign ? (
                                        <div className="border rounded-lg flex flex-col items-center justify-content w-2/3 p-2 mt-10">

                                            <div className=" text-3xl">
                                                Get Sign-in Rewards
                                            </div>
                                            <Image
                                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-8"
                                                src="/pets/gift.png"
                                                alt="Base"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                            <button className="bg-[#E7E7E7] bordered rounded-md p-1 mt-5 w-1/2">
                                                Get
                                            </button>
                                        </div>
                                    ) : (<Image
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-20"
                                        src="/base.gif"
                                        alt="Base"
                                        width={900}
                                        height={900}
                                        priority
                                    />)
                                }


                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col -ml-40">
                        <div className="text-3xl bg-white rounded-md w-full">
                            Pets Information
                        </div>

                        <div className="text-3xl mt-3 bg-white rounded-md h-96 w-full">
                            Pets Information
                        </div>
                    </div>

                </div>


            </div>
        </main>
    );
}
