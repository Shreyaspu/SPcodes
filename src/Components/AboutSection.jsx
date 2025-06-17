import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-14 relative">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-15">
          About
          <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I am a passionate web developer with a keen interest in creating
              innovative and user-friendly web applications. My journey in tech
              has been driven by a love for problem-solving and a desire to make
              technology accessible to everyone.
            </p>
            <p className="text-muted-foreground">
              With a background in computer science and hands-on experience in
              various web technologies, I strive to build solutions that not
              only meet user needs but also push the boundaries of what is
              possible on the web.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Crafting responsive and dynamic web applications using
                    modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building seamless and fast user interfaces with React, Tailwind CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Project Experience & Real-World Solutions
                  </h4>
                  <p className="text-muted-foreground">
                    Developed real-world solutions that prioritize performance, accessibility, and user needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
