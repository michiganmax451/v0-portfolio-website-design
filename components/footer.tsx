"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 px-4 border-t border-border/30 bg-gradient-to-t from-card/50 to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Manivel Mughilan
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              B.Tech CS Student | Synthesis Engineer | AI & Systems Innovator
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Knowledge", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Latest Work</h4>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Synthesizing insights across AI, systems engineering, and innovation architecture. Exploring the
              intersection of machine learning, scalable systems, and human-centered design.
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/60 text-sm">© {currentYear} Manivel Mughilan T S. All rights reserved.</p>
            <p className="text-foreground/50 text-xs mt-2">
              Designed & Built with care using Next.js, React & Tailwind CSS
            </p>
          </div>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="bg-primary/10 border-primary/30 hover:bg-primary/20"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
