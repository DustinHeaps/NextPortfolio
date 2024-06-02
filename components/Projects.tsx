import { projects } from "@/constants";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id='projects'
      className='wrapper-sm'
    >
      <SectionTitle title='Some things I have built' titleNo='03' />
      <div id='efrfr' className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
