'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Exchange() {
    const [img, setImg] = useState<string | null>(null);

    useEffect(() => {
        // 检查 window 是否存在并获取 localStorage 中的图片 URL
        if (typeof window !== "undefined") {
            const imgUrl = window.localStorage.getItem("imgUrl");
            setImg(imgUrl);
        }
    }, []);

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
    );
}
