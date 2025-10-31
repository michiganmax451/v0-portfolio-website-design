"use client"

import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background/50 to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-4xl md:text-5xl font-bold mb-16 text-balance">Who I Am</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 hover:border-primary/50 transition-all group">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WEBDEV-QyEw12BnUHKDQEll4xX8dt5XhFZVRZ.jpeg"
                alt="Manivel Mughilan"
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">B.Tech Computer Science</h3>
              <p className="text-foreground/80 leading-relaxed">
                I am a fresher at VIT Chennai pursuing B.Tech in Computer Science (Cyber Physical Systems), graduating
                in 2029. My passions lie in exploring software technologies across multiple domains.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">My Learning Journey</h4>
              {[
                "Exploring AI & Machine Learning",
                "Building scalable web applications",
                "Contributing to open-source projects",
                "Developing innovative tech solutions",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start glass-card p-3 rounded-lg hover:border-primary/50 transition-all"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 bg-primary/5 border-primary/30">
              <p className="text-foreground/80 italic">
                "Curiosity drives me to learn, build, and contribute to meaningful projects that push boundaries and
                create real impact."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
