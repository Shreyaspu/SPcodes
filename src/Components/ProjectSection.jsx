import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1Image from "../assets/images/project1.png";
import project2Image from "../assets/images/project2.png";
import project3Image from "../assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: " Saas Landing Page ",
    description:
      "A modern tech company landing page designed for Togglesoft, showcasing a clean, gradient-driven UI with bold typography. It emphasizes speed and reliability with a minimal layout and a dynamic 3D graphic for visual appeal.",
    image: project1Image,
    tags: ["React", "TailwindCSS"],
    demoURL: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Fama Barbershop Website",
    description:
      "A responsive business website for Fama Barbershop. The design combines rich imagery with bold yellow accents to highlight key information like contact details, reviews, and service hours.",
    image: project2Image,
    tags: ["React", "TailwindCSS"],
    demoURL: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "NewsDog - News Portal",
    description:
      "A dynamic and content-rich news portal UI for NewsDog, focused on business and tech headlines. It features a card-based layout with clear publication sources, timestamps, and easy navigation. ",
    image: project3Image,
    tags: ["React", "TailwindCSS"],
    demoURL: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-14 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Each project was carefullly crafted with attention to
          detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xs shadow-lg overflow-hidden"
            >
              <div className=" h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" font-medium border text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center justify-center gap-2 mx-auto"
            href="https://github.com/Shreyaspu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chech My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
