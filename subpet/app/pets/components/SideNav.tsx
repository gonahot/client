import Link from "next/link";
import Image from "next/image";
export default function SideNav() {
    
    return (
      <>
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
            <button className="w-1/2 bg-white text-lg border-2 border-white rounded-lg">
              <Link href="/pets/signin">Sign in</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full mt-6">
          <div className="w-1/4">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/pets/exchange.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            />
          </div>
          <div className="w-3/4">
            <button className="w-1/2 bg-white text-lg border-2 border-white rounded-lg">
              <Link href="/pets/exchange">Exchange</Link>
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
              <Link href="/pets/accessories">Accessories</Link>
            </button>
          </div>
        </div>
      </>
    );
}