"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, responsive web applications using React and Next.js with beautiful UI/UX.",
      features: ["Responsive Design", "Performance", "SEO Optimized"],
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Developing intelligent systems that leverage machine learning for real-world applications.",
      features: ["ML Models", "NLP", "Computer Vision"],
    },
    {
      icon: Zap,
      title: "Technical Consultation",
      description: "Advising on technology stack selection and best practices for scalable applications.",
      features: ["Architecture", "Best Practices", "Optimization"],
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background/50 to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-6 text-balance">What I Aim to Offer</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            As I continue my learning journey, I aspire to offer solutions and services that bridge creativity and
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card
                key={i}
                className="glass-card border-border/30 hover:border-primary/50 transition-all hover:scale-105 group flex flex-col"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/50 group-hover:to-accent/50 transition-all">
                    <Icon className="text-primary group-hover:text-accent transition-colors" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-foreground/70">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="text-primary font-semibold text-sm">Coming Soon</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
