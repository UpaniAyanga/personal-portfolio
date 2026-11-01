import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Money Lens",
      description:
        "A unified financial platform that brings together financial learning, market updates, personalized insights, and practical guidance to help users understand and manage their financial decisions with greater clarity. Managed a team of 7 while contributing technically to feature development, requirements gathering, project documentation, and overall product direction.",
      tags: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Project Management",
        "Requirements Gathering",
      ],
      codeLink: "",
      liveLink: "https://money-lens-marketing-two.vercel.app/",
      image: "/images/project-one.png",
    },
    {
      title: "Skill Gate Consultation Agency",
      description:
        "Designed and developed a modern, sleek, and responsive digital presence for Skill Gate Consultation Agency. The website was built to clearly communicate the organization's services, establish credibility, and provide visitors with an engaging and professional user experience across devices.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Documentation",
      ],
      codeLink: "",
      liveLink: "https://skillgate.lk/",
      image: "/images/project-two.png",
    },
    {
      title: "Shehon Learning Center",
      description:
        "An ongoing digital transformation project for Shehon Learning Center, involving the management and development of the organization's complete digital presence. The project includes a modern website and a Learning Management System (LMS) designed to support students, parents, and the organization's educational operations.",
      tags: [
        "Next.js",
        "React",
        "WordPress",
        "LMS",
        "Project Management",
        "SEO",
      ],
      codeLink: "",
      liveLink: "",
      image: "/images/project-three.png",
    },
    {
      title: "SEO & Digital Growth",
      description:
        "A collection of SEO projects demonstrating measurable improvements in organic visibility, keyword rankings, website performance, and search traffic. The project showcases real-world SEO strategy, technical optimization, content optimization, and performance monitoring through documented results.",
      tags: [
        "SEO",
        "Technical SEO",
        "Keyword Research",
        "On-Page SEO",
        "Google Analytics",
        "Search Console",
      ],
      codeLink: "",
      liveLink: "",
      pdfLink: "/SEO - Work KPI at Port City BPO.pdf",
      image: "/images/project-four.png",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>

            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">

                  {/* Image Section */}
                  <div className="w-full h-48 bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="project-content flex-1 flex flex-col p-5">

                    {/* Title */}
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="project-links mt-4 flex flex-wrap gap-2">

                      {/* Code Button */}
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}

                      {/* Live Button */}
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Live
                          </Link>
                        </Button>
                      )}

                      {/* PDF / Results Button */}
                      {project.pdfLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="mr-1 h-4 w-4" />
                            View Results
                          </Link>
                        </Button>
                      )}

                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}