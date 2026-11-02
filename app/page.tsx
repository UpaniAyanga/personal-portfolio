import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upani Lokusuriya | Project Manager & Software Engineer",
  description:
    "Upani Lokusuriya is a software engineer and project manager specializing in software development, digital project delivery, SEO, and building scalable digital solutions.",
   verification: {
    google: "_ORzhivXvIafMo3-psxK3vbLL_qnvGyDPLx_N8mNxX4",
  },
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
  }

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}
