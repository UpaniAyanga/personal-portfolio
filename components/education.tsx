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
    description:
      "12-weeks, full-time skills development and training program on IT, AWS Cloud, and professional skills.",
    imgSrc: "/badges/aws-badge.png",
    link: "https://www.credly.com/badges/a8f58f56-a54f-47a6-b509-4492a9b90cf5/public_url",
  },
  {
    title: "Postman Student Expert",
    description:
      "Recognized as a Postman Student Expert for API testing and collaboration skills.",
    imgSrc: "/badges/postman-badge.png",
    link: "https://badgr.com/public/assertions/Fz-byWUhSxuPQ8PQwAmwYA",
  },
  {
    title: "Cambridge Exams",
    description:
      "Achieved high scores in Cambridge English exams demonstrating proficiency in English. (Starters, Movers, Flyers, KET, PET, FCE)",
    imgSrc: "/badges/cambridge.png",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <div className="space-y-12">

          {/* Section Heading */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>

            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Degree */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="flex h-full flex-col">

                  <div className="bg-primary/10 p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full shrink-0">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        BSc (Hons) in Computer Science
                      </h3>

                      <p className="text-muted-foreground mt-1">
                        University of Westminster
                      </p>

              
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <p className="text-muted-foreground">
                      Studying a comprehensive computer science program,
                      currently on 4th year of study, with a focus on software
                      development, databases, client server architecture, and
                      system design. 
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>

            {/* A/L */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="flex h-full flex-col">

                  <div className="bg-primary/10 p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full shrink-0">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        GCE Advanced Level
                      </h3>

                      <p className="text-muted-foreground mt-1">
                        St. Paul's Girls School, Milagiriya
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <p className="text-muted-foreground">
                      Biological Stream (Physics, Chemistry, Biology)
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>

            {/* O/L */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="flex h-full flex-col">

                  <div className="bg-primary/10 p-6 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full shrink-0">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        GCE Ordinary Level
                      </h3>

                      <p className="text-muted-foreground mt-1">
                        Vidura College,
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Colombo
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <p className="text-muted-foreground">
                      Achieved 8 Distinction Passes (As) and 1 Very Good Pass
                      (B) with basket subjects English Literature, Commerce and
                      ICT.
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>

          </div>

          {/* Certifications */}
<div className="mt-16">
  <h3 className="mb-6 text-center text-2xl font-semibold">
    Certifications & Badges
  </h3>

  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    loop
    spaceBetween={24}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="py-4"
  >
    {badges.map(({ title, description, imgSrc, link }) => (
      <SwiperSlide key={title} className="!h-[400px]">
        <Card className="flex h-[400px] flex-col items-center p-6 text-center">

          {/* Badge Image */}
          <div className="flex h-[140px] w-full shrink-0 items-center justify-center">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={title}
                  className="h-28 w-auto object-contain"
                />
              </a>
            ) : (
              <img
                src={imgSrc}
                alt={title}
                className="h-28 w-auto object-contain"
              />
            )}
          </div>

          {/* Title */}
          <div className="flex h-[60px] w-full shrink-0 items-center justify-center">
            <h4 className="text-lg font-bold">
              {title}
            </h4>
          </div>

          {/* Description */}
          <div className="flex flex-1 items-start justify-center pt-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

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