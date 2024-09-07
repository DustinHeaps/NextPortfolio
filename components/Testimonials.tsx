import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants";

const Testimonioals = () => {

  return (
    <section id='testimonials' className='wrapper-sm'>
      <SectionTitle title='What others have said' titleNo='04' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'
      >
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonial.id}
              testimonialData={testimonial}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Testimonioals;
