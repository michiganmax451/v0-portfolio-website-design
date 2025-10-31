"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

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

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background/50 to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-4xl md:text-5xl font-bold mb-16 text-balance">Let's Connect</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="glass-card border-border/30 hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <p className="text-foreground/60 text-sm mt-2">I'd love to hear from you! Feel free to reach out.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="neon-button w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm always interested in connecting with fellow developers, tech enthusiasts, and potential
                collaborators. Whether you have a project in mind or just want to chat about technology, feel free to
                reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass-card p-4 flex items-start gap-4 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-all">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Connect on social media</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:border-primary/80 transition-all hover:scale-110 group"
                    >
                      <Icon className="text-primary group-hover:text-accent transition-colors" size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
