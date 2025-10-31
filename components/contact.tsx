"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  })
  const [resonance, setResonance] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [collaborationScore, setCollaborationScore] = useState(0)
  const [expandedCard, setExpandedCard] = useState(false)
  const [handsakePhase, setHandshakePhase] = useState(0)

  const contactInfo = [
    { icon: Mail, label: "Email", value: "manimeets09@gmail.com", href: "mailto:manimeets09@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 90257 80639", href: "tel:+919025780639" },
    { icon: MapPin, label: "Location", value: "Chennai, India", href: "#" },
  ]

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:manimeets09@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/manivel-mughilan-6bb65036a" },
    { icon: Github, label: "GitHub", href: "https://github.com/simplystunning99087" },
  ]

  const projectTypes = [
    { id: "ai", label: "AI/ML Project", color: "#00d4ff" },
    { id: "web", label: "Web Development", color: "#00ff88" },
    { id: "collaboration", label: "Collaboration", color: "#7b2cbf" },
    { id: "learning", label: "Learning Partnership", color: "#ff006e" },
    { id: "research", label: "Research", color: "#ffbe0b" },
  ]

  const compatibilityDimensions = [
    { name: "Technical Alignment", current: 0 },
    { name: "Vision Synergy", current: 0 },
    { name: "Communication Clarity", current: 0 },
    { name: "Value Alignment", current: 0 },
    { name: "Innovation Potential", current: 0 },
  ]

  useEffect(() => {
    const calculateResonance = () => {
      const nameScore = formData.name.length * 2
      const emailScore = formData.email.includes("@") ? 15 : 0
      const messageScore = Math.min(formData.message.length / 10, 25)
      const typeScore = formData.projectType ? 20 : 0
      const total = Math.min(nameScore + emailScore + messageScore + typeScore, 100)
      setResonance(total)

      if (total > 50) {
        setHandshakePhase(Math.min(Math.floor(total / 25), 4))
      }
    }
    calculateResonance()
  }, [formData])

  useEffect(() => {
    if (resonance > 0) {
      setCollaborationScore(Math.round(Math.random() * 30 + resonance * 0.7))
    }
  }, [resonance])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProjectTypeChange = (typeId: string) => {
    setFormData((prev) => ({ ...prev, projectType: typeId }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "", projectType: "" })
    setHandshakePhase(0)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const renderHandshakePhase = () => {
    const phases = ["Initiating", "Handshaking", "Validating", "Synthesizing", "Ready"]
    return (
      <div className="space-y-2">
        {phases.map((phase, idx) => (
          <div key={phase} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full transition-all ${
                idx < handsakePhase ? "bg-primary scale-150" : "bg-primary/30"
              }`}
              style={{
                boxShadow: idx < handsakePhase ? "0 0 8px #00d4ff" : "none",
              }}
            />
            <span className="text-xs font-mono text-foreground/60">{phase}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background matrix effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-heading text-5xl md:text-6xl font-bold mb-4 text-balance">Connection Protocol</h2>
          <p className="text-lg text-foreground/60 font-light">
            Neural handshake and collaboration synthesis framework
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Resonance Form */}
          <div className="md:col-span-2 space-y-6">
            <Card className="glass-card border-primary/30 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resonance Form</CardTitle>
                <p className="text-foreground/60 text-sm mt-2">
                  This form initiates the neural handshake protocol. Watch the connection establish in real-time.
                </p>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Resonance Meter with Handshake Visualization */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-mono text-foreground/70">RESONANCE LEVEL</span>
                        <span className="text-xl font-bold text-primary animate-glow-pulse">
                          {Math.round(resonance)}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden mb-4">
                        <div
                          className="h-full rounded-full transition-all duration-500 animate-shimmer"
                          style={{
                            width: `${resonance}%`,
                            background: "linear-gradient(90deg, #00d4ff, #00ff88, #7b2cbf)",
                            boxShadow: `0 0 15px rgba(0, 212, 255, 0.6)`,
                            backgroundSize: "200% 100%",
                          }}
                        />
                      </div>
                      {handsakePhase > 0 && renderHandshakePhase()}
                    </div>

                    {/* Name Field */}
                    <div>
                      <label className="text-sm text-foreground/70 mb-2 block font-mono">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-primary/20 hover:border-primary/40 focus:border-primary/80 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="text-sm text-foreground/70 mb-2 block font-mono">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-primary/20 hover:border-primary/40 focus:border-primary/80 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        required
                      />
                    </div>

                    {/* Project Type Selector */}
                    <div>
                      <label className="text-sm text-foreground/70 mb-3 block font-mono">Project Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handleProjectTypeChange(type.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                              formData.projectType === type.id
                                ? "border-2"
                                : "border border-primary/20 hover:border-primary/50"
                            }`}
                            style={{
                              backgroundColor: formData.projectType === type.id ? `${type.color}22` : "transparent",
                              borderColor: formData.projectType === type.id ? type.color : undefined,
                              color: formData.projectType === type.id ? type.color : "#cbd5e0",
                            }}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="text-sm text-foreground/70 mb-2 block font-mono">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your idea, project, or collaboration opportunity..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-primary/20 hover:border-primary/40 focus:border-primary/80 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="quantum-button w-full" size="lg">
                      Initialize Connection
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mb-4 text-5xl animate-bounce">
                      <CheckCircle2 className="mx-auto text-accent" size={64} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Connection Established!</h3>
                    <p className="text-foreground/70">
                      Neural handshake complete. I'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Collaboration Probability & Business Card */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Compatibility Matrix</CardTitle>
                <p className="text-foreground/60 text-sm mt-2">
                  This matrix evaluates your compatibility across multiple dimensions.
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(135deg, #00d4ff, #00ff88)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {collaborationScore}%
                  </div>
                  <p className="text-xs text-foreground/60 font-mono">MATCH POTENTIAL</p>
                </div>

                <div className="space-y-2 text-xs">
                  {compatibilityDimensions.map((dim) => (
                    <div key={dim.name} className="flex items-center gap-2">
                      <span className="w-20 text-foreground/60 truncate">{dim.name}</span>
                      <div className="flex-1 h-1.5 bg-background/30 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${Math.random() * 80 + 20}%`,
                            background: "linear-gradient(90deg, #00d4ff, #00ff88)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-background/30 border border-primary/20 text-center text-xs">
                  <p className="text-foreground/70">
                    {collaborationScore > 80
                      ? "Exceptional alignment detected!"
                      : collaborationScore > 60
                        ? "Strong collaboration potential"
                        : "Open to exploring synergies"}
                  </p>
                </div>
              </CardContent>
            </div>

            {/* Digital Business Card */}
            <div
              className="glass-card p-6 rounded-xl border-primary/30 cursor-pointer hover:border-primary/60 transition-all group"
              onClick={() => setExpandedCard(!expandedCard)}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">Digital Business Card</CardTitle>
              </CardHeader>
              <CardContent>
                {!expandedCard ? (
                  <div className="space-y-3 text-sm">
                    <p className="font-semibold text-foreground">Manivel Mughilan T S</p>
                    <p className="text-foreground/60">Synthesis Engineer</p>
                    <p className="text-foreground/50 text-xs">AI Systems • Full-Stack • Innovation</p>
                    <p className="text-xs text-primary font-mono mt-4">Click to expand...</p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in-up">
                    <div>
                      <p className="text-xs text-foreground/50 font-mono mb-1">NAME</p>
                      <p className="font-bold text-foreground">Manivel Mughilan T S</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-mono mb-1">TITLE</p>
                      <p className="font-semibold text-primary">Synthesis Engineer</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-mono mb-1">EXPERTISE</p>
                      <div className="flex flex-wrap gap-2">
                        {["AI/ML", "Systems", "Architecture"].map((skill) => (
                          <span key={skill} className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-mono mb-2">CONNECT</p>
                      <div className="flex gap-2">
                        {socialLinks.map((link) => {
                          const Icon = link.icon
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded flex items-center justify-center bg-primary/20 hover:bg-primary/40 transition-all"
                            >
                              <Icon size={14} className="text-primary" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass-card p-4 flex items-center gap-3 hover:border-primary/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-all">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-foreground/50 font-mono">{info.label}</p>
                      <p className="font-medium text-foreground text-sm truncate">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Connection Philosophy */}
        <div className="glass-card p-8 rounded-xl border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Let's Synthesize Innovation</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether you're exploring AI applications, building scalable systems, or seeking a synthesis engineer to
            bridge technical domains—I'm open to meaningful collaborations that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  )
}
