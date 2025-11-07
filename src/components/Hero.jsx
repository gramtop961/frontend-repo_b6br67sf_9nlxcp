import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1020] text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for mood (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-[#0b1020]/70 to-[#0b1020]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-72 rounded-full blur-3xl opacity-60"
           style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,213,255,0.35) 0%, rgba(0,102,255,0.15) 45%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs tracking-wider text-cyan-200 backdrop-blur-sm"
        >
          <Rocket size={14} className="text-cyan-300" /> AI Creative Strategist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl leading-tight sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #a6e7ff 100%)' }}
        >
          Building Systems Where Humans and AI Create Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300"
        >
          I’m Bro Ahmad — an AI Creative Strategist bridging human intuition and machine intelligence to craft impactful digital ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={onContactClick}
            className="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 blur opacity-70 transition-opacity" />
            <span className="relative z-10">Get in Touch</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
