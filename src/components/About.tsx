import { Brain, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 animate-scale-in">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                I'am   an AI & ML undergraduate passionate about building
                intelligent systems that tackle real-world challenges. My work
                focuses on{" "}
                <span className="text-primary font-semibold">
                  AI-driven medical imaging and automation
                </span>
                , where I design deep learning models for disease detection,
                segmentation, and analysis.
              </p>

              <p>
                With hands-on experience in developing{" "}
                <span className="text-accent font-semibold">
                  CNN and transformer-based models
                </span>
                , I have delivered impactful results in retinal disease
                classification and glaucoma segmentation. I am also skilled in{" "}
                <span className="text-accent font-semibold">
                  full-stack development
                </span>
                , building production-ready applications using modern
                frameworks.
              </p>

              <p>
                Currently exploring{" "}
                <span className="gradient-text font-semibold">
                  Emotional Intelligence and Generative AI
                </span>{" "}
                , I am constantly eager to learn new
                technologies and push the boundaries of what’s possible with AI.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-3 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Deep Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Medical imaging & Computer Vision
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl bg-accent/5 border border-accent/10">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Full-Stack Dev</h3>
                <p className="text-sm text-muted-foreground">
                  React, Node.js, MongoDB
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring Gen AI 
                </p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
