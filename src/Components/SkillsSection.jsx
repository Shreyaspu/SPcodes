const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript/React", level: 90, category: "Frontend" },
  { name: "TailwindCSS", level: 85, category: "Frontend" },
  { name: "Bootstrap", level: 90, category: "Tools" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS code", level: 95, category: "Tools" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-14 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-15">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="p-6 bg-card rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold ">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] transition-all duration-500"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <p className="text-muted-foreground mt-2 text-right text-sm">
                {skill.level}% 
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
