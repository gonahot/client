'use client';
import Image from "next/image";
import Link from 'next/link'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react';
export default function Home() {

    let [isOpen, setIsOpen] = useState(false)


    return (
        <>
           {
            isOpen?(<></>):(<div className="bg-white border rounded-lg flex flex-col items-center justify-content w-2/3 p-2 mt-10">
            
            <div className="mt-20 flex flex-col justify-content items-center">
                <div className="text-3xl">
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
                <button className="bg-[#E7E7E7] bordered rounded-md p-1 mt-5 w-1/2"
                    onClick={() => setIsOpen(true)}
                >
                    Get
                </button>
            </div>

            

        </div>)
        }
        
        <Dialog  open={isOpen} onClose={() => setIsOpen(false)} className="rounded-md relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold text-2xl">
                            Get Sign-in Rewards
                        </DialogTitle>

                        <div className="flex flex-row mb-20">

                            <div className="flex justify-center items-center">
                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-8"
                                    src="/pets/star.png"
                                    alt="Base"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className="flex justify-center items-center">
                                <p className="text-2xl ml-5 mt-10">Your    Score    +2 !</p>
                            </div>

                        </div>

                        <div className="flex mt-20">
                            <button className="mt-5 border p-1 rounded-lg hover:bg-black hover:text-white">
                                <Link href="/pets">
                                Continue
                                </Link>
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
     
    );
}
