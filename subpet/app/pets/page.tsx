"use client";
import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {usePetData} from '../context/PetDataContext';
import { Transaction } from "@mysten/sui/transactions";
import { useNetworkVariable } from "../networkConfig";
import { useAccounts } from "@mysten/dapp-kit";

export default function Home() {
  const { petData, setPetData } = usePetData();
  const [imgUrl, setImgUrl] = useState("");
  const accounts = useAccounts();
  const counterPackageId = useNetworkVariable("counterPackageId");
  // const { isWalletConnected, connecting } = useWalletContext();

  useEffect(() => {
    setImgUrl(window.localStorage.getItem("imgUrl") || "/base.gif");
  }, [imgUrl, accounts]);


  const petInfo = "YOU DON'T HAVE PETS";

  return (
    <>
          <div className="w-3/4">
            <div className="text-2xl flex flex-col h-full">
              <div className="p-3 bg-white border rounded-lg flex flex-col w-2/3 items-center justify-content ">
              { petData.name != "" ? (
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-20"
                  src={imgUrl || "/base.gif"}
                  alt="Base"
                  width={300}
                  height={300}
                  priority
                />
                ):(
                <div className="mb-80">{petInfo}</div>
                ) 
                }
               
              </div>
          <p>hhhh</p>
            </div>
          </div>

          <div className="w-1/4 flex flex-col -ml-40">
            <div className="text-3xl bg-white rounded-md w-full">
              Pets Information
            </div>

            <div className="text-3xl mt-3 bg-white rounded-md h-96 w-full p-3">
              { petData.name != "" ? (<ul>
                <li>Name:  {petData.name }</li>
                <li>Birth:  {petData.birthdate }</li>
                <li>Level:  {petData.grade_level }</li>
              </ul>):(
                <h2>{petInfo}</h2>
                ) 
                }
              
            </div>
          </div> 
    </>
 
  );
}
function useWalletContext(): { isWalletConnected: any; connecting: any; } {
  throw new Error("Function not implemented.");
}

