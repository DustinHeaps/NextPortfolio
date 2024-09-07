import { motion } from "framer-motion";
import Image from "next/image";

import { handleScroll } from "@/utils";
import Link from "next/link";
import logo from '@/public/assets';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='-ml-[6px]'
    >
      <Link onClick={handleScroll} href='#home'>
        <Image src={logo} alt='logo' priority={true} className='w-20 rounded-full' />
      </Link>
    </motion.div>
  );
};

export default Logo;
