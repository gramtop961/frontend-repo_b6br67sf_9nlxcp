import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full bg-[#0b1020] py-20 text-slate-200">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl font-semibold text-white"
        >
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg leading-relaxed text-slate-300"
        >
          I’m Bro Ahmad, an AI Creative Strategist who bridges collaboration between humans and machines. My work focuses on transforming ideas into AI-driven products that blend creativity, strategy, and technology — building systems that empower individuals and brands to evolve adaptively in the age of intelligent automation.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
