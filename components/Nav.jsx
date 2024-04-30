"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import {Sheet,SheetClose,SheetContent,SheetHeader,SheetTitle,} from "@/components/ui/sheet";

//links array
const links = [
  {name: 'home'},
  {name: 'about'},
  {name: 'work'},
  {name: 'skills'},
  {name: 'testimonial'},
  {name:'contacts'}
]
const Nav = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h3 className="text-lg font-semibold text-gray-500">Musonda Makena</h3>
      </div>
      <ul className="app__navbar-links hidden lg:flex">
        {['home', 'about', 'work', 'skills', 'testimonials','contacts'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="flex-col font-semibold uppercase transition-all text-gray-500 hover:text-orange-500">{item}</a>
          </li>
        ))}
      </ul>

      <div className="divide-x rounded-full bg-orange-500 p-2 text-white flex lg:hidden cursor-pointer">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <Sheet open={toggle} onOpenChange={()=> setToggle(false)}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-end items-end p-4 fixed">
        <ul className="h-full w-full flex justify-start items-start flex-col">
              {['home', 'about', 'work', 'skills', 'testimonials','contacts'].map((item) => (
                <li key={item} className="m-4">
                  <a href={`#${item}`} className="flex-col font-semibold uppercase transition-all text-gray-500 hover:text-orange-500" onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
        </div>
        
      </SheetContent>
    </Sheet>
          
      
        
      </div>
    </nav>
  )
}

export default Nav