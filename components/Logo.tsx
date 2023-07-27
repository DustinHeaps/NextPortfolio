import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/assets";
import { handleScroll } from "@/utils";
import Link from "next/link";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='-ml-[6px]'
    >
      <Link onClick={handleScroll} href='#home'>
        <Image src={logo} alt='logo' className='w-20 rounded-full' />
      </Link>
    </motion.div>
  );
};

export default Logo;
