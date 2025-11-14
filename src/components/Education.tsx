import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
    location: "Hyderabad",
    period: "2022 - 2026",
    cgpa: "9.18/10",
    highlights: [
      "Focus on Machine Learning and Artificial Intelligence",
    ]
  },
  {
    degree: "Intermediate (10+2)",
    institution: "Vector Junior College",
    location: "Hyderabad",
    period: "2020 - 2022",
    cgpa: "98.1%",
    highlights: [
      "Strong foundation in Mathematics and Sciences",
      "Top performer in state board examinations"
    ]
  }
];

const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    date: "Dec 2023",
    credentialUrl: "#",
    skills: ["Cloud Computing", "AWS Services", "Infrastructure"]
  },
  {
    title: "AWS Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2023",
    credentialUrl: "#",
    skills: ["ML on AWS", "SageMaker", "AI Services"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Education */}
          <div className="space-y-8 mb-16">
            {education.map((edu, idx) => (
              <div
                key={edu.degree}
                className="glass-card rounded-2xl p-8 animate-fade-in-up border hover:border-primary/30 transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-accent">
                          {edu.period}
                        </p>
                        <p className="text-lg font-bold text-primary">
                          {edu.cgpa}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-xl p-6 hover:shadow-xl transition-all animate-scale-in border hover:border-accent/30"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                  <p className="text-sm text-primary font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-accent/10 text-foreground rounded border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={cert.credentialUrl}
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    View Credential →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
