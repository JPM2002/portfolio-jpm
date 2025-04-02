"use client"

import { useEffect, useRef } from "react"
import { ChevronDownIcon } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

const Hero = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const phrases = ["AI Engineer", "ML Developer", "Systems Thinker"]
    let i = 0,
      j = 0
    let currentPhrase: string[] = []
    let isDeleting = false
    let isEnd = false

    function loop() {
      isEnd = false
      if (!typewriterRef.current) return

      typewriterRef.current.innerHTML = currentPhrase.join("")

      if (i < phrases.length) {
        // Start typing
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
        }

        // Start deleting
        if (isDeleting && j > 0) {
          currentPhrase.pop()
          j--
        }

        // If word is complete
        if (j === phrases[i].length) {
          isEnd = true
          isDeleting = true
        }

        // If deleting is complete
        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i = (i + 1) % phrases.length // Move to next phrase
        }
      }

      // Typing speed
      const spedUp = 50
      const normalSpeed = 150
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(loop, time)
    }

    loop()
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow fade-in">Javier Pozo Miranda</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-[var(--accent)] fade-in delay-100">
          AI Engineer • ML Developer • CS @ Penn State
        </h2>
        <div className="h-8 mb-8 fade-in delay-200">
          <span className="text-lg md:text-xl" ref={typewriterRef}></span>
          <span className="text-[var(--accent)] animate-pulse">|</span>
        </div>
        <button className="btn fade-in delay-300" onClick={() => scrollToSection("projects")}>
          View Projects
        </button>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer bounce fade-in delay-500"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDownIcon className="h-8 w-8 text-[var(--accent)]" />
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </section>
  )
}

export default Hero

