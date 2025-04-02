import { BriefcaseIcon, GraduationCapIcon, CodeIcon } from "lucide-react"

const experiences = [
  {
    title: "AI Intern",
    company: "CentralReach",
    period: "May 2023 - Aug 2023",
    description:
      "Developed machine learning models for behavioral health data analysis and prediction. Implemented NLP solutions for automated report generation.",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    title: "ML Team Lead",
    company: "Nittany AI Advance",
    period: "Jan 2023 - Present",
    description:
      "Leading a team of developers to create AI solutions for campus challenges. Designed and implemented computer vision systems for accessibility applications.",
    icon: <CodeIcon className="h-6 w-6" />,
  },
  {
    title: "Proctor",
    company: "Math Department",
    period: "Sep 2022 - Dec 2022",
    description:
      "Assisted professors with exam administration and grading. Provided support to students during examination periods.",
    icon: <GraduationCapIcon className="h-6 w-6" />,
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ top: "1.5rem" }}></div>

                {/* Icon */}
                <div className="absolute left-5 top-6 w-10 h-10 rounded-full bg-black border border-[var(--accent)] flex items-center justify-center -translate-x-1/2 glow">
                  {exp.icon}
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-[var(--accent)]">{exp.title}</h3>
                  <h4 className="text-lg mb-1">{exp.company}</h4>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,255,0.05),transparent_70%)]"></div>
      </div>
    </section>
  )
}

export default Experience

