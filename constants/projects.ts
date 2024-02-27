export interface ProjectProps {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "DevOverflow",
    image: "/assets/images/devoverflow.png",
    description: `An open forum dedicated to creating the ultimate compendium of programming queries and solutions. This collaborative venue serves as a hub for solving technical puzzles, contributed to and utilized by a global community. It ranks among the world's most frequented digital destinations for developers and tech enthusiasts`,
    technologies: [
      "NextJs 13",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "MongoDB",
    ],
    projectLink: "https://dev-overflow-beta.vercel.app/",
    githubLink: "https://github.com/DustinHeaps/DevOverflow",
  },
  {
    id: 2,
    title: "Vacations.com",
    image: "/assets/images/vacations.png",
    description: `Discover the perfect blend of comfort, convenience, and adventure with Vacations.com, the premier online destination for hotel bookings that transforms every trip into an unforgettable experience. Whether you're planning a serene getaway, a business trip, or a thrilling adventure, our extensive collection of accommodations ensures you find the perfect stay that caters to your every need.`,
    technologies: [
      "NextJs 14",
      "TypeScript",
      "Tailwind CSS",
      "Next-Auth",
      "Stripe",
    ],
    projectLink: "https://booking-app-ten-blush.vercel.app/",
    githubLink: "https://github.com/DustinHeaps/BookingApp",
  },
  {
    id: 3,
    title: "Cafe",
    image: "/assets/images/cafe.png",
    description: `Cafe is an Ecommerce app built with Next.JS 13 and using Swell for the management of products. Users can order a variety of options including subscriptions, standard box, bulk bags, as well as select coffee equipment.`,
    technologies: [
      "Next.JS 13",
      "Swell",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
    ],
    projectLink: "https://cafe-dustinheaps.vercel.app",
    githubLink: "https://github.com/DustinHeaps/Cafe",
  },
];
