import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'VYNR Ecosystem',
    description:
      'VYNR is my flagship AI-driven ecosystem — a digital movement exploring dark masculinity, growth mindset, and human evolution through technology. Built from strategic prompt engineering, storytelling design, and content architecture, VYNR showcases how creative systems can scale with AI synergy.',
  },
  {
    title: 'Fatloss Operating System (FOS)',
    description:
      'A self-built system that merges behavioral design and habit engineering to create sustainable body transformation. The foundation of the FOS ebook was developed through AI-driven workflow structuring, combining human experience with machine-assisted clarity.',
  },
  {
    title: 'Beyond Campus',
    description:
      'An upcoming AI-powered ebook designed to help young adults transition from academic life to real-world systems thinking. Built to instill adaptability, strategic thinking, and the ability to collaborate with AI — preparing readers for the future of work.',
  },
  {
    title: 'Systemic AI Workflow Module',
    description:
      'A modular guide that maps the synergy between human reasoning and AI logic. This project introduces a practical framework of systemic prompt engineering, enabling people to work adaptively and build their own AI-assisted workflow.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * i } }),
};

const Projects = () => {
  return (
    <section className="relative w-full bg-[#0b1020] py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">Featured Projects</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
