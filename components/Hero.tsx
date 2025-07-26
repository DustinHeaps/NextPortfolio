import { motion } from "framer-motion";
import { handleScroll } from "@/utils";
import { heroText } from "@/constants";

const Hero = () => {
  return (
    <section
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg font-titleFont tracking-wide text-textGreen'
      >
        {/* Hi, my name is */}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
      >
        👋 Hi, I’m Dustin Heaps.
        <span className='text-textDark mt-2 lgl:mt-4'>
        I build fast, modern web apps — and never stop shipping.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-paragraph leading-6 md:max-w-[750px]'
      >
        {heroText}
      </motion.p>
      <motion.a
        onClick={handleScroll}
        href='#contact'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className='btn-get-in-touch flex items-center justify-center cursor-pointer'
      >
       Let’s Work Together
      </motion.a>
    </section>
  );
};

export default Hero;
