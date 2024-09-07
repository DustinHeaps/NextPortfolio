import { NavLinkProps } from '@/constants/navLinks';
import { motion } from 'framer-motion';
import Link from "next/link";

interface MobileMenuProps {
  navLink: NavLinkProps;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MobileMenuLinks = ({ navLink, handleScroll }: MobileMenuProps) => {
  return (
    <Link
      href={navLink.href}
      className='mobile-nav-links navigation-link'
      onClick={handleScroll}
    >
      <motion.li
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
      >
        {navLink.title}
      </motion.li>
    </Link>
  );
};

export default MobileMenuLinks