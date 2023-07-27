import { NavLinkProps } from "@/constants/navLinks";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkItemProps {
  navLink: NavLinkProps;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLinks = ({ navLink, handleScroll }: NavLinkItemProps) => {
  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <Link
          href={navLink.href}
          className='nav-links navigation-link'
          onClick={handleScroll}
        >
          {navLink.title}
        </Link>
      </motion.li>
    </>
  );
};

export default NavLinks;
