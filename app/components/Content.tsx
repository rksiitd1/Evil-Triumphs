'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Content() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    {
      title: "The Nature of Evil",
      content: "In the grand tapestry of existence, evil often appears as a dark thread, weaving its way through the fabric of reality with unsettling ease. Its triumph is not merely a possibility, but a recurring theme in human history and personal experience. But why does evil seem to prevail so frequently, despite our innate desire for good to overcome?"
    },
    {
      title: "The Allure of Power",
      content: "One reason for evil's apparent success lies in its association with power. Those who embrace darker paths often find themselves with access to tools and methods that those constrained by morality cannot or will not use. This imbalance can lead to short-term victories for evil, creating the illusion of its invincibility."
    },
    {
      title: "The Silence of the Good",
      content: "Perhaps more insidious than the actions of evil itself is the inaction of good. When those who recognize right from wrong choose to remain silent or inactive in the face of injustice, they inadvertently pave the way for evil to flourish. This passive acceptance of wrongdoing is often more damaging than the acts of those who actively choose to do harm."
    },
    {
      title: "The Complexity of Morality",
      content: "The world is rarely black and white, and what appears evil to one may seem justified to another. This moral ambiguity can lead to situations where evil triumphs simply because it is not universally recognized as such. The complexity of ethical decisions in a nuanced world often favors those willing to act decisively, even if their actions are morally questionable."
    },
    {
      title: "Hope in Resistance",
      content: "Yet, in acknowledging evil's triumphs, we must not lose sight of the power of resistance. Every act of kindness, every stand against injustice, no matter how small, serves as a counterpoint to evil's advance. It is through these persistent efforts that the tide of darkness can be gradually turned, even if victory is not immediately apparent."
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-crimson-pro font-bold mb-8 text-center">
          The Triumph of Evil: A Philosophical Exploration
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <nav className="sticky top-8">
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <button
                      className={`text-left w-full py-2 px-4 rounded transition-colors ${
                        activeSection === index ? 'bg-red-900 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => setActiveSection(index)}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="md:col-span-2">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeSection === index ? 1 : 0, y: activeSection === index ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className={`mb-8 ${activeSection === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-2xl font-crimson-pro font-bold mb-4">{section.title}</h3>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

