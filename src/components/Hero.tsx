import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/70 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDuration: "8s" }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDuration: "10s", animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDuration: "12s", animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group floating">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
              </div>
              
              {/* Glowing Background */}
              <div className="absolute -inset-4 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500" 
                   style={{ 
                     background: 'var(--profile-bg)',
                     filter: 'blur(20px)',
                     boxShadow: 'var(--image-glow)'
                   }} />
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="G. Vedhanth - AI & ML Engineer"
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-300 group-hover:scale-105"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-in">
              Hi, I'm <span className="inline-block animate-[wave_1s_ease-in-out_infinite]">👋</span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-shimmer">
              G. Vedhanth
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
            AI & ML Engineer | Computer Vision | Deep Learning Enthusiast
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "Building intelligent systems that <span className="text-primary font-semibold">see</span>, 
            <span className="text-accent font-semibold"> think</span>, and 
            <span className="text-primary font-semibold"> decide</span>."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-effect text-white font-semibold group"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://github.com/vedhanth-goje"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:rotate-12 hover:shadow-lg"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vedhanth-goje"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:rotate-12 hover:shadow-lg"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gojevedhanth@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:rotate-12 hover:shadow-lg"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
