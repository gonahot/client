import Image from "next/image";
import Link from 'next/link'

export default function Home() {
    return (
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
    );
}
