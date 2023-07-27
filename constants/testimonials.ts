export interface TestimonialProps {
  id: number;
  from: string;
  testimonial: string;
  job: string;
}

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    testimonial:
      "Dustin contributed to nearly every software development project that TxMQ delivered. His skill set has grown during that time, and he has a strong grasp of front-end web application development using Angular, React, and Ionic.",
    job: "TxMQ, Inc.",
    from: "Craig Drabik",
  },
  {
    id: 2,
    from: "Chuck Fried",
    testimonial:
      "I can’t speak highly enough of the creatvity, desire to go above and beyond, and the intelligence of Dustn Heaps. He demonstrated a true desire to take on any project we put in front of him.",
    job: "TxMQ, Inc.",
  },
];
