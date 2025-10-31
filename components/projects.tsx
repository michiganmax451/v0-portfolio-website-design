"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Zap, GitBranch } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github: string
  live: string
  status: "protostar" | "forming" | "active"
  formationProgress: number
  category: "ai" | "web" | "data"
  impact: number
  angle: number
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"ai" | "web" | "data" | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [formations, setFormations] = useState<{ [key: string]: number }>({})

  const projects: Project[] = [
    {
      id: "ai-content",
      title: "AI Content Generator",
      description:
        "Full-stack application powered by advanced AI models generating creative content, code snippets, and intelligent recommendations with fine-tuned performance.",
      tags: ["React", "Next.js", "Python", "TensorFlow", "GPT-4"],
      github: "https://github.com",
      live: "#",
      status: "protostar",
      formationProgress: 65,
      category: "ai",
      impact: 8.5,
      angle: 0,
    },
    {
      id: "chat-app",
      title: "Real-time Chat Application",
      description:
        "Scalable chat infrastructure with WebSocket real-time messaging, end-to-end encryption, user authentication, and persistent data management.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
      github: "https://github.com",
      live: "#",
      status: "forming",
      formationProgress: 45,
      category: "web",
      impact: 7.8,
      angle: 120,
    },
    {
      id: "ml-dashboard",
      title: "ML Performance Dashboard",
      description:
        "Interactive dashboard for visualizing model metrics, predictions, and performance analytics with real-time updates and advanced data visualization.",
      tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com",
      live: "#",
      status: "forming",
      formationProgress: 55,
      category: "data",
      impact: 8.2,
      angle: 240,
    },
    {
      id: "cyber-system",
      title: "IoT Cyber-Physical System",
      description:
        "Integrated system bridging digital and physical worlds with sensor networks, real-time data processing, and autonomous control mechanisms.",
      tags: ["Python", "Arduino", "MQTT", "TensorFlow", "Cloud"],
      github: "https://github.com",
      live: "#",
      status: "protostar",
      formationProgress: 40,
      category: "ai",
      impact: 9.0,
      angle: 180,
    },
    {
      id: "web-framework",
      title: "Custom Framework Library",
      description:
        "Lightweight, performant framework library for rapid web development with built-in state management, routing, and component optimization.",
      tags: ["TypeScript", "Node.js", "React", "Webpack"],
      github: "https://github.com",
      live: "#",
      status: "forming",
      formationProgress: 50,
      category: "web",
      impact: 7.5,
      angle: 60,
    },
    {
      id: "data-viz",
      title: "Advanced Data Visualization Engine",
      description:
        "High-performance rendering engine for complex datasets with interactive exploration, 3D visualization, and real-time streaming capabilities.",
      tags: ["Three.js", "WebGL", "D3.js", "React", "Python"],
      github: "https://github.com",
      live: "#",
      status: "protostar",
      formationProgress: 35,
      category: "data",
      impact: 8.8,
      angle: 300,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFormations((prev) => {
        const updated = { ...prev }
        projects.forEach((project) => {
          if ((prev[project.id] || 0) < 100) {
            updated[project.id] = Math.min((prev[project.id] || project.formationProgress) + Math.random() * 5, 100)
          }
        })
        return updated
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const filteredProjects = selectedCategory ? projects.filter((p) => p.category === selectedCategory) : projects
  const categories: Array<{ id: "ai" | "web" | "data"; label: string; count: number; color: string }> = [
    { id: "ai", label: "AI/ML Projects", count: projects.filter((p) => p.category === "ai").length, color: "#00d4ff" },
    {
      id: "web",
      label: "Web Development",
      count: projects.filter((p) => p.category === "web").length,
      color: "#00ff88",
    },
    {
      id: "data",
      label: "Data Systems",
      count: projects.filter((p) => p.category === "data").length,
      color: "#7b2cbf",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background nebula effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-heading text-5xl md:text-6xl font-bold mb-4 text-balance">Project Nebula</h2>
          <p className="text-lg text-foreground/60 font-light">Ideas in Formation - Constellation View</p>
        </div>

        {/* Constellation View Visualization */}
        <div className="relative h-96 md:h-[500px] mb-16 glass-card p-8 rounded-xl border-primary/20 flex items-center justify-center group overflow-hidden">
          <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl">
            <defs>
              <linearGradient id="constellationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#7b2cbf" />
              </linearGradient>
            </defs>

            {/* Connecting lines between projects */}
            {filteredProjects.map((project1, idx1) => {
              const rad1 = (project1.angle * Math.PI) / 180
              const x1 = 400 + 150 * Math.cos(rad1)
              const y1 = 300 + 150 * Math.sin(rad1)

              return filteredProjects.map((project2, idx2) => {
                if (idx1 >= idx2) return null
                const rad2 = (project2.angle * Math.PI) / 180
                const x2 = 400 + 150 * Math.cos(rad2)
                const y2 = 300 + 150 * Math.sin(rad2)

                return (
                  <line
                    key={`${project1.id}-${project2.id}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#constellationGrad)"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                )
              })
            })}

            {/* Project nodes */}
            {filteredProjects.map((project) => {
              const rad = (project.angle * Math.PI) / 180
              const x = 400 + 150 * Math.cos(rad)
              const y = 300 + 150 * Math.sin(rad)
              const progress = formations[project.id] || project.formationProgress
              const categoryColor =
                project.category === "ai" ? "#00d4ff" : project.category === "web" ? "#00ff88" : "#7b2cbf"

              return (
                <g
                  key={project.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Outer ring - formation indicator */}
                  <circle
                    cx={x}
                    cy={y}
                    r="35"
                    fill="none"
                    stroke={categoryColor}
                    strokeWidth="2"
                    opacity={hoveredProject === project.id ? 0.8 : 0.3}
                    style={{ transition: "opacity 0.3s" }}
                  />

                  {/* Formation progress arc */}
                  <circle
                    cx={x}
                    cy={y}
                    r="35"
                    fill="none"
                    stroke={categoryColor}
                    strokeWidth="3"
                    strokeDasharray={`${(progress / 100) * 220} 220`}
                    opacity="0.8"
                    style={{ transition: "all 0.3s" }}
                  />

                  {/* Project node */}
                  <circle
                    cx={x}
                    cy={y}
                    r={hoveredProject === project.id ? 25 : 20}
                    fill={categoryColor}
                    opacity={hoveredProject === project.id ? 0.4 : 0.2}
                    style={{
                      transition: "all 0.3s",
                      filter: hoveredProject === project.id ? `drop-shadow(0 0 10px ${categoryColor})` : "none",
                    }}
                  />

                  {/* Status indicator */}
                  <circle cx={x} cy={y} r="8" fill={categoryColor} opacity="0.8" />

                  {/* Label */}
                  <text x={x} y={y + 50} textAnchor="middle" fill="#cbd5e0" fontSize="11" fontWeight="500">
                    {project.status === "protostar" ? "⭐" : "🌙"} {project.title.split(" ")[0]}
                  </text>
                </g>
              )
            })}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm text-foreground/60 text-center">Hover to view project formation progress</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? "bg-primary/30 text-primary border border-primary/50"
                : "bg-background/50 text-foreground/70 border border-primary/20 hover:border-primary/50"
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "text-white border"
                  : "bg-background/50 text-foreground/70 border border-primary/20 hover:border-primary/50"
              }`}
              style={{
                backgroundColor: selectedCategory === cat.id ? `${cat.color}22` : "",
                borderColor: selectedCategory === cat.id ? cat.color : "",
                color: selectedCategory === cat.id ? cat.color : "",
              }}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Protostar Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const progress = formations[project.id] || project.formationProgress
            const categoryColor =
              project.category === "ai" ? "#00d4ff" : project.category === "web" ? "#00ff88" : "#7b2cbf"

            return (
              <Card
                key={project.id}
                className="glass-card border-border/30 transition-all duration-300 hover:scale-105 flex flex-col group relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Formation progress bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-background/50">
                  <div
                    className="h-full transition-all duration-700"
                    style={{
                      width: `${progress}%`,
                      background: categoryColor,
                      boxShadow: `0 0 8px ${categoryColor}`,
                    }}
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge
                    className="text-xs font-mono"
                    style={{
                      backgroundColor: `${categoryColor}22`,
                      borderColor: categoryColor,
                      color: categoryColor,
                    }}
                  >
                    {project.status === "protostar" ? "⭐ Protostar" : "🌙 Forming"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(progress)}%
                  </Badge>
                </div>

                <CardHeader className="pt-8">
                  <CardTitle className="text-lg pr-32 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                  {/* Tags with category color */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="text-xs"
                        style={{
                          backgroundColor: `${categoryColor}15`,
                          borderColor: `${categoryColor}40`,
                          color: categoryColor,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Impact and Formation Metrics */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-primary/20">
                    <div>
                      <p className="text-xs text-foreground/50 font-mono">Impact Score</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={14} className="text-primary fill-primary" />
                        <span className="font-bold text-primary">{project.impact}/10</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-mono">Formation</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Zap size={14} className="text-accent" />
                        <span className="font-bold text-accent">{Math.round(progress)}%</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent hover:bg-primary/10 border-primary/30 hover:border-primary/50 text-primary"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent hover:bg-accent/10 border-primary/30 hover:border-accent/50 text-accent"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Collaboration Opportunity */}
        <div className="mt-16 glass-card p-8 rounded-xl border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Collaboration?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            I'm always open to exploring new ideas and collaborating on innovative projects. Let's build something
            extraordinary together.
          </p>
          <Button className="quantum-button">
            <GitBranch size={18} className="mr-2" />
            Propose a Project
          </Button>
        </div>
      </div>
    </section>
  )
}
