"use client";

import { useState, useEffect } from "react";
import AppWrap from "@wrapper/AppWrap";
import { motion } from "framer-motion";
import { client, urlFor } from '@libs/sanity';
import Image from "next/image";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {

    //query to fetch all your works
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data)=>{
      setWorks(data)
      setFilterWorks(data)
    });
  }, [])
  

  const handleClick= (item)=>{
    //console.log(item)
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='text-3xl text-gray-400 font-bold text-center mt-5'>My Creative <span className='text-orange-400'>Portfolio</span><br/> <span className='text-orange-400'>Section</span>
   </h2>
   <div className="flex flex-row itesm-center justify-start flex-wrap mt-4 md:mt-8">
    {['UI/UX','Mobile App','Web App','NextJs','React Native','All'].map((item, index)=>(
      <div
      key={index}
      onClick={()=> handleClick(item)}
      className={`flex py-2 px-4 bg-white rounded-lg font-extrabold cursor-pointer transition-all m-2 hover:bg-orange-500 hover:text-white text-sm text-gray-500 ${activeFilter === item ? 'bg-orange-500 text-gray-500':''}`}
      >
        {item}

      </div>
    ))}
   </div>
   <motion.div
   animate={animateCard}
   transition={{duration: 0.5, delayChildren: 0.5}}
   className="flex flex-wrap items-center justify-center"
   >
    {filterWorks.map((work, index)=>(
      <div key={index} className="flex item-center justify-center flex-col w-72 m-8 p-4 rounded-lg bg-white sm:bg-white cursor-pointer transition-all">
        <div className="flex items-center justify-center w-full h-60 relative">
          <Image
          src={urlFor(work.imgUrl).url()}
          alt={work.title}
          width={300}
          height={300}
          className="object-cover object-center rounded-lg"
          />
          <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover flex items-center justify-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="bg-black-500 flex items-center justify-center text-white bg-slade-950/[.5] m-2 font-extrabold cursor-pointer transition-all"
                  >
                    <AiFillEye className="w-full h-full text-white"/>

                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center"
                  >
                    <AiFillGithub className="w-full h-full text-white"/>
                  </motion.div>
                </a>
              </motion.div>
        </div>
        <div className="relative flex-col w-full p-1 flex items-center justify-center">
          <h4 className="font-bold mt-2.5 ">{work.title}</h4>
          <p className="text-sm text-gray-500 mt-2.5">{work.description}</p>
          <div className="absolute py-2 px-4 bg-white flex items-center justify-center" style={{top: -25}}>
                <p className="text-sm text-gray-500">{work.tags[0]}</p>
              </div>
        </div>
      </div>
    ))}

   </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work') ;