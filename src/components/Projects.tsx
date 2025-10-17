import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Eye, Scale, MessageSquare, Clapperboard, Cloud } from "lucide-react";

const projects = [
  {
    title: "Retinal Disease Classification",
    icon: Eye,
    description: "Advanced deep learning system using EfficientNetB3 for multi-class retinal disease detection across ARMD, Cataract, Diabetic Retinopathy, and Glaucoma with 94.93% accuracy using transfer learning techniques.",
    metrics: "94.93% Accuracy",
    tags: ["TensorFlow", "Keras", "EfficientNetB3", "Transfer Learning", "Medical Imaging"],
    category: "Deep Learning",
    github: "#",
    demo: "#",
  },
  {
    title: "Glaucoma Segmentation (DeepLabV3)",
    icon: Brain,
    description: "Semantic segmentation model for precise optic disc and optic cup detection using DeepLabV3 architecture. Leveraged Drishti-GS and REFUGE2 datasets with few-shot learning and data fusion techniques.",
    metrics: "Enhanced Few-Shot Learning",
    tags: ["PyTorch", "DeepLabV3", "OpenCV", "Segmentation", "Computer Vision"],
    category: "Computer Vision",
    github: "#",
  },
  {
    title: "Lex Veritas: AI Legal Companion",
    icon: Scale,
    description: "Flask-powered AI backend integrated with Google Gemini for intelligent legal document processing. Features RAG-based case summarization, document automation, and legal research assistance.",
    metrics: "RAG Implementation",
    tags: ["Flask", "Google Gemini", "RAG", "NLP", "Legal Tech"],
    category: "AI Application",
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application",
    icon: MessageSquare,
    description: "Full-stack real-time messaging platform with authentication, media uploads via Cloudinary, and WebSocket-based instant communication. Features modern UI with responsive design.",
    metrics: "Production Ready",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
  },
  {
    title: "Movie Recommendation System",
    icon: Clapperboard,
    description: "Collaborative filtering-based recommendation engine built with machine learning. Evaluated using RMSE metrics and accuracy scores for personalized movie suggestions.",
    metrics: "ML-Powered",
    tags: ["Python", "scikit-learn", "pandas", "NumPy", "Collaborative Filtering"],
    category: "Machine Learning",
    github: "#",
  },
  {
    title: "Real-Time Weather Monitoring",
    icon: Cloud,
    description: "Responsive weather dashboard integrating OpenWeather API with interactive Leaflet.js maps. Features real-time data visualization and geolocation-based forecasting.",
    metrics: "Live Updates",
    tags: ["JavaScript", "OpenWeather API", "Leaflet.js", "Geolocation"],
    category: "Web Application",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI, ML, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="group glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in-up border hover:border-primary/30"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-primary/5 text-foreground rounded border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
