"use client"

import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background with particle-like elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary glow orb */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />

        {/* Secondary glow orb */}
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Interactive cursor orb */}
        <div
          className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="text-center max-w-5xl mx-auto animate-fade-in space-y-8">
        {/* Enhanced Profile Image with Advanced Glow Effect */}
        <div className="flex justify-center mb-8 relative group">
          <div className="relative">
            {/* Outer glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-0 group-hover:opacity-75 transition-all duration-500 animate-pulse" />

            {/* Main frame with synchronized glow */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Animated border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-75 animate-spin-slow"
                style={{ animationDuration: "8s" }}
              />

              {/* Glass effect layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-md" />

              {/* Image container with proper aspect ratio */}
              <div className="relative inset-2 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WEBDEV-QyEw12BnUHKDQEll4xX8dt5XhFZVRZ.jpeg"
                  alt="Manivel Mughilan T S"
                  className="w-full h-full object-cover object-center brightness-110 contrast-105"
                  loading="eager"
                />
              </div>

              {/* Shine effect */}
              <div className="absolute inset-2 rounded-full pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Enhanced Text Content */}
        <div className="space-y-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="section-heading">Manivel Mughilan T S</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-pulse-glow">
            Aspiring Technologist | AI & Web Enthusiast
          </p>

          <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed font-light">
            Exploring software technologies, learning across domains, and building innovative solutions one line of code
            at a time. Passionate about creating impactful digital experiences.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="neon-button group" size="lg">
            <span>Explore My Work</span>
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
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
              <div className="relative w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/80 transition-all hover:scale-110">
                <Icon className="text-primary group-hover:text-accent transition-colors" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/50 font-light">Scroll to explore</p>
            <ArrowDown className="text-primary animate-float" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
