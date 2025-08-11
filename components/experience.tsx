import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Co-Founder & Project Manager",
      company: "Beyond Tech, Sri Lanka",
      period: "June 2025 - Present",
      location: "Sri Lanka",
      logo: "/logos/beyond-tech.png",
      link: "https://beyondtech.com.lk/",
      achievements: [
        "Successfully launched a tech startup focused on innovative software solutions",
        "Currently working with 2 major clients, delivering high-quality software products",
        "Developed and managed multiple projects from concept to completion, ensuring alignment with business goals",
        "Designed and implemented solutions that consistently exceeded performance benchmarks",
        "Streamlined project planning by working closely with stakeholders to define clear requirements and deliverables",
        "Orchestrated the successful release of major application versions",
        "Emerged as the primary point of contact for both project stakeholders and management",
      ],
    },
    {
      title: "Associate Software Engineer",
      period: "Nov 2023 - Aug 2025",
      company: "XGen Group, Australia",
      products: "Smart Credit, Smart Collect, SmartOps App",
      logo: "/logos/xgen-logo.png",
      link: "https://xgengroup.com.au",
      achievements: [
        "Designed and implemented dashboards and custom reports for real-time business insights.",
        "Created complex SQL queries for advanced analytics and reporting requirements.",
        "Developed REST APIs to support SmartOps App integrations.",
        "Revamped legacy codebase by breaking down monolithic “spaghetti code” into smaller, reusable functions.",
        "Improved image upload speed by transitioning from bytecode storage to GZIP-compressed API calls",
        "Handled UAT, QA, and production deployments, ensuring smooth releases.",
        "Responded to live production issues to maintain high service availability.",
        "Authored User Requirement Specifications (URS) for clear and actionable development goals.",
        "Participated in stakeholder and client meetings to discuss CR feasibility and project timelines.",
        "Conducted release planning and scoping, aligning deliverables with business priorities.",
        "Managed expectations and communication between business teams (clients), and developers.",
        "Created Epics and User Stories for structured backlog management.",
        "Provided customer support when needed to ensure high client satisfaction."
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "XGen Group, Australia",
      period: "April 2023 - November 2023",
      products: "Smart Trade Credit, Smart Signature",
      logo: "/logos/xgen-logo.png",
      link: "https://xgengroup.com.au",
      achievements: [
        "Clients : Fletcher, Tradelink, Laminex, United Petroleum, Equifax, Cookers",
        "Assisted with maintenance tasks and implemented Change Requests (CRs) to improve business workflows.",
        "Supported a major PHP version upgrade from 5.5 to 8.2, ensuring code compatibility and improved performance.",
        "Worked with jQuery to enhance user interaction and frontend responsiveness.",
        "Resolved system bugs through detailed debugging and testing, ensuring stable product releases."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-muted-foreground">{experience.company}</p>
                        </div>
                        {experience.products && (
                          <p className="text-muted-foreground">{experience.products}</p>
                        )}
                      </div>

                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <a href={experience.link} target="_blank" rel="noopener noreferrer">
                          <img src={experience.logo} alt={`${experience.company} logo`} className="h-8 w-auto mb-2" />
                        </a>
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
