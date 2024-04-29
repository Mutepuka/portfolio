"use client";

import AppWrap from "@wrapper/AppWrap";
import MotionWrap from "@wrapper/MotionWrap";
import { useState, useEffect } from "react";
import {Tooltip} from 'react-tooltip';
import { motion } from 'framer-motion';
import { client, urlFor } from '@libs/sanity';
import Image from "next/image";


const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {

    //query to fetch all the skills and experiences
    const squery = `*[_type == "skills"]`;
    const equery = `*[_type == "experiences"]`;

    client.fetch(squery).then((data)=>{
      setSkills(data)
    })
    client.fetch(equery).then((data)=>{
      setExperiences(data)
      
    })
  }, [])
  
  return (
    <>
      <h2 className="text-3xl text-gray-500 font-semibold">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill)=>(
            <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            key={skill.name}
            className="flex items-center justify-center app__skills-item"
            >
              <div className="flex items-center justify-center">
                <Image
                src={urlFor(skill.icon).url()}
                width={200}
                height={200}
                alt={skill.name}
                className=""
                 />

              </div>
              <p className="text-sm text-gray-500 text-semibold mt-1">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience)=>(
            <motion.div
            className="app__skills-exp-item"
            key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="text-md text-gray-500 font-bold">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work)=>(
                  <>
                  <motion.div
                  whileInView={{opacity: [0,1]}}
                  transition={{duration: 0.5}}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                  >
                    <h4 data-tooltip-id={work.name} data-tooltip-content={work.desc} className="text-md text-gray-500 font-bold">{work.name}</h4>
                    <p className="text-sm text-gray-500 font-semibold">{work.company}</p>

                  </motion.div>
                  <Tooltip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                  />
                  </>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);