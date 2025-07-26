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
      "Developed fast, responsive web applications using React.js and AngularJS – improving UI/UX and customer satisfaction.",
      "Built internal tools and dashboards to streamline business operations and data visibility.",
      "Migrated legacy apps to modern React/TypeScript stacks, improving performance and maintainability.",
      "Led SEO and accessibility improvements, resulting in a 25% boost in organic traffic and better Lighthouse scores.",
      "Integrated testing workflows using Jest and Playwright, reducing production bugs by 50%.",
      "Collaborated cross-functionally to deliver scalable web solutions aligned with business goals.",
      "Introduced SaaS-style components (auth, file uploads, dashboards) into internal apps using modern tools like Clerk and UploadThing."

    ],

    dates: "August 2019 - Present",
  },
];
