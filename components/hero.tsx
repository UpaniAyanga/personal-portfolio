"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

// Defined outside the component so the typing effect doesn't restart on every render
const SENTENCES = ["Stratergy to Successful Delivery"]

const BADGES = [
  {
    label: "3 Years of Proffessional Experience",
    box: "from-blue-500/10 to-blue-600/10 text-blue-600 border-blue-500/20",
    dot: "bg-blue-500",
  },
  {
    label: "Project Manager",
    box: "from-purple-500/10 to-purple-600/10 text-purple-600 border-purple-500/20",
    dot: "bg-purple-500",
  },
]

export default function Hero() {
  const [text, setText] = useState("")
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typing effect
  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 80

    if (!isDeleting && charIndex === SENTENCES[sentenceIndex].length) {
      typingSpeed = 175
      setIsDeleting(true)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setSentenceIndex((prev) => (prev + 1) % SENTENCES.length)
    }

    const timeout = setTimeout(() => {
      const current = SENTENCES[sentenceIndex]
      setText(
        isDeleting
          ? current.substring(0, charIndex - 1)
          : current.substring(0, charIndex + 1)
      )
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1)
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, sentenceIndex])

  // Scroll-linked motion: the portrait drifts, tilts and shrinks slightly as you
  // scroll away, while the text lifts and fades. Writes straight to styles inside
  // requestAnimationFrame, so scrolling never triggers React re-renders.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const y = Math.min(window.scrollY, window.innerHeight)
      const p = y / window.innerHeight // 0 → 1 across the first viewport

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${y * 0.14}px, 0) rotate(${
          p * 8
        }deg) scale(${1 - p * 0.1})`
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-y * 0.07}px, 0)`
        contentRef.current.style.opacity = String(Math.max(0, 1 - p * 1.15))
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = String(Math.max(0, 1 - p * 5))
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
  id="home"
  className="relative flex min-h-[auto] items-center overflow-hidden pt-2 pb-10 md:pt-4 md:pb-12"
>
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* ───────── Text column ───────── */}
          <div
            ref={contentRef}
            className="order-2 flex flex-col items-center text-center will-change-transform lg:order-1 lg:items-start lg:text-left"
          >
            {/* Highlight badges */}
            <div className="rise mt-4 mb-6 hidden flex-wrap justify-center gap-3 md:flex lg:justify-start" style={{ ["--d" as string]: "0.55s" }}>
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className={`rounded-full border bg-gradient-to-r px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${b.box}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 animate-pulse rounded-full ${b.dot}`} />
                    <span className="text-xs font-semibold">{b.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Heading + typing line */}
            <div className="space-y-4">
              <h1
                className="rise text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text"
                style={{ ["--d" as string]: "0.7s" }}
              >
                Driving Digital Projects from
              </h1>
              <p
                className="rise text-2xl font-light text-muted-foreground md:text-3xl"
                style={{ ["--d" as string]: "0.85s" }}
              >
                {mounted ? text : "Strategy to Successful Deliver"}
                <span className="cursor">|</span>
              </p>
            </div>

            {/* Intro */}
            <div
              className="rise mt-6 max-w-[34rem] space-y-2"
              style={{ ["--d" as string]: "1s" }}
            >
              <p className="text-xl leading-relaxed text-muted-foreground">
                I bridge the gap between business objectives and technical execution.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground/80">
               Bringing together project management, software engineering, and SEO expertise to deliver meaningful digital solutions.
               Experienced in managing cross-functional teams, coordinating the SDLC, and translating business requirements into actionable deliverables.

              </p>
            </div>

            {/* Actions */}
            <div
              className="rise mt-9 flex flex-col gap-4 sm:flex-row"
              style={{ ["--d" as string]: "1.15s" }}
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent px-8 py-6 text-lg"
              >
                <a href="/upani_lokusuriya_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
            </div>

            {/* Socials */}
            <div
              className="rise mt-6 flex gap-2"
              style={{ ["--d" as string]: "1.25s" }}
            >
              <Button variant="ghost" size="lg" asChild className="rounded-full">
                <Link href="https://github.com/UpaniAyanga" target="_blank" rel="noopener noreferrer">
                  <Github className="h-7 w-7" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full">
                <Link href="https://www.linkedin.com/in/upani-l/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-7 w-7" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full">
                <Link href="mailto:upanilokusuriya@gmail.com">
                  <Mail className="h-7 w-7" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>

            {/* Specialization */}
            <div
              className="rise mt-6 w-full border-t border-border/50 pt-6"
              style={{ ["--d" as string]: "1.35s" }}
            >
              <p className="mb-4 text-sm text-bold">Specializing in</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-md text-muted-foreground lg:justify-start">
                <span>Project Management</span>
                <span className="text-muted-foreground/40">•</span>
                <span>Full Stack Development</span>
                <span className="text-muted-foreground/40">•</span>
                <span>Client Handling</span>
              </div>
            </div>
          </div>

          {/* ───────── Portrait column ───────── */}
        <div className="order-1 mt-10 flex justify-center translate-x-2 lg:order-2 lg:mt-[-4rem] lg:translate-x-6 lg:justify-end">
          {/* Outer wrapper: driven by scroll */}
          <div ref={imageRef} className="will-change-transform">
            {/* Inner wrapper: one-time entrance */}
            <div className="pop relative aspect-square w-48 sm:w-56 md:w-72 lg:w-[30rem]">
              {/* Soft glow that picks up the blue of the photo */}
              <div className="absolute inset-6 -z-10 rounded-full bg-blue-400/30 blur-3xl" />

              {/* Slowly rotating dashed ring */}
              <div className="spin absolute -inset-3 rounded-full border-2 border-dashed border-blue-400/50 md:-inset-4" />

              <Image
                src="/upani-profile.png"
                alt="Portrait of Upani Lokusuriya"
                fill
                priority
                sizes="(min-width: 1024px) 416px, (min-width: 768px) 288px, 224px"
                className="rounded-full object-cover shadow-2xl shadow-blue-500/20"
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        /* One orchestrated entrance: portrait first, then the text in sequence */
        .pop {
          opacity: 0;
          animation: pop 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s forwards;
        }
        @keyframes pop {
          from { opacity: 0; transform: scale(0.88) rotate(-4deg); }
          to   { opacity: 1; transform: scale(1) rotate(0); }
        }

        .rise {
          opacity: 0;
          animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) var(--d, 0s) forwards;
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .spin { animation: spin 40s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .cue { animation: cue 1.6s ease-in-out infinite; }
        @keyframes cue {
          0%   { transform: translateY(0); opacity: 1; }
          70%  { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pop, .rise { animation: none; opacity: 1; }
          .spin, .cue, .cursor { animation: none; }
        }
      `}</style>
    </section>
  )
}