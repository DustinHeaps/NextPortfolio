export interface NavLinkProps {
  id: number;
  href: string;
  title: string;
}

export const navLinks: NavLinkProps[] = [
  {
    id: 1,
    href: "#home",
    title: "Home",
  },
  {
    id: 2,
    href: "#about",
    title: "About",
  },
  {
    id: 3,
    href: "#experience",
    title: "Experience",
  },
  {
    id: 4,
    href: "#projects",
    title: "Projects",
  },
  {
    id: 5,
    href: "#contact",
    title: "Contact",
  },
];
