import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    titleNo: string;
}

const SectionTitle = ({title, titleNo} : SectionTitleProps) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.1}}>
        <h2 className='section-title'>
            <span className='section-subtitle'>{titleNo}. </span>
            {title}
            <span className='section-text'></span>
        </h2>
    </motion.div>
  )
}

export default SectionTitle;