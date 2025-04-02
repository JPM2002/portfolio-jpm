import { TrophyIcon, MicIcon, BookIcon } from "lucide-react"

const awards = [
  {
    title: "Keynote Speaker",
    event: "TGIF 2024",
    description:
      "Delivered keynote address on 'The Future of AI in Healthcare' at the Technology and Growth Innovation Forum.",
    icon: <MicIcon className="h-6 w-6" />,
  },
  {
    title: "Hackathon Winner",
    event: "SafeCall Project",
    description:
      "First place at HenHacks for developing an encrypted communication platform with privacy-focused features.",
    icon: <TrophyIcon className="h-6 w-6" />,
  },
  {
    title: "UN Geneva Publication",
    event: "Research Paper",
    description:
      "Published research on AI ethics and governance frameworks in collaboration with the United Nations Geneva office.",
    icon: <BookIcon className="h-6 w-6" />,
  },
]

const Awards = () => {
  return (
    <section id="awards" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Awards & Speaking</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-black border border-[var(--accent)] flex items-center justify-center glow">
                  {award.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-center text-[var(--accent)] mb-2">{award.title}</h3>
              <h4 className="text-lg text-center mb-4">{award.event}</h4>
              <p className="text-center">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,245,255,0.05),rgba(0,0,0,0))]"></div>
      </div>
    </section>
  )
}

export default Awards

