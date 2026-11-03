import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
     {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Project Management",
      description: "Proficient with Agile methodologies, ensuring timely delivery and quality assurance",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Software Engineering",
      description: "Expertise in JavaScript, TypeScript, JQuery, MySQL, Oracle, AWS, PHP, and Laravel",
    },
  
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "SEO & Digital Growth",
      description: "Improving online visibility through search optimisation, technical SEO, content strategy, and performance analysis.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Client & Stakeholder Management",
      description: "Translating client requirements into actionable deliverables, managing expectations, and facilitating effective team collaboration.",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20">
        <div className="section-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      I'm a professional passionate about turning ideas into meaningful digital solutions. With 3 years of professional experience across project management, software engineering, and SEO, I bring a balanced perspective that connects business goals with technical execution. </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                My experience spans managing digital projects, coordinating cross-functional teams, overseeing the software development lifecycle, and ensuring solutions align with client expectations and business objectives. I enjoy working at the intersection of technology, strategy, and people, where effective collaboration and structured execution turn complex requirements into successful outcomes.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                Beyond project delivery, I'm passionate about continuously exploring emerging technologies, improving digital experiences, and finding smarter ways to solve real-world problems.
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
