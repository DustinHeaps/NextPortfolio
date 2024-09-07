import SectionTitle from "./SectionTitle";
import Image from "next/image";

import Skills from "./Skills";
import { bioParagraphs, skills } from "@/constants";

const About = () => {
  return (
    <section id='about' className='wrapper-sm flex flex-col gap-8'>
      <SectionTitle title='About me' titleNo='01' />
      <div className='flex flex-col mdl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col'>
          <div className='[&>*:first-child]:mb-4'>
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.id}>
                {paragraph.text}
              </p>
            ))}
          </div>
          
          <h3 className='text-xl font-semibold font-titleFont text-textLight my-7 flex items-center'>
            Tech Skills
            <span className='w-24 md:w-1/5 ml-2 bg-gray-700 h-[.5px] inline-flex'></span>
          </h3>
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2'>
            {skills.map((skill) => {
              return <Skills key={skill.id} skill={skill} />;
            })}
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80  rounded-lg '>
            <div className='w-full h-full relative z-20 flex justify-center '>
              <Image
                width={380}
                height={380}
                src='/assets/images/profile.jpg'
                className='rounded-lg h-full object-cover'
                alt='Profile Pic'
              />
              {/* <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
