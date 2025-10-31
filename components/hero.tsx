"use client"

import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | "evening">("morning")

  const taglines = [
    "Multi-disciplinary Innovator",
    "AI & Web Technologist",
    "Systems Thinker",
    "Curiosity-Driven Builder",
    "Cross-Domain Explorer",
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    const visited = localStorage.getItem("visited-portfolio")
    if (visited) {
      setIsFirstVisit(false)
    } else {
      localStorage.setItem("visited-portfolio", "true")
    }

    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay("morning")
    else if (hour < 18) setTimeOfDay("afternoon")
    else setTimeOfDay("evening")

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getGreeting = () => {
    const greetings = {
      morning: isFirstVisit ? "Welcome, Digital Explorer" : "Good morning, Creator",
      afternoon: isFirstVisit ? "Welcome, Innovator" : "Good afternoon",
      evening: isFirstVisit ? "Welcome to My Digital Space" : "Good evening",
    }
    return greetings[timeOfDay]
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Advanced quantum field background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Neural network nodes */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-quantum-field" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-quantum-field"
          style={{ animationDelay: "1s" }}
        />

        {/* Interactive cursor tracking orb */}
        <div
          className="absolute w-96 h-96 bg-primary/8 rounded-full blur-3xl transition-all duration-200 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Quantum grid pattern */}
        <div className="absolute inset-0 bg-quantum-grid opacity-20" />

        {/* Data flow rivers */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" style={{ opacity: 0.15 }}>
            <defs>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#7b2cbf" />
              </linearGradient>
            </defs>
            <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="url(#dataGradient)" strokeWidth="1" />
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="url(#dataGradient)" strokeWidth="1" />
            <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="url(#dataGradient)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto animate-fade-in-up space-y-8 relative z-10">
        <div className="mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm uppercase tracking-widest text-primary/60 font-mono">{getGreeting()}</p>
        </div>

        <div className="flex justify-center mb-8 relative group">
          <div className="relative w-64 h-64 md:w-72 md:h-72 perspective">
            {/* Outer orbital rings */}
            <div
              className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-3 rounded-full border border-accent/15 animate-spin-slow"
              style={{ animationDuration: "25s", animationDirection: "reverse" }}
            />
            <div
              className="absolute inset-6 rounded-full border border-primary/10 animate-spin-slow"
              style={{ animationDuration: "30s" }}
            />

            {/* Orbiting tech icons */}
            {[
              { icon: "⚡", label: "Speed" },
              { icon: "🧠", label: "AI" },
              { icon: "🚀", label: "Web" },
              { icon: "💾", label: "Data" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="absolute w-12 h-12 flex items-center justify-center text-xl animate-orbit"
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-24px",
                  marginTop: "-24px",
                  animationDelay: `${idx * 0.5}s`,
                }}
              >
                <div className="glass-card w-full h-full flex items-center justify-center rounded-full hover:scale-125 transition-transform cursor-pointer">
                  {item.icon}
                </div>
              </div>
            ))}

            {/* Main profile sphere container */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Glow effect layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-0 group-hover:opacity-75 transition-all duration-500 animate-glow-pulse" />

              {/* Synchronized animated border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-60 animate-spin-slow"
                style={{ animationDuration: "8s" }}
              />

              {/* Glass refraction layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 backdrop-blur-md" />

              {/* Profile image */}
              <div className="relative inset-2 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WEBDEV-QyEw12BnUHKDQEll4xX8dt5XhFZVRZ.jpeg"
                  alt="Manivel Mughilan T S"
                  className="w-full h-full object-cover object-center brightness-105 contrast-110 saturate-110"
                  loading="eager"
                />
              </div>

              {/* Holographic shine effect */}
              <div className="absolute inset-2 rounded-full pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>

            {/* DNA-like helix animation around sphere */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" style={{ opacity: 0.3 }}>
              <defs>
                <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#00ff88" />
                </linearGradient>
              </defs>
              <path
                d="M100,20 Q150,80 100,140 Q50,80 100,20"
                stroke="url(#helixGrad)"
                strokeWidth="2"
                fill="none"
                style={{ animation: "morph 6s ease-in-out infinite" }}
              />
            </svg>
          </div>
        </div>

        {/* Enhanced Text Content */}
        <div className="space-y-6 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="visionary-heading">Manivel Mughilan T S</span>
          </h1>

          <div className="h-12 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-neural-pulse transition-all duration-500">
              {taglines[currentTaglineIndex]}
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Exploring the convergence of AI, web technologies, and cyber-physical systems. Building innovative solutions
            that bridge multiple domains with curiosity-driven exploration.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="quantum-button group" size="lg">
            <span>Explore My Work</span>
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent text-primary"
          >
            Download Resume
          </Button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: Github, href: "https://github.com/simplystunning99087", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/manivel-mughilan-6bb65036a", label: "LinkedIn" },
            { icon: Mail, href: "mailto:manimeets09@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/80 transition-all hover:scale-125">
                <Icon className="text-primary group-hover:text-accent transition-colors" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/50 font-light">Scroll to explore</p>
            <ArrowDown className="text-primary animate-float-slow" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
