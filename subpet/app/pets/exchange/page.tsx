'use client'
import Image from "next/image";
import { useState } from "react"
import { useCurrentAccount, useSignAndExecuteTransaction, useSuiClient,useSuiClientQuery } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useNetworkVariable } from "../../networkConfig";


export default function Exchange() {

    const counterPackageId = useNetworkVariable("counterPackageId");

	const suiClient = useSuiClient();
    const account = useCurrentAccount();
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

    function mintItem(type:number){
        const tx = new Transaction();
		tx.moveCall({
			target: `${counterPackageId}::stupet::mint_item`,
			arguments: [tx.pure.address(String(account?.address)),tx.pure.u64(type)],
		});
		signAndExecute(
			{
				transaction: tx,
			},
			{
				onSuccess: (result) => {
					const objectId = result.effects?.created?.[0]?.reference?.objectId;
					if (objectId) {
						console.log(objectId);
					}
				},
			}
		);
    }
    

    let [isChoose, setIsChoose] = useState(false);

    let [choice,setChoice] = useState("");

    function choose(choice:string,type:number){
        mintItem(type);
        setIsChoose(true);
        setChoice(choice);
    }


    return (
        <>
            {isChoose ? (
                <>
                    <div className="rounded-lg bg-white flex flex-row h-96">
                        <div className="w-1/3 text-6xl mt-20 ml-5 h-full">
                            <p >
                                Congratulation!
                            </p>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/logo.gif"
                                alt="Logo"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                        <div className="w-1/2 flex flex-col mt-20">
                            <div className="ml-20 mt-10 text-4xl ">
                                you got one  {choice}
                                , Let your pet wear it!
                            </div>

                            <div className="ml-20 mt-10 flex justify-between w-1/3">
                                <button className="rounded-lg bg-black text-white text-2xl p-2">
                                    RightNow
                                </button>
                                <button className="rounded-lg bg-black text-white text-2xl p-2">
                                    Later
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-2xl flex flex-col p-3 mt-18">
                        <div className="text-white text-7xl flex">
                            you got one {choice}, Let your pet wear it!
                        </div>
                    </div>
                </>
            ) : (<div className="w-full h-full p-3 bg-white border rounded-lg flex flex-col items-center justify-content">
                <div className=" text-3xl">Get what you want !</div>

                <div className="flex justify-between mt-5">
                    <div className="hover:-translate-y-2 ml-10 rounded-lg w-1/3 bg-black flex flex-col items-center justify-content mr-5"
                    onClick={()=>{choose('action',2)}}
                    >
                        <p className="text-white text-3xl mt-5">
                            action
                        </p>

                        <div>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/pets/exchange.png"
                                alt="Logo"
                                width={180}
                                height={180}
                                priority
                            />
                        </div>
                    </div>
                    <div onClick={()=>{choose('cloth',2)}} className="hover:-translate-y-2 rounded-lg w-1/3 bg-black flex flex-col items-center justify-content mr-5">
                        <p className="text-white text-3xl mt-5">
                            cloth
                        </p>
                        <div>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/pets/exchange.png"
                                alt="Logo"
                                width={180}
                                height={180}
                                priority
                            />
                        </div>
                    </div>
                    <div onClick={()=>{choose('cap',1)}} className="hover:-translate-y-2 rounded-lg w-1/3 bg-black flex flex-col items-center justify-content mr-5">
                        <p className="text-white text-3xl mt-5">
                            cap
                        </p>

                        <div>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/pets/exchange.png"
                                alt="Logo"
                                width={180}
                                height={180}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <p className="text-3xl mt-5">
                    your score will -10 !
                </p>

            </div>)}

        </>
    )
}