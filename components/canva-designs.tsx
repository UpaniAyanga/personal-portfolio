"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function CanvaDesigns() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const designs = [
    { src: "/designs/design1.png", alt: "Beyond Tech Logo" },
    { src: "/designs/design2.png", alt: "Avatar Design" },
    { src: "/designs/design3.png", alt: "Avatar design with bg" },
    { src: "/designs/design4.png", alt: "Lean six sigma banner" },
    { src: "/designs/design5.png", alt: "Price breakdown chart" },
    { src: "/designs/design6.png", alt: "Linkedin banner for beyond tech" },
    { src: "/designs/design7.png", alt: "Krunchlab packaging design" },
    { src: "/designs/design8.png", alt: "Krunchlab packaging design" },
    { src: "/designs/design9.png", alt: "Krunchlab packaging design" },
    { src: "/designs/design10.png", alt: "Krunchlab logo" },
    { src: "/designs/design11.png", alt: "Hercare mobile app design" },
    { src: "/designs/design12.png", alt: "Hercare mobile app design" }
  ]

  return (
    <div id="canva-designs">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Designs</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            A showcase of logos, posters, and creative designs I’ve made as a hobby.
          </p>
        </div>

        <Card className="p-4">
          <CardContent>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {designs.map((design, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 flex justify-center items-center h-[300px] cursor-pointer"
                    onClick={() => setSelectedImage(design.src)}
                  >
                    <img
                      src={design.src}
                      alt={design.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </CardContent>
        </Card>

        {/* Custom modal overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged design"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  )
}
