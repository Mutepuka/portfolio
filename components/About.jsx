"use client";
import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { client, urlFor } from '@libs/sanity';
import AppWrap from '@wrapper/AppWrap';

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((data)=>{
      setAbouts(data)
    }) 
  }, []);
  
  return (
   <>
   <h2 className='text-3xl text-gray-400 font-bold text-center mt-5'>I Know that <span className='text-orange-400'>Good Development</span><br/>means <span className='text-orange-400'>Good Business</span>
   </h2>
   
   <div className="app__profile">
    {abouts.map((about, index)=>(
      <motion.div
      whileInView={{opacity: 1}}
      whileHover={{ scale: 1.1}}
      transition={{ duration: 0.5 ,type: 'tween'}}
      className='app__profile-items'
      key={about.title+index}
      >
        <img src={urlFor(about.imgUrl)}
         alt={about.title}
         />
        <h2 className='font-bold text-lg mt-20'>{about.title}</h2>
        <p className='text-sm text-gray-500 mt-10'>{about.description}</p>

      </motion.div>
    ))}
   </div>
   </>
  )
}

export default AppWrap(About, 'about') ;