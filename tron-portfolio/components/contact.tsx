"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be where you'd handle the form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message (in a real app)
    alert("Message sent! (This is a demo)")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card fade-in">
            <h3 className="text-xl font-bold mb-6 text-[var(--accent)]">Get In Touch</h3>
            <p className="mb-8">
              I'm always open to new opportunities, collaborations, or just a friendly chat about AI and technology.
              Feel free to reach out!
            </p>

            <div className="flex flex-col space-y-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-[var(--accent)] hover:text-white transition-colors"
              >
                <MailIcon className="h-5 w-5 mr-3" />
                <span>contact@example.com</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[var(--accent)] hover:text-white transition-colors"
              >
                <GithubIcon className="h-5 w-5 mr-3" />
                <span>github.com/javierpozo</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[var(--accent)] hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-5 w-5 mr-3" />
                <span>linkedin.com/in/javierpozo</span>
              </a>
            </div>
          </div>

          <div className="card fade-in delay-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-[var(--accent)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-[var(--accent)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-[var(--accent)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input"
                  required
                ></textarea>
              </div>

              <Button type="submit" className="btn w-full flex items-center justify-center">
                <SendIcon className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,245,255,0.05),rgba(0,0,0,0))]"></div>
      </div>
    </section>
  )
}

export default Contact

