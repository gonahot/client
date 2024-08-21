'use client'

import Image from "next/image";
import Link from 'next/link'

import { useSignAndExecuteTransaction, useSuiClient,useSuiClientQuery } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';

import { useNetworkVariable } from "../networkConfig";
import { useState } from "react";

export default function Home() {
    const SUI_CLOCK =
    "0x0000000000000000000000000000000000000000000000000000000000000006";
    const counterPackageId = useNetworkVariable("counterPackageId");
    const suiClient = useSuiClient();
    const { mutate: signAndExecute } = useSignAndExecuteTransaction({
        execute: async ({ bytes, signature }) =>
          await suiClient.executeTransactionBlock({
            transactionBlock: bytes,
            signature,
            options: {
              showRawEffects: true,
              showEffects: true,
            },
          }),
      });	

    const [objectId,setObjectId] = useState("");
    const [mintSuccess,setMintSucess] = useState(false);
    const [isMinted,setIsMinted] = useState(false);

    const { data } = useSuiClientQuery("getObject", {
        id:'0xecda6ee308cdfb2ae27e26c8dd577caff8c463b8e12df154aab2089be359680d',
        options: {
          showContent: true,
          showOwner: true,
        },
      });

    function createUser(){
        const tx = new Transaction();
        tx.moveCall({
            target: `${counterPackageId}::stupet::create_user`,
            arguments:[],
        })
        signAndExecute(
            {
              transaction: tx,
            },
            {
              onSuccess: (result) => {
                const objectId = result.effects?.created?.[0]?.reference?.objectId;
                if (objectId) {
                  console.log(objectId)
                }
              },
            },
          );
    }
    function createFirst(){
        if( typeof data != 'undefined'){
            console.log("here is ",data.data)
        }
        
        if(!isMinted){
            createUser();
            let time = Number((new Date()).valueOf());
            const tx = new Transaction();
            tx.moveCall({
                target: `${counterPackageId}::stupet::create_pet`,
                arguments:[tx.pure.string('Basic'),tx.object(SUI_CLOCK)],
            })
            signAndExecute(
                {
                  transaction: tx,
                },
                {
                  onSuccess: (result) => {
                    const objectId = result.effects?.created?.[0]?.reference?.objectId;
                    if (objectId) {
                      setObjectId(objectId);
                      setMintSucess(true);
                      setIsMinted(true);
                    }
                  },
                },
              );
        }else{
            alert("you have minted!Each can mint only once")
        }
        
    }

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
                        <button onClick={()=>createFirst()} 
                        className="text-white hover:text-black hover:bg-white text-xl mt-5 border-2 border-white p-1 rounded-lg">
                            Mint your first pet
                        </button>
                    </div>
                    
                    <div className="text-2xl flex flex-col p-3 mt-18">
                        <div className="text-white text-7xl flex">
                            Adopt your first pet on Sui !
                        </div>
                        {mintSuccess?( <div className="p-3 bg-white border rounded-lg flex flex-col items-center justify-content w-2/3">
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
                            <p className="text-sm"> here is your pet {objectId}</p>
                            <button className="bg-[#E7E7E7] bordered rounded-md h-1/3 p-1">
                                <Link
                                    href="/pets"
                                >
                                    Continue
                                </Link>

                            </button>
                        </div>):(<></>)}
                       
                    </div>


                </div>


            </div>
        </main>
    );
}
