"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI Content Generator",
      description:
        "A full-stack application powered by AI that generates creative content and code snippets intelligently.",
      tags: ["React", "Next.js", "Python", "TensorFlow"],
      github: "#",
      live: "#",
      status: "coming-soon",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a scalable chat app with WebSocket support, real-time notifications, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      status: "coming-soon",
    },
    {
      title: "Machine Learning Dashboard",
      description:
        "Interactive dashboard for visualizing ML model performance, metrics, and predictions with real-time updates.",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#",
      status: "coming-soon",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-lg text-foreground/70">
            Currently learning, experimenting, and preparing to showcase exciting projects soon!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="glass-card border-border/30 hover:border-primary/50 transition-all hover:scale-105 flex flex-col group"
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary/30 text-primary border-primary/50">
                  {project.status === "coming-soon" ? "Coming Soon" : "Active"}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg pr-20">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-primary/10">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-accent/10">
                    <ExternalLink size={16} className="mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
