'use client'
import Image from "next/image";
import { useState } from "react"

export default function Exchange() {

    const img = window.localStorage.getItem("imgUrl")

    return (
        <>

            <div className="flex justify-between mt-5 h-40">
                <div className="hover:-translate-y-2 ml-10 rounded-lg w-full bg-white flex flex-col items-center justify-content mr-5">
                    <p className="text-black text-3xl mt-5"> </p>

                    <div>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={img || "/pets/exchange.png"}
                            alt="Logo"
                            width={180}
                            height={180}
                            priority
                        />
                    </div>
                </div>

            </div>



        </>
    )
}