
import { NavLinks } from "@/app/ui/Navlinks";
// import { useClickOption } from "../context/ClickContext";
import React from "react";
import SideNav from "./components/SideNav";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const clickOption = useClickOption();
  return (
    <div lang="en">
      <div>
        <NavLinks />
        <main className="bg-black">
          <div className="flex flex-row w-full min-h-screen">
            <div className="w-1/5 ml-10 mt-20 flex flex-col">
              <SideNav />
            </div>
            <div className="w-4/5 mt-20 flex flex-row h-96">
              {children}
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
