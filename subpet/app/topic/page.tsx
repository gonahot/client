'use client'
import { quiz } from "../data/topic";
import { useState } from "react";
import { Description, DialogBackdrop,Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from "next/image";
export default function Home() {
  const [page, setPage] = useState(0);
  const [choice, setChoice] = useState('');
  const [isRight, setIsRight] = useState(false);

  function mark(page: number, choice: string) {
    if (quiz[page].answer == choice) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  }

  function nextPage() {
    let current = page;
    current++;
    setPage(current);
  }

  return (
    <>
      <main className="bg-black h-96 flex items-center justify-center overflow-hidden min-h-screen">
        <div className="w-3/4 bg-white rounded-lg">
          <div className="w-full px-4 bg-white flex flex-col mt-5">
            <div className="text-4xl">
              <p> {page + 1}. {quiz[page].question} </p>
            </div>

            <div className="flex flex-col items-start mt-5 ">
              <button
                onClick={() => mark(page, 'A')}
                className="w-2/3 text-2xl border hover:border-black p-2 rounded-lg hover:-translate-y-2 mt-2 text-start">
                A . {quiz[page].options.A}
              </button>
              <button
                onClick={() => mark(page, 'B')}
                className="w-2/3 text-2xl border hover:border-black p-2 rounded-lg hover:-translate-y-2 mt-2 text-start">
                B . {quiz[page].options.B}
              </button>
              <button
                onClick={() => mark(page, 'C')}
                className="w-2/3 text-2xl border hover:border-black p-2 rounded-lg hover:-translate-y-2 mt-2 text-start">
                C . {quiz[page].options.C}
              </button>
              <button
                onClick={() => mark(page, 'D')}
                className="w-2/3 text-2xl border hover:border-black p-2 rounded-lg hover:-translate-y-2 mt-2 text-start">
                D . {quiz[page].options.D}
              </button>
            </div>

            <div className="flex flex-row justify-end mt-5 mb-5 mr-5">
              <button onClick={() => nextPage()} className="mr-5 w-1/6 text-2xl border hover:bg-black hover:text-white p-2 rounded-lg mt-2 text-start">
                Skip
              </button>
              <button onClick={() => nextPage()} className="mr-5 w-1/6 text-2xl border hover:bg-black hover:text-white p-2 rounded-lg mt-2 text-start">
                Next
              </button>
            </div>
          </div>

        </div>

        <Dialog open={isRight} onClose={() => setIsRight(false)} className="border-black mt-10 z-50 rounded-md relative w-1/3">
        <div className="mt-10 fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="max-w-lg space-y-4 border border-black rounded-lg bg-white p-12">
            <DialogTitle className="font-bold text-2xl">
              Get Sign-in Rewards
            </DialogTitle>

            <div className="flex flex-row mb-20">

              <div className="flex justify-center items-center">
                <img
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert items-center justify-content mt-8"
                    src={"/pets/star.png"}
                  alt="Base"
                  width={50}
                  height={50}
                 
                />
              </div>

              <div className="flex justify-center items-center">
                <p className="text-2xl ml-5 mt-10">Your    Score    +5 !</p>
              </div>

            </div>

            <div className="flex mt-20">
              <button onClick={()=>setIsRight(false)} className="mt-5 border border-2 p-1 rounded-lg hover:bg-black hover:text-white">
                  Continue
              </button>
            </div>
          </DialogPanel>
        </div>
        </Dialog>
      </main>
      
    </>


  );
}
