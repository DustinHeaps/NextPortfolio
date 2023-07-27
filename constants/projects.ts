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
  {
    id: 2,
    title: "Airbnb Clone",
    image: "/assets/images/Airbnb.png",
    description: `A fullstack application that allows users to easily manage their listings and bookings. Guests can book properties directly through the app. Guests also can easily find properties that meet their needs using the advanced search engine.`,
    technologies: [
      "Next.JS 13",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    projectLink: "https://airbnb-clone-dustinheaps.vercel.app",
    githubLink: "https://github.com/DustinHeaps/AirbnbClone",
  },

  {
    id: 3,
    title: "The Pizza Co.",
    image: "/assets/images/pizza.png",
    description: `This react app allows guests to easily order pizza. Simply choose your pizza and put in your information and an option to make the order a priority. Use the search orders function to see how far away the pizza is.`,
    technologies: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    projectLink: "https://react-pizza-app-dustinheaps.vercel.app",
    githubLink: "https://github.com/DustinHeaps/PizzaApp",
  },
];
