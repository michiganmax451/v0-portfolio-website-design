"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null)
  const [konami, setKonami] = useState<string[]>([])
  const [easterEggActive, setEasterEggActive] = useState(false)

  const allAchievements: Achievement[] = [
    {
      id: "first-visit",
      name: "Digital Explorer",
      description: "Visited the portfolio",
      icon: "🚀",
      unlocked: false,
    },
    {
      id: "about-reader",
      name: "Curiosity Scholar",
      description: "Read the entire about section",
      icon: "📖",
      unlocked: false,
    },
    {
      id: "skill-master",
      name: "Skill Seeker",
      description: "Explored all skill domains",
      icon: "⭐",
      unlocked: false,
    },
    {
      id: "project-explorer",
      name: "Innovation Tracker",
      description: "Viewed all projects",
      icon: "🔭",
      unlocked: false,
    },
    {
      id: "full-journey",
      name: "Complete Navigator",
      description: "Scrolled through entire portfolio",
      icon: "🎯",
      unlocked: false,
    },
    {
      id: "konami-code",
      name: "Secret Decoder",
      description: "Unlocked the Konami code",
      icon: "🔐",
      unlocked: false,
    },
    {
      id: "night-visitor",
      name: "Night Owl",
      description: "Visited after midnight",
      icon: "🌙",
      unlocked: false,
    },
    {
      id: "speed-reader",
      name: "Speed Runner",
      description: "Completed portfolio in under 2 minutes",
      icon: "⚡",
      unlocked: false,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Achievement: Full journey
      if (window.scrollY > document.documentElement.scrollHeight - window.innerHeight - 100) {
        unlockAchievement("full-journey")
      }

      // Achievement: About reader
      if (window.scrollY > 800) {
        unlockAchievement("about-reader")
      }

      // Achievement: Skill master
      if (window.scrollY > 1600) {
        unlockAchievement("skill-master")
      }

      // Achievement: Project explorer
      if (window.scrollY > 2400) {
        unlockAchievement("project-explorer")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Achievement: First visit
    const hasVisited = localStorage.getItem("portfolio-visited")
    if (!hasVisited) {
      localStorage.setItem("portfolio-visited", "true")
      unlockAchievement("first-visit")
    } else {
      setAchievements((prev) => prev.map((a) => (a.id === "first-visit" ? { ...a, unlocked: true } : a)))
    }

    // Achievement: Night visitor
    const hour = new Date().getHours()
    if (hour >= 23 || hour < 5) {
      unlockAchievement("night-visitor")
    }

    // Achievement: Speed reader timer
    const startTime = Date.now()
    const speedInterval = setTimeout(() => {
      const elapsed = (Date.now() - startTime) / 1000 / 60
      if (elapsed < 2 && scrollY > 2000) {
        unlockAchievement("speed-reader")
      }
    }, 120000)

    return () => clearTimeout(speedInterval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
      ]

      setKonami((prev) => {
        const newSequence = [...prev, e.key]
        const lastTen = newSequence.slice(-10)

        if (lastTen.join(",") === konamiCode.join(",")) {
          activateEasterEgg()
          unlockAchievement("konami-code")
          return []
        }

        return lastTen
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const unlockAchievement = (id: string) => {
    setAchievements((prev) => {
      const achievement = prev.find((a) => a.id === id)
      if (achievement && !achievement.unlocked) {
        const updated = prev.map((a) => (a.id === id ? { ...a, unlocked: true } : a))
        setShowAchievement({ ...achievement, unlocked: true })
        setTimeout(() => setShowAchievement(null), 3000)
        return updated
      }
      return prev
    })
  }

  const activateEasterEgg = () => {
    setEasterEggActive(true)
    // Add fun effects
    document.body.style.filter = "hue-rotate(45deg)"
    setTimeout(() => {
      document.body.style.filter = "none"
      setEasterEggActive(false)
    }, 2000)
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-quantum-field" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-quantum-field"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {showAchievement && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
          <div className="glass-card p-4 rounded-lg border-primary/50 backdrop-blur-xl shadow-lg shadow-primary/20">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{showAchievement.icon}</span>
              <div>
                <p className="font-bold text-primary">{showAchievement.name}</p>
                <p className="text-xs text-foreground/60">{showAchievement.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          const panel = document.getElementById("achievements-panel")
          if (panel) {
            panel.classList.toggle("hidden")
          }
        }}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/80 transition-all hover:scale-110 text-2xl"
        title="View achievements"
      >
        🏆
      </button>

      <div
        id="achievements-panel"
        className="hidden fixed bottom-24 left-8 z-40 w-80 glass-card p-6 rounded-xl border-primary/30 max-h-96 overflow-y-auto animate-fade-in-up"
      >
        <h3 className="text-lg font-bold text-primary mb-4">
          Achievements ({achievements.filter((a) => a.unlocked).length}/{achievements.length})
        </h3>
        <div className="space-y-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-3 rounded-lg transition-all ${
                achievement.unlocked
                  ? "bg-primary/20 border border-primary/50"
                  : "bg-background/50 border border-primary/10 opacity-50"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-xl">{achievement.icon}</span>
                <div className="flex-1">
                  <p className={`text-sm font-bold ${achievement.unlocked ? "text-primary" : "text-foreground/50"}`}>
                    {achievement.name}
                  </p>
                  <p className="text-xs text-foreground/50">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {easterEggActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-bounce">
            <p className="text-6xl mb-4">🎮</p>
            <p className="text-2xl font-bold text-primary">KONAMI CODE ACTIVATED!</p>
            <p className="text-sm text-foreground/60 mt-2">Secret mode unlocked for Renaissance Technologist</p>
          </div>
        </div>
      )}
    </main>
  )
}
