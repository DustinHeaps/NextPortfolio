import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TestimonialProps } from "@/constants/testimonials";

interface TestimonialCardProps {
  testimonialData: TestimonialProps;
}

const TestimonialCard = ({ testimonialData }: TestimonialCardProps) => {
  const { from, testimonial, job } = testimonialData;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full h-80 rounded-lg bg-[#112240] px-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 relative group'
    >
      <div className='top-5 absolute'>
        <ImQuotesLeft className='text-textGreen ' />
      </div>
      <div className=' flex flex-col justify-center overflow-y-scroll scrollbar scrollbar-none h-full'>
        <h2 className='text-2xl font-titleFont font-semibold tracking-wide text-textLight'>
          {from}
        </h2>
        <p className='text-textDark text-xs font-linkFont'>{job}</p>
        <p className='text-paragraph  mt-3 overflow-y-clip'>{testimonial}</p>
      </div>
      <div className='bottom-6 right-6 absolute'>
        <ImQuotesRight className='text-textGreen' />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
