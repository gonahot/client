import Image from "next/image";
import Link from 'next/link'

export default function Home() {
    return (
        <main className="bg-black">
            <div className="flex flex-row w-full min-h-screen">
                <div className="w-1/4 ml-20 mt-20 flex flex-col">
                    <div className="text-white text-3xl flex justify-center items-center">
                        Introduction
                    </div>
                    <div className="bg-white h-80 text-2xl flex justify-center items-center p-3 mt-5">
                        Our product is a growth-oriented pet with NFT overlay
                        as its core technology. By interacting with the pet,
                        you can earn points to purchase clothing! If you want
                        your pet to accompany your life, welcome to SuiPet!
                    </div>
                </div>

                <div className="w-3/4 ml-20 mt-20 flex flex-row">
                    <div className="flex flex-col justify-content items-center mr-10">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-36"
                            src="/logo.gif"
                            alt="Logo"
                            width={300}
                            height={300}
                            priority
                        />
                        <button className="text-white text-xl mt-5 border-2 border-white p-1 rounded-lg">
                            Mint your first pet
                        </button>
                    </div>
                    <div className="text-2xl flex flex-col p-3 mt-18">
                        <div className="text-white text-7xl flex">
                            Adopt your first pet on Sui !
                        </div>
                        <div className="p-3 bg-white border rounded-lg flex flex-col items-center justify-content w-2/3">
                            <div className=" text-3xl">
                                Congratulations !
                            </div>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-8"
                                src="/base.gif"
                                alt="Base"
                                width={200}
                                height={200}
                                priority
                            />
                            <button className="bg-[#E7E7E7] bordered rounded-md h-1/3 p-1">
                            <Link
                        href="/pets"
                    >
                        Continue
                    </Link>
                                
                                </button>
                        </div>
                    </div>


                </div>


            </div>
        </main>
    );
}
