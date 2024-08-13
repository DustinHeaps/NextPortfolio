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
      "Assisted in the development of dynamic web applications using React and AngularJS, enhancing user interface responsiveness.",
      "Conducted performance audits and optimized websites, leading to a 30% improvement in site speed and user experience.",
      "Implemented automated testing using Jest and Playwright, reducing bugs in production by 50%.",
      "Spearheaded the migration of legacy codebase to modern JavaScript frameworks, improving application performance and maintainability.",
    ],

    dates: "August 2019 - July 2024",
  },
];
