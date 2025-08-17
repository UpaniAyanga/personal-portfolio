"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from "react";

export default function Hero() {
     const sentences = [
    "Web Developer",
    "Project Manager",
    "Technical Writer"
  ];

  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);


  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 80;

    if (!isDeleting && charIndex === sentences[sentenceIndex].length) {
      // Pause before deleting
      typingSpeed = 175;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      // Move to next sentence
      setIsDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }

    const timeout = setTimeout(() => {
      const currentSentence = sentences[sentenceIndex];
      const updatedText = isDeleting
        ? currentSentence.substring(0, charIndex - 1)
        : currentSentence.substring(0, charIndex + 1);

      setText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <section
      id="home"
      className="relative pt-8 md:pt-8 pb-20 md:pb-28 flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
          {/* Highlight Badges */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-6">
            <div className="group px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-600 rounded-full border border-blue-500/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">2+ Years Experience</span>
              </div>
            </div>
            <div className="group px-4 py-2 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600 rounded-full border border-green-500/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">Full Stack Developer</span>
              </div>
            </div>
            <div className="group px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-600 rounded-full border border-orange-500/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">AWS Cloud Practitioner</span>
              </div>
            </div>
            <div className="group px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-600 rounded-full border border-purple-500/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">Project Manager</span>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Welcome, I&apos;m <span className="gradient-text">Upani Lokusuriya</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-2xl text-muted-foreground md:text-3xl font-light">
               {mounted ? text : "Web Developer"} 
              <span className="cursor">|</span>
            </p>
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
            `}</style>
          </div>

          <div className="max-w-[600px] mx-auto space-y-2">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridging the Gap Between Code and Customers
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              I specialize in crafting seamless digital experiences that connect businesses with their users, with a focus on full stack development and project management.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg bg-transparent">
                <a href="/upani_lokusuriya_resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <Button variant="ghost" size="lg" asChild className="rounded-full">
              <Link href="https://github.com/UpaniAyanga" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="rounded-full">
              <Link href="https://www.linkedin.com/in/upani-l/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="rounded-full">
              <Link href="mailto:upanilokusuriya@gmail.com">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          {/* Specialization */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground/60 uppercase tracking-wider mb-4">Specializing In</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Full Stack Development</span>
              <span className="text-muted-foreground/40">•</span>
              <span>Project Management</span>
              <span className="text-muted-foreground/40">•</span>
              <span>System Design</span>
              <span className="text-muted-foreground/40">•</span>
              <span>DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
