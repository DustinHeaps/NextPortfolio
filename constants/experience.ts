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
      "Designed and developed user-friendly interfaces by leveraging HTML, CSS, React, Redux, Typescript, and Angular, resulting in improved user engagement and satisfaction",
      "Collaborated with the customer and team in creating and prioritizing tasks based on requirements documentation and feature design.",
      "Coordinated with backend developers to design and architect new features, ensuring seamless functionality and integration.",
      "Developed responsive web applications using modern frontend technologies such as flexbox, grid, and media queries ensuring cross-browser compatibility and web performance optimization.",
    ],

    dates: "August 2019 - July 2023",
  },
];
