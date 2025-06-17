import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-1">
              {" "}
              Shreyas{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-2">
              {" "}
              Pujara{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-3">
            Frontend Developer Specializing in React, Tailwind CSS & JavaScript
            I build fast, responsive, and user-focused web interfaces with
            modern tech stacks. From component-based architectures in React to
            utility-first styling with Tailwind CSS, my work combines clean code
            with sleek design. Explore my projects to see how I turn ideas into
            dynamic digital experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center justify-center space-y-2 animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary " />
      </div>
    </section>
  );
};
