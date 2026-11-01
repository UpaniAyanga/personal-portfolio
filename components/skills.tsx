
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BriefcaseBusiness,
  Code2,
  TrendingUp,
  Users,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Project Management",
      description:
        "Planning, coordinating, and delivering digital projects while aligning business objectives with technical execution.",
      icon: BriefcaseBusiness,
      skills: [
        "JIRA",
        "Trello",
        "ClickUp",
        "Agile",
        "Scrum",
        "SDLC",
        "Project Planning",
      ],
    },
    {
      category: "Software Engineering",
      description:
        "Understanding the software development lifecycle and contributing to the development of scalable digital solutions.",
      icon: Code2,
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "PHP",
        "Laravel",
        "Git & GitHub",
      ],
    },
    {
      category: "SEO & Digital Growth",
      description:
        "Improving digital visibility through search optimisation, technical SEO, content strategy, and performance analysis.",
      icon: TrendingUp,
      skills: [
        "Google Analytics 4",
        "Google Search Console",
        "Ahrefs",
        "Semrush",
        "Screaming Frog",
        "Technical SEO",
        "Keyword Research",
        "AEO / GEO",
      ],
    },
    {
      category: "Client & Stakeholder Management",
      description:
        "Translating client requirements into actionable deliverables while managing expectations and facilitating effective collaboration.",
      icon: Users,
      skills: [
        "Client Communication",
        "Requirement Gathering",
        "Stakeholder Management",
        "Figma",
        "Notion",
        "Microsoft Teams",
        "Documentation",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="space-y-12">
          {/* Section Heading */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              A blend of technical expertise, strategic thinking, and
              project leadership to turn business objectives into
              successful digital solutions.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = category.icon

              return (
                <div key={index} className="skill-card">
                  <Card className="h-full border-t-4 border-t-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <h3 className="text-xl font-bold">
                          {category.category}
                        </h3>
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 text-xs font-medium"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
