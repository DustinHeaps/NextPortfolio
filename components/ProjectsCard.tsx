import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    projectLink: string;
    githubLink: string;
  };
}

const ProjectsCard = ({ project }: ProjectCardProps) => {
  const { title, image, description, technologies, projectLink, githubLink } =
    project;
  return (
    <div className='flex flex-col justify-center lg:flex-row [&>*:nth-child(even)]:even:items-start lg:[&>*:nth-child(even)]:odd:text-right lg:even:flex-row-reverse gap-6 '>
      <a href={projectLink} target="_blank" className='w-full xl:w-1/2 h-auto group'>
        <div className='relative'>
          <Image
            width={500}
            height={500}
            src={image}
            className='w-full h-full'
            alt={`${title} Image`}
          />
          <div className=' opacity-0 lg:opacity-100 absolute w-full h-full top-0 left-0  duration-300'></div>
        </div>
      </a>
      <div className=' w-full xl:w-1/2 flex flex-col items-start gap-6 lgl:justify-between lg:items-end  z-10'>
        <div className='target'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>
            Featured Project
          </p>
          <h3 className='text-2xl font-bold'>
            <Link href={projectLink} target='_blank'>
              {title}
            </Link>
          </h3>
        </div>
        <div className='lg:w-[115%] flex lg:flex-end p-4 bg-[#112240] rounded-md'>
          <p className='text-paragraph leading-6 '>{description}</p>
        </div>

        <ul className='text-xs md:text-sm font-linkFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
          {technologies.map((technology) => {
            return <li key={technology}>{technology}</li>;
          })}
        </ul>
        <div className='text-2xl flex gap-4'>
          <a
            href={githubLink}
            aria-label='github link'
            target='_blank'
            className='hover:text-textGreen duration-300'
          >
            <FaGithub />
          </a>
          <a
            href={projectLink}
            aria-label='project link'
            target='_blank'
            className='hover:text-textGreen duration-300'
          >
            <MdOutlineOpenInNew />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
