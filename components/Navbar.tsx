"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks, resumeLink } from "@/constants";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { handleScroll } from "@/utils";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <div className='w-full bg-bodyColor shadow-navbarShadow sticky h-20 lg:h-[12vh] top-0 z-50 px-4'>
      {/* top-0 along with sticky makes it sticky */}
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <Logo />
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-[16px] gap-7'>
            {navLinks.map((navLink) => {
              return (
                <NavLinks
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
        </div>

        {/* Small icon design */}
        <div
          onClick={() => setshowMobileMenu(true)}
          className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
        >
          <span className='mobile-menu group-hover:translate-x-2 '></span>
          <span className='mobile-menu group-hover:translate-x-3 '></span>
          <span className='mobile-menu group-hover:translate-x-1 '></span>
        </div>

        {showMobileMenu && <MobileMenu setshowMobileMenu={setshowMobileMenu} />}
      </div>
    </div>
  );
};

export default Navbar;
