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
      "Successfully reduced page load time by 25% and bolstered website performance by optimizing coding practices with Angular, React and TypeScript, leading to smoother site navigation and reduced waiting times for users",
      "Improved customer satisfaction ratings by 40%, as evidenced by customer feedback, by ensuring development tasks closely aligned with customer expectations and feature designs, leading to higher satisfaction with final products",
      "Reduced bug reports by 30% related to newly introduced features by ensuring thorough design and architecture planning in collaboration with backend development teams, leading to a more stable and reliable application",
      "Improved application performance metrics by 40%, as evidenced by faster response times and increased stability, achieved through a focused approach to UI testing, which led to a smoother user experience",
    ],

    dates: "August 2019 - July 2023",
  },
];
