"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Navbar(){
    const [clicked,setClick]=useState(false);
    function handleClick(){
        setClick(!clicked);
    }
    return(
        <>
        <button className="md:hidden absolute right-4 text-4xl text-orange-800" onClick={handleClick}>{!clicked?<IoMenu/>:<RxCross2/>}</button>
          <div className={`absolute md:relative duration-300 ${!clicked?"h-0":"h-56"} md:h-auto overflow-hidden w-full bg-white md:bg-transparent top-44 md:top-0 md:relative flex flex-col md:flex-row items-center md:justify-center md:space-x-6  font-sm`}>
            <nav className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-6 uppercase">
              <Link href="/" className="text-gray-700 hover:text-orange-900">Home</Link>
              <div className="text-gray-700 relative">
                      <>
                        <span className="flex  cursor-pointer items-center gap-x-2 --dropitemsmenmainnavbar">Events <IoIosArrowDown/></span>
                        <ul className="md:fixed h-0 overflow-hidden px-3 absolute top-26 text-center -ml-4 z-[10000] duration-300">
                          <li className="p-2 border hover:bg-gray-200 hover:text-orange-900 swalling  bg-white">Marriage</li>
                          <li className="p-2 border hover:bg-gray-200 hover:text-orange-900 swalling  bg-white">Pundal</li>
                          <li className="p-2 border hover:bg-gray-200 hover:text-orange-900 swalling  bg-white">EntryPoint</li>
                          <li className="p-2 border hover:bg-gray-200 hover:text-orange-900 swalling  bg-white">Rituals</li>
                        </ul>
                      </>
              </div>
              <Link href="/gallery" className="text-gray-700 hover:text-orange-900">Gallery</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-900 ">About</Link>
            </nav>
            <nav className="flex  flex-col items-center md:flex-row  space-y-2 md:space-y-0 md:space-x-6 uppercase">
              <Link href="/reviews" className="text-gray-700 hover:text-orange-900 ">Love Notes</Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-900 ">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-900 ">Contact</Link>
            </nav>
          </div>
        </>
    )
}