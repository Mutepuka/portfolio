"use client";

import React from 'react';
import {motion} from 'framer-motion';
import { images } from '@models';
import Image from 'next/image';
import AppWrap from '@wrapper/AppWrap';

const scaleVariant = {
    whileInView:{
        scale:[0,1],
        opacity: [0,1],
        transition:{
            duration: 1, 
            ease: 'easeInOut'
        }
    }
}


const Header = () => {
  return (
    <div className='app__header app__flex'>
        <motion.div
        whileInView={{ x: [-100,0], opacity:[0,1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
        >
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>👋</span>
                    <div className='app__header-txt mx-20'>
                        <p className='text-sm text-gray-500'>Hello, I am</p>
                        <h1 className='text-3xl font-semibold'>Musonda</h1>
                    </div>
                </div>
                <div className='tag-cmp app__flex'>
                    <p className='text-sm text-gray-500 font-semibold'>Web Developer and Software Engineer</p>
                    <p className='text-sm text-gray-500 font-semibold'>Freelancer</p>
                </div>

            </div>

        </motion.div>
        <motion.div
         whileInView={{ opacity:[0,1]}}
         transition={{duration: 0.5, delayChildren: 0.5}}
         className='app__header-img'
        >
            <img
           src='/assets/images/nextjs-icon-dark-background.png'
           alt="Picture of Developer"
           
            />
            <motion.img
            whileInView={{ scale:[0,1]}}
            transition={{duration: 1, ease: 'easeInOut'}}
            src='/assets/images/circle.svg'
            alt='circle_profile'
            className='overlay_circle'
            />
        </motion.div>
        <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className='app__header-circles'
        >
            {[images.python, images.react, images.sass, images.html].map((icon, index)=>(
                <div className='circle-cmp app__flex' key={`icon-${index}`}>
                    <Image src={icon} alt='icon'/>

                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home') ;