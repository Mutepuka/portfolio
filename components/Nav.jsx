"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";
const Nav = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h3 className="text-lg font-semibold text-gray-500">Musonda Makena</h3>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonials','contacts'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="flex-col font-semibold uppercase transition-all text-gray-500 hover:text-orange-500">{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle((prev)=> !prev)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'testimonials','contacts'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="flex-col font-semibold uppercase transition-all text-gray-500 hover:text-orange-500" onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Nav