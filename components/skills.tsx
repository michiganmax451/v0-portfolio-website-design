"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Zap, Database } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      category: "Core Skills",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
      level: 90,
    },
    {
      icon: Brain,
      category: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
      level: 85,
    },
    {
      icon: Zap,
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
      level: 88,
    },
    {
      icon: Database,
      category: "Backend",
      skills: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs"],
      level: 82,
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-4xl md:text-5xl font-bold mb-16 text-balance">Skills & Learning Path</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((item, i) => {
            const Icon = item.icon
            return (
              <Card
                key={i}
                className="glass-card border-border/30 hover:border-primary/50 transition-all hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-all">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{item.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/60">Proficiency</span>
                      <span className="text-sm font-bold text-primary">{item.level}%</span>
                    </div>
                    <div className="w-full bg-border/30 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-700 shadow-lg shadow-primary/50"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="glass-card p-8 border-primary/30 bg-primary/5">
          <h3 className="text-2xl font-bold mb-6 text-primary">Currently Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Advanced ML", desc: "Deep Learning architectures and neural networks" },
              { title: "Cloud & DevOps", desc: "AWS, Docker, and CI/CD pipelines" },
              { title: "Data Science", desc: "Statistical analysis and data visualization" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-background/50 border border-primary/20">
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
