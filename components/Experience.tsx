"use client"

import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";;
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/constants";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const [workTxMQ, setWorkTxMQ] = useState(true);

  const handleWork = (work: string) => {
    setWorkTxMQ(false);
    if (work == "TxMQ") {
      setWorkTxMQ(true);
    }
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id='experience'
      className='wrapper-xs'
      ref={ref}
    >
      <SectionTitle title='Where I have worked' titleNo='02' />
      {experiences.map((experience) => {
        const { companyName, id } = experience;
        return (
          <motion.div
            key={id}
            initial='hidden'
            animate={controls}
            variants={animationVariants}
            transition={{ duration: 1.0, delay: 0.1 }}
            className='w-full mt-10 flex flex-col md:flex-row gap-16'
          >
            <ul className='md:w-32 flex flex-col'>
              <>
                <li
                  onClick={() => handleWork("TxMQ")}
                  className={` ${
                    workTxMQ
                      ? "border-l-textGreen text-textGreen"
                      : "border-l-hoverColor text-textDark"
                  } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8 font-medium tracking-wide`}
                >
                  {companyName}
                </li>
              </>
            </ul>
                 
            {workTxMQ && <ExperienceItem item={experience} />}
            
          </motion.div>
        );
      })}
    </section>
  );
};

export default Experience;
