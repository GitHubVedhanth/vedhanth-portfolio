import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-primary/5 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quote */}
          <div className="text-center mb-8">
            <blockquote className="text-xl md:text-2xl font-semibold gradient-text italic">
              "The future belongs to those who build it with data."
            </blockquote>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/vedhanth-goje"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:border-primary/30"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vedhanth-goje"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:border-primary/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gojevedhanth@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-all hover:scale-110 hover:border-primary/30"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
           
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vedhanth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
