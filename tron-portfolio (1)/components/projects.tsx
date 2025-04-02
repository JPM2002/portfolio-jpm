import { GithubIcon, ExternalLinkIcon } from "lucide-react"

const projects = [
  {
    title: "SafeCall",
    description: "HenHacks winner - A secure communication platform with real-time encryption and privacy features.",
    tags: ["React", "Node.js", "WebRTC", "Encryption"],
    github: "#",
    demo: "#",
  },
  {
    title: "Journal-Ai",
    description: "AI-powered journaling application that provides insights and sentiment analysis on your entries.",
    tags: ["Python", "NLP", "React", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fire Estimator",
    description: "Machine learning model to predict wildfire spread patterns using satellite imagery and weather data.",
    tags: ["PyTorch", "Computer Vision", "GIS", "Data Science"],
    github: "#",
    demo: "#",
  },
  {
    title: "Manim Visualizer",
    description: "Educational tool for creating mathematical animations and visualizations for complex concepts.",
    tags: ["Python", "Manim", "Mathematics", "Education"],
    github: "#",
    demo: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              <div className="flex flex-wrap mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-[var(--accent)] hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5 mr-1" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="text-[var(--accent)] hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="h-5 w-5 mr-1" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,245,255,0.05),rgba(0,0,0,0))]"></div>
      </div>
    </section>
  )
}

export default Projects

