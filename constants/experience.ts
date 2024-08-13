export interface ExperienceProps {
  id: 1;
  title: string;
  companyName: string;
  points: string[];
  dates: string;
}

export const experiences: ExperienceProps[] = [
  {
    id: 1,
    companyName: "TxMQ, Inc.",
    title: "UI Developer",
    points: [
      "Developed dynamic, responsive web applications using ReactJS and AngularJS, enhancing UI and UX to improve customer satisfaction.",
      "Conducted thorough testing and debugging to optimize performance, leading to a 30% increase in site speed and user experience.",
      "Spearheaded the migration of legacy codebases to modern JavaScript frameworks, improving application scalability and maintainability.",
      "Implemented automated testing using Jest and Playwright, reducing production bugs by 50%.",
      "Enhanced SEO and accessibility standards, resulting in a 25% increase in organic traffic."

    ],

    dates: "August 2019 - July 2024",
  },
];
