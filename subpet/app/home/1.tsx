"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useSignAndExecuteTransaction, useSuiClient, useSuiClientQuery } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useNetworkVariable } from "../networkConfig";
import { usePetData } from "../context/PetDataContext";
import { timestampToDateTime } from "../utils/index";

export default function Home() {
  const SUI_CLOCK = "0x0000000000000000000000000000000000000000000000000000000000000006";
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

  const [objectId, setObjectId] = useState("");
  const [mintSuccess, setMintSucess] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const { petData, setPetData } = usePetData();
  const { data } = useSuiClientQuery("getObject", {
    id: objectId || "",
    options: {
      showContent: true,
      showOwner: true,
    },
  });

  useEffect(() => {
    if (data != undefined) {
      console.log("data:", data);
    }
  }, [isMinted]);

  function createUser() {
    return new Promise((resolve, reject) => {
      const tx = new Transaction();
      tx.moveCall({
        target: `${counterPackageId}::stupet::create_user`,
        arguments: [],
      });
      signAndExecute(
        {
          transaction: tx,
        },
        {
          onSuccess: (result) => {
            const objectId = result.effects?.created?.[0]?.reference?.objectId;
            if (objectId) {
              console.log('user', objectId);
              if (typeof window !== "undefined") {
                window.localStorage.setItem("user", objectId);
              }
              resolve(objectId); // 成功时解析 Promise
            } else {
              reject(new Error("User object ID not found in the result"));
            }
          },
          onError: (error) => {
            console.log("error", error);
            alert(error);
            // reject(error); // 失败时拒绝 Promise
          },
        }
      );
    });
  }

  async function createFirst() {
    if (isMinted) {
      setPetData({
        // @ts-ignore
        name: data.data?.content?.fields.name,
        // @ts-ignore
        birthdate: timestampToDateTime(Number(data.data?.content?.fields.birthdate)),
        // @ts-ignore
        grade_level: data.data?.content?.fields.grade_level,
        // @ts-ignore
        url: (data.data?.content?.fields.url).toString(),
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("petInfo", JSON.stringify(petData));
      }
    }

    if (!isMinted) {
      await createUser();
      let time = Number(new Date().valueOf());
      const tx = new Transaction();
      tx.moveCall({
        target: `${counterPackageId}::stupet::create_pet`,
        arguments: [tx.pure.string("Basic"), tx.object(SUI_CLOCK)],
      });
      signAndExecute(
        {
          transaction: tx,
        },
        {
          onSuccess: (result) => {
            const objectId = result.effects?.created?.[0]?.reference?.objectId;
            console.log("objectId: ", objectId);
            if (objectId) {
              if (typeof window !== "undefined") {
                window.localStorage.setItem("pet", objectId);
                window.localStorage.setItem("mintSuccess", objectId);
              }
              setObjectId(objectId);
              setIsMinted(true);
            }
          },
        }
      );
    } else {
           alert("You have already minted your first pet!");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPet = window.localStorage.getItem("pet");
      if (storedPet) {
        setIsMinted(true);
        setObjectId(storedPet);
      }
    }
  }, []);

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to SubPet!</h1>
        <p className="mt-4 text-lg">Adopt your first pet on Sui!</p>
      </div>
      <div className="mt-10 flex justify-center">
        {typeof window !== "undefined" && window.localStorage.getItem("pet") != null ? (
          <div className="p-3 bg-white border rounded-lg flex flex-col items-center justify-content w-2/3">
            <div className="text-3xl">Congratulations!</div>
            <Image
              src={petData.url}
              alt="Pet Image"
              width={200}
              height={200}
              className="mt-4"
            />
            <div className="mt-4">
              <p>Name: {petData.name}</p>
              <p>Birthdate: {petData.birthdate}</p>
              <p>Grade Level: {petData.grade_level}</p>
            </div>
          </div>
        ) : (
          <button
            onClick={createFirst}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Mint Your First Pet
          </button>
        )}
      </div>
    </div>
  );
}