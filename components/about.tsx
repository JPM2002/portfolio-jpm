"use client"

import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="card flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[var(--accent)] glow">
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Javier Pozo Miranda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="card">
            <p className="mb-6 leading-relaxed">
              I'm an AI Engineer and Machine Learning Developer passionate about creating intelligent systems that solve
              real-world problems. Currently studying Computer Science at Penn State, I focus on developing AI solutions
              that are both innovative and ethical.
            </p>
            <p className="mb-6 leading-relaxed">
              My expertise spans across machine learning, natural language processing, and computer vision. I believe in
              the power of AI to transform industries and improve lives, and I'm committed to pushing the boundaries of
              what's possible.
            </p>
            <Button className="btn" onClick={() => scrollToSection("projects")}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1),transparent_70%)]"></div>
      </div>
    </section>
  )
}

export default About

