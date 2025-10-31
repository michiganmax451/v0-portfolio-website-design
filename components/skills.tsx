"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Zap, Database, Lightbulb, Rocket } from "lucide-react"

interface SkillDomain {
  id: string
  icon: any
  name: string
  color: string
  skills: { name: string; level: number }[]
  angle: number
}

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [synergy, setSynergy] = useState<string[]>([])

  const skillDomains: SkillDomain[] = [
    {
      id: "core",
      icon: Code,
      name: "Core Languages",
      color: "#00d4ff",
      angle: 0,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 87 },
        { name: "Java", level: 82 },
      ],
    },
    {
      id: "ai",
      icon: Brain,
      name: "AI/ML",
      color: "#00ff88",
      angle: 60,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 86 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 82 },
      ],
    },
    {
      id: "frontend",
      icon: Zap,
      name: "Frontend",
      color: "#7b2cbf",
      angle: 120,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 89 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      id: "backend",
      icon: Database,
      name: "Backend",
      color: "#ff006e",
      angle: 180,
      skills: [
        { name: "Node.js", level: 84 },
        { name: "FastAPI", level: 83 },
        { name: "PostgreSQL", level: 86 },
        { name: "MongoDB", level: 81 },
      ],
    },
    {
      id: "devops",
      icon: Rocket,
      name: "DevOps/Cloud",
      color: "#ffbe0b",
      angle: 240,
      skills: [
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      id: "emerging",
      icon: Lightbulb,
      name: "Emerging Tech",
      color: "#00d4ff",
      angle: 300,
      skills: [
        { name: "Blockchain", level: 70 },
        { name: "IoT Systems", level: 72 },
        { name: "AR/VR", level: 68 },
        { name: "Quantum Ready", level: 65 },
      ],
    },
  ]

  const handleDomainClick = (domainId: string) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId)

    // Calculate synergy effects
    if (selectedDomain === domainId) {
      setSynergy([])
    } else {
      const synergyMap: { [key: string]: string[] } = {
        core: ["frontend", "backend", "ai"],
        ai: ["core", "backend", "devops"],
        frontend: ["core", "devops", "emerging"],
        backend: ["core", "ai", "devops"],
        devops: ["backend", "ai", "frontend"],
        emerging: ["frontend", "ai", "core"],
      }
      setSynergy(synergyMap[domainId] || [])
    }
  }

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background orbital effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-quantum-field" />
        <div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-quantum-field"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-heading text-5xl md:text-6xl font-bold mb-4 text-balance">Skill Cosmos</h2>
          <p className="text-lg text-foreground/60 font-light">Orbital Proficiency System</p>
        </div>

        {/* Galaxy Cluster View - Orbital Layout */}
        <div className="relative h-96 md:h-[500px] mb-16 flex items-center justify-center group">
          <svg viewBox="0 0 800 600" className="w-full h-full max-w-4xl" style={{ opacity: 0.95 }}>
            <defs>
              <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Central system */}
            <circle cx="400" cy="300" r="50" fill="url(#coreGrad)" stroke="#00d4ff" strokeWidth="2" />
            <text x="400" y="310" textAnchor="middle" fill="#f0f4ff" fontSize="14" fontWeight="bold">
              SKILLS
            </text>

            {/* Orbital paths */}
            {[1, 1.5, 2].map((scale, idx) => (
              <circle
                key={idx}
                cx="400"
                cy="300"
                r={120 * scale}
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1"
                opacity={0.1}
                strokeDasharray="5,5"
              />
            ))}

            {/* Skill domains */}
            {skillDomains.map((domain, idx) => {
              const rad = (domain.angle * Math.PI) / 180
              const x = 400 + 180 * Math.cos(rad)
              const y = 300 + 180 * Math.sin(rad)
              const isSelected = selectedDomain === domain.id
              const isSynergy = synergy.includes(domain.id)

              return (
                <g key={domain.id}>
                  {/* Connection line */}
                  <line x1="400" y1="300" x2={x} y2={y} stroke={domain.color} strokeWidth="1" opacity="0.2" />

                  {/* Domain node */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 45 : isSynergy ? 40 : 35}
                    fill={domain.color}
                    opacity={isSelected ? 0.3 : isSynergy ? 0.2 : 0.15}
                    stroke={domain.color}
                    strokeWidth={isSelected ? 3 : isSynergy ? 2 : 1}
                    className="transition-all duration-300 cursor-pointer hover:opacity-40"
                    onClick={() => handleDomainClick(domain.id)}
                    style={{
                      filter: isSelected ? `drop-shadow(0 0 15px ${domain.color})` : "none",
                    }}
                  />

                  {/* Icon background */}
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill="rgba(5, 10, 20, 0.8)"
                    stroke={domain.color}
                    strokeWidth="1"
                    opacity="0.6"
                  />

                  {/* Label */}
                  <text
                    x={x}
                    y={y + 60}
                    textAnchor="middle"
                    fill="#cbd5e0"
                    fontSize="13"
                    fontWeight="600"
                    className="pointer-events-none"
                  >
                    {domain.name}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm text-foreground/60 text-center">Click domains to explore synergies</p>
          </div>
        </div>

        {/* Proficiency Orbits and Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillDomains.map((domain) => {
            const Icon = domain.icon
            const isSelected = selectedDomain === domain.id

            return (
              <Card
                key={domain.id}
                onClick={() => handleDomainClick(domain.id)}
                className={`glass-card border-border/30 transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary/70 bg-primary/10 scale-105 shadow-lg shadow-primary/50"
                    : "hover:border-primary/50 hover:scale-102"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        isSelected ? "bg-primary/40" : "bg-primary/20"
                      } flex items-center justify-center transition-all`}
                      style={{
                        boxShadow: isSelected ? `0 0 15px ${domain.color}` : "none",
                      }}
                    >
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{domain.name}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Skills with orbital progress */}
                  <div className="space-y-3">
                    {domain.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                          <span className="text-xs font-bold text-primary">{skill.level}%</span>
                        </div>

                        {/* Circular progress orbit */}
                        <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${domain.color}, ${domain.color}99)`,
                              boxShadow: `0 0 8px ${domain.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skill synergy indicator */}
                  {isSelected && (
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-xs text-foreground/60 font-mono mb-2">SYNERGIZES WITH:</p>
                      <div className="flex flex-wrap gap-2">
                        {synergy.map((synergyId) => {
                          const synergyDomain = skillDomains.find((d) => d.id === synergyId)
                          return (
                            <span
                              key={synergyId}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                            >
                              {synergyDomain?.name}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Learning Trajectory Projector */}
        <div className="glass-card p-8 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
          <h3 className="text-2xl font-bold text-primary mb-8">Learning Trajectory Projector</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                quarter: "Q4 2024",
                focus: "Advanced ML",
                status: "In Progress",
                color: "#00d4ff",
              },
              {
                quarter: "Q1 2025",
                focus: "Cloud Architecture",
                status: "Planned",
                color: "#00ff88",
              },
              {
                quarter: "Q2 2025",
                focus: "System Design",
                status: "Planned",
                color: "#7b2cbf",
              },
              {
                quarter: "Q3 2025",
                focus: "AI Integration",
                status: "Planned",
                color: "#ff006e",
              },
            ].map((projection, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background/30 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <p className="text-xs text-foreground/60 font-mono mb-2">{projection.quarter}</p>
                <p className="text-lg font-bold text-foreground mb-3">{projection.focus}</p>
                <div
                  className="w-full h-1 rounded-full"
                  style={{
                    background: projection.color,
                    opacity: projection.status === "In Progress" ? 1 : 0.4,
                  }}
                />
                <p
                  className="text-xs mt-2 font-semibold"
                  style={{
                    color: projection.status === "In Progress" ? projection.color : "rgba(203, 213, 224, 0.6)",
                  }}
                >
                  {projection.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
