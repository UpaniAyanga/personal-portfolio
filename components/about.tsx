import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in JavaScript, TypeScript, JQuery, MySQL, Oracle, AWS, PHP, and Laravel",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Project Management",
      description: "Proficient with Agile methodologies, ensuring timely delivery and quality assurance",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Tools",
      description: "Experienced with Git, VS Code, PHP Storm, SQL Developer, Postman, Docker, Jira, Figma for efficient development and collaboration",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Collaboration",
      description: "Coordinated with remote teams across the world",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced Associate Software Engineer with over two years of hands-on Full Stack Development experience, specializing in JavaScript, TypeScript, PHP, Laravel, and AWS.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                As a dedicated professional, I thrive at the intersection of technical excellence and project leadership. My experience as a software engineer and web developer gives me a strong grasp of building robust digital solutions.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                I ensure projects are delivered on time and align with client goals, managing the full lifecycle from planning to post-launch support.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                My skills enable me to lead teams, bridge technical gaps, and deliver quality products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
