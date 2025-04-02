import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "R"],
  frameworks: ["PyTorch", "TensorFlow", "React", "Next.js", "Node.js", "Express"],
  tools: ["Git", "Docker", "AWS", "GCP", "Jupyter", "VS Code", "Figma"],
}

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="card fade-in">
            <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">Languages</h3>
            <div className="flex flex-wrap">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card fade-in delay-100">
            <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">Frameworks</h3>
            <div className="flex flex-wrap">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card fade-in delay-200">
            <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">Tools</h3>
            <div className="flex flex-wrap">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center fade-in delay-300">
          <Button className="btn flex items-center">
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,245,255,0.05),transparent_70%)]"></div>
      </div>
    </section>
  )
}

export default Resume

