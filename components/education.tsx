"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const badges = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "12-weeks, full-time skills development and training program on IT, AWS Cloud, and professional skills.",
    imgSrc: "/badges/aws-badge.png",
    link: "https://www.credly.com/badges/a8f58f56-a54f-47a6-b509-4492a9b90cf5/public_url"
  },
  {
    title: "Postman Student Expert",
    description: "Recognized as a Postman Student Expert for API testing and collaboration skills.",
    imgSrc: "/badges/postman-badge.png",
    link: "https://badgr.com/public/assertions/Fz-byWUhSxuPQ8PQwAmwYA"
  },
  {
    title: "Cambridge Exams",
    description: "Achieved high scores in Cambridge English exams demonstrating proficiency in English. (Starters, Movers, Flyers, KET, PET, FCE)",
    imgSrc: "/badges/cambridge.png",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          {/* Degree Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Science: Computer Science (reading)</h3>
                    <p className="text-muted-foreground">University of Westminster (2023 - 2028)</p>
                    <p className="text-muted-foreground">Associated with IIT</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Studying a comprehensive computer science program, currently on 4th year of study, with a focus on software development,
                    databases, client server architecture, and system design. Gained a strong foundation in computer science
                    principles and engineering practices that have been instrumental in my professional career.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges Slider */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications & Badges</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-4"
            >
              {badges.map(({ title, description, imgSrc, link }, idx) => (
                <SwiperSlide key={idx}>
                  <Card className="flex flex-col items-center p-6 space-y-4 text-center">
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <img src={imgSrc} alt={title} className="h-30 w-auto object-contain" />
                        <h4 className="text-lg font-bold mt-4">{title}</h4>
                      </a>
                    ) : (
                      <>
                        <img src={imgSrc} alt={title} className="h-30 w-auto object-contain" />
                        <h4 className="text-lg font-bold">{title}</h4>
                      </>
                    )}
                    <p className="text-muted-foreground text-sm">{description}</p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
