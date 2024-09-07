import { resumeLink } from "@/constants";
import { navLinks } from "@/constants/navLinks";
import { handleScroll } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { MdOutlineClose } from "react-icons/md";
import MobileMenuLinks from "./MobileMenuLinks";
import SocialIcons from './SocialIcons';

interface MobileMenuProps {
  setshowMobileMenu: Dispatch<SetStateAction<boolean>>;
}
const MobileMenu = ({ setshowMobileMenu }: MobileMenuProps) => {
  return (
    <div
      onClick={() => setshowMobileMenu(false)}
      className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className='w-[80%] bg-[#112240] h-full overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative'
      >
        <MdOutlineClose
          onClick={() => setshowMobileMenu(false)}
          className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
        />
        <div className='flex flex-col gap-9 items-center my-auto'>
          <ul className='flex flex-col items-center text-base gap-9'>
            {navLinks.map((navLink) => {
              return (
                <MobileMenuLinks
                  key={navLink.id}
                  navLink={navLink}
                  handleScroll={handleScroll}
                />
              );
            })}
          </ul>
          <Link href={resumeLink} target='_blank'>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </Link>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
            className='flex gap-4'
          >
            <SocialIcons />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
