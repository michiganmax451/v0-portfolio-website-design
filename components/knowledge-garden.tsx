"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Lightbulb, Share2, Clock, TrendingUp } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  category: "technical" | "insights" | "tutorials" | "research"
  readTime: number
  date: string
  trending: boolean
  color: string
}

export default function KnowledgeGarden() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const articles: Article[] = [
    {
      id: "synthesis-thinking",
      title: "The Art of Synthesis: Connecting Disparate Knowledge",
      excerpt: "How bridging multiple domains creates innovative solutions that single-domain experts often miss.",
      content: `In the age of specialization, the ability to synthesize knowledge across domains becomes increasingly valuable...`,
      tags: ["Philosophy", "Innovation", "Systems Thinking"],
      category: "insights",
      readTime: 8,
      date: "2024-01-15",
      trending: true,
      color: "#00d4ff",
    },
    {
      id: "ml-optimization",
      title: "Advanced ML Optimization Techniques for Production Systems",
      excerpt: "Deep dive into model compression, quantization, and inference optimization strategies.",
      content: `Production ML systems face unique challenges beyond training accuracy...`,
      tags: ["Machine Learning", "Performance", "Production"],
      category: "technical",
      readTime: 12,
      date: "2024-01-12",
      trending: false,
      color: "#00ff88",
    },
    {
      id: "fullstack-architecture",
      title: "Building Scalable Full-Stack Applications",
      excerpt: "Architecture patterns, database design, and deployment strategies for high-scale applications.",
      content: `Scaling applications from prototype to production requires thoughtful architectural decisions...`,
      tags: ["Architecture", "Scaling", "Backend"],
      category: "tutorials",
      readTime: 15,
      date: "2024-01-10",
      trending: true,
      color: "#7b2cbf",
    },
    {
      id: "future-ai",
      title: "The Future of AI: From GPT to Agentic Systems",
      excerpt: "Exploring the trajectory of AI from language models to autonomous agent systems.",
      content: `The rapid evolution of AI technology is shifting from static models to dynamic, agentic systems...`,
      tags: ["AI", "Future", "Agents"],
      category: "research",
      readTime: 10,
      date: "2024-01-08",
      trending: true,
      color: "#ff006e",
    },
    {
      id: "web-performance",
      title: "Web Performance Optimization: A Comprehensive Guide",
      excerpt: "From critical rendering path to lighthouse scores - optimizing every aspect of web performance.",
      content: `Web performance isn't just about speed; it directly impacts user satisfaction and conversion rates...`,
      tags: ["Frontend", "Performance", "UX"],
      category: "technical",
      readTime: 14,
      date: "2024-01-05",
      trending: false,
      color: "#ffbe0b",
    },
    {
      id: "learning-velocity",
      title: "Accelerating Your Learning Velocity",
      excerpt: "Techniques for rapid skill acquisition and effective knowledge retention in tech.",
      content: `Learning velocity - the rate at which you acquire and integrate new knowledge - is a crucial skill...`,
      tags: ["Learning", "Growth", "Career"],
      category: "insights",
      readTime: 9,
      date: "2024-01-01",
      trending: false,
      color: "#00d4ff",
    },
  ]

  const categories = [
    { id: "technical", label: "Technical", icon: "⚙️", count: 2 },
    { id: "insights", label: "Insights", icon: "💡", count: 2 },
    { id: "tutorials", label: "Tutorials", icon: "📚", count: 1 },
    { id: "research", label: "Research", icon: "🔬", count: 1 },
  ]

  const filteredArticles = selectedCategory ? articles.filter((a) => a.category === selectedCategory) : articles

  return (
    <section id="knowledge" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="section-heading text-5xl md:text-6xl font-bold mb-4 text-balance">Knowledge Garden</h2>
          <p className="text-lg text-foreground/60 font-light">
            Cultivating insights at the intersection of technology, innovation, and growth
          </p>
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-12 glass-card p-8 rounded-xl border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {filteredArticles[0].trending && (
                    <Badge className="bg-accent/30 text-accent border border-accent/50">
                      <TrendingUp size={12} className="mr-1" />
                      Trending
                    </Badge>
                  )}
                  <Badge
                    className="text-xs"
                    style={{
                      backgroundColor: `${filteredArticles[0].color}22`,
                      borderColor: filteredArticles[0].color,
                      color: filteredArticles[0].color,
                    }}
                  >
                    {filteredArticles[0].category}
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{filteredArticles[0].title}</h3>
                <p className="text-foreground/70 mb-4">{filteredArticles[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {filteredArticles[0].readTime} min read
                  </span>
                  <span>{new Date(filteredArticles[0].date).toLocaleDateString()}</span>
                </div>
              </div>
              <Lightbulb
                size={48}
                className="flex-shrink-0"
                style={{ color: filteredArticles[0].color, opacity: 0.3 }}
              />
            </div>
            <Button className="quantum-button">
              Read Full Article
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? "bg-primary/30 text-primary border border-primary/50"
                : "bg-background/50 text-foreground/70 border border-primary/20 hover:border-primary/50"
            }`}
          >
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary/30 text-primary border border-primary/50"
                  : "bg-background/50 text-foreground/70 border border-primary/20 hover:border-primary/50"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="glass-card border-border/30 transition-all duration-300 hover:border-primary/50 cursor-pointer flex flex-col group"
              onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-background/50">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: "100%",
                    background: article.color,
                    boxShadow: `0 0 8px ${article.color}`,
                  }}
                />
              </div>

              <CardHeader className="pt-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    {article.trending && (
                      <Badge className="mb-2 bg-accent/30 text-accent border border-accent/50 text-xs">
                        <TrendingUp size={12} className="mr-1" />
                        Trending
                      </Badge>
                    )}
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </div>
                  <BookOpen size={24} style={{ color: article.color, opacity: 0.3 }} />
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-foreground/70 text-sm leading-relaxed">{article.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="text-xs"
                      style={{
                        backgroundColor: `${article.color}15`,
                        borderColor: `${article.color}40`,
                        color: article.color,
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Article Meta & Actions */}
                <div className="pt-4 border-t border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-foreground/60">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime} min
                    </span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Share2 size={14} />
                  </Button>
                </div>

                {expandedArticle === article.id && (
                  <div className="mt-4 pt-4 border-t border-primary/20 animate-fade-in-up">
                    <p className="text-sm text-foreground/70 leading-relaxed">{article.content}</p>
                    <Button className="w-full mt-4 quantum-button" size="sm">
                      Read Full Article
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="glass-card p-8 rounded-xl border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated on New Insights</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified when new articles are published on technology, innovation, and growth.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background/50 border border-primary/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <Button className="quantum-button">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
