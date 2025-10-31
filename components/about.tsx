"use client"

import { CheckCircle, Zap, TrendingUp, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

interface InterestNode {
  label: string
  color: string
  angle: number
  size: number
}

export default function About() {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState(0)
  const [learningVelocity, setLearningVelocity] = useState(0)

  const interests: InterestNode[] = [
    { label: "Machine Learning", color: "#00d4ff", angle: 0, size: 1.2 },
    { label: "Web Development", color: "#00ff88", angle: 72, size: 1 },
    { label: "Cloud Systems", color: "#7b2cbf", angle: 144, size: 0.95 },
    { label: "Data Science", color: "#ff006e", angle: 216, size: 1.1 },
    { label: "Open Source", color: "#ffbe0b", angle: 288, size: 0.9 },
  ]

  const philosophies = [
    {
      title: "Why I Build",
      statement:
        "I build to understand. Every line of code is an experiment in translating thought into reality. Technology is not the goal—it's the language.",
    },
    {
      title: "Learning Philosophy",
      statement:
        "Curiosity-driven exploration across domains creates unexpected connections. The most innovative solutions emerge from intersecting different fields.",
    },
    {
      title: "Innovation Mindset",
      statement:
        "I believe in systems thinking—understanding how technologies interact and influence each other. Problems are rarely solved in isolation.",
    },
    {
      title: "Impact Vision",
      statement:
        "My goal is to build technology that bridges the gap between computational systems and the physical world. Meaningful innovation requires depth and breadth.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPhilosophy((prev) => (prev + 1) % philosophies.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let velocity = 0
    const interval = setInterval(() => {
      velocity = Math.min(velocity + Math.random() * 15, 100)
      setLearningVelocity(Math.floor(velocity))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden"
    >
      {/* Background neural network effect */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-heading text-5xl md:text-6xl font-bold mb-4 text-balance">The Mind Palace</h2>
          <p className="text-lg text-foreground/60 font-light">Architecture of Curiosity</p>
        </div>

        {/* Cognitive Map Visualization */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Interactive Brain Map */}
          <div className="relative h-96 flex items-center justify-center group">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm mx-auto" style={{ opacity: 0.9 }}>
              <defs>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00ff88" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Central processing hub */}
              <circle cx="200" cy="200" r="40" fill="url(#centerGrad)" stroke="#00d4ff" strokeWidth="2" />
              <text x="200" y="210" textAnchor="middle" fill="#f0f4ff" fontSize="12" fontWeight="bold">
                CORE
              </text>

              {/* Interest nodes with connections */}
              {interests.map((node, idx) => {
                const rad = (node.angle * Math.PI) / 180
                const x = 200 + 120 * Math.cos(rad)
                const y = 200 + 120 * Math.sin(rad)

                return (
                  <g key={idx}>
                    {/* Connection line */}
                    <line x1="200" y1="200" x2={x} y2={y} stroke={node.color} strokeWidth="1" opacity="0.3" />

                    {/* Interest node */}
                    <circle
                      cx={x}
                      cy={y}
                      r={20 * node.size}
                      fill={node.color}
                      opacity="0.15"
                      stroke={node.color}
                      strokeWidth="2"
                      className="transition-all duration-300 hover:opacity-40 cursor-pointer"
                    />

                    {/* Label */}
                    <text
                      x={x}
                      y={y + 40}
                      textAnchor="middle"
                      fill="#cbd5e0"
                      fontSize="11"
                      fontWeight="500"
                      className="pointer-events-none"
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Hover overlay text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm text-foreground/60 text-center px-4">Interactive Knowledge Graph</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Academic Foundation</h3>
              <p className="text-foreground/80 leading-relaxed font-light">
                B.Tech Computer Science (Cyber Physical Systems) at VIT Chennai, graduating 2029. Building a strong
                foundation in algorithmic thinking, system design, and cutting-edge technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Learning Journey
              </h4>
              {["AI & Deep Learning", "Full-Stack Development", "Cloud Architecture", "Systems Thinking"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start glass-card p-4 rounded-lg hover:border-primary/50 transition-all group"
                  >
                    <CheckCircle
                      className="text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow-pulse"
                      size={18}
                    />
                    <span className="text-foreground/80 font-light">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Learning Velocity Tracker */}
        <div className="glass-card p-8 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 mb-16 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Zap size={24} />
              Learning Velocity
            </h3>
            <span className="text-3xl font-bold text-primary animate-pulse">{learningVelocity}%</span>
          </div>

          <div className="space-y-4">
            <p className="text-foreground/70 font-light mb-6">Real-time skill acquisition and exploration rate</p>
            <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 shadow-lg shadow-primary/50 animate-shimmer"
                style={{
                  width: `${learningVelocity}%`,
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Technologies", value: "15+" },
              { label: "Projects", value: "8+" },
              { label: "Learning Hours", value: "500+" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-background/30 border border-primary/20">
                <p className="text-sm text-foreground/60 font-mono">{stat.label}</p>
                <p className="text-2xl font-bold text-primary mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Manifesto */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-foreground flex items-center gap-2 mb-8">
            <BookOpen size={28} className="text-primary" />
            Philosophy Manifesto
          </h3>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur opacity-25" />
            <div className="relative glass-card p-8 rounded-xl min-h-48 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <h4 className="text-2xl font-bold text-primary">{philosophies[selectedPhilosophy].title}</h4>
                <p className="text-lg text-foreground/85 leading-relaxed font-light italic">
                  "{philosophies[selectedPhilosophy].statement}"
                </p>
              </div>

              {/* Indicator dots */}
              <div className="flex gap-2 justify-center">
                {philosophies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhilosophy(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === selectedPhilosophy ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-foreground/50 text-center font-mono">
            Auto-rotating every 6 seconds • Click indicators to manually navigate
          </p>
        </div>
      </div>
    </section>
  )
}
