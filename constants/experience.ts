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
      "Skillfully designed and developed user-centric interfaces utilizing a sophisticated tech stack that includes HTML, CSS, React, Redux, TypeScript, and Angular. My efforts led to marked enhancements in user engagement and satisfaction, demonstrating a keen eye for aesthetic appeal and functional design.",
      "Played a pivotal role in team collaboration, effectively liaising between customers and the development team. Spearheaded the creation and prioritization of tasks derived from comprehensive requirements documentation and feature designs, ensuring a smooth and efficient workflow.",
      "Orchestrated the design and architecture of new features in close coordination with backend developers. This collaboration was instrumental in achieving seamless functionality and integration across platforms, contributing to a cohesive and intuitive user experience.",
      "Conducted in-depth testing and debugging processes, focusing on UI component functionality. This meticulous approach significantly reduced software bugs and propelled application performance, highlighting a dedication to quality and excellence in software development.",
    ],

    dates: "August 2019 - July 2023",
  },
];
