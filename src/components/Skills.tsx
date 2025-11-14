const skills = {
  "Programming": ["Python", "JavaScript", "Java", "SQL"],
  "ML/DL Frameworks": ["TensorFlow", "PyTorch", "Keras", "scikit-learn"],
  "Data & Analysis": ["NumPy", "pandas", "Matplotlib", "Seaborn"],
  "Web Development": ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Databases": ["MongoDB", "MySQL", ],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Streamlit", "Flask", ],
  "Others": ["OpenCV", "REST APIs", "JWT Auth", "Socket.io", "Cloudinary"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-primary/10 text-foreground rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="mt-12 glass-card rounded-xl p-8 border border-accent/20 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-2">
              <span>🚀</span> Currently Exploring
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Emotional Intelligence", "Generative AI", "Healthcare AI Applications"].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-full border border-accent/30 font-medium hover:scale-105 transition-transform"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
