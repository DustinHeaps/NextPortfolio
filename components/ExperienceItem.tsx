import { ExperienceProps } from "@/constants/experience";
import { motion } from "framer-motion";
import { RxDoubleArrowRight } from "react-icons/rx";

interface ExperienceItemProps {
  item: ExperienceProps;
}

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const { title, companyName, points, dates, id } = item;
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        {title}{" "}
        <span className='text-textGreen tracking-wide'>@{companyName}</span>
      </h3>
      <p className='text-sm my-2 font-medium text-textDark'>{dates}</p>
      <p className='mt-2 text-sm'>
        Leading UI efforts on enterprise web apps — with a focus on performance,
        accessibility, and modern tooling.
      </p>
      <ul className='mt-5 flex flex-col'>
        {points.map((point) => {
          return (
            <li key={point} className='text-paragraph flex gap-2 py-1 '>
              <span className='text-textGreen mt-1'>
                <RxDoubleArrowRight />{" "}
              </span>{" "}
              {point}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;
