import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1020] font-inter text-white">
      {/* Hero with Spline background and CTA */}
      <Hero onContactClick={() => setContactOpen(true)} />

      {/* About section */}
      <About />

      {/* Projects grid */}
      <Projects />

      {/* Contact CTA repeat section */}
      <section className="w-full bg-[#0b1020] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-2xl font-semibold">Ready to collaborate?</h3>
          <p className="mt-3 text-slate-300">Let’s build intelligent systems that combine human intuition with AI leverage.</p>
          <button
            onClick={() => setContactOpen(true)}
            className="mt-6 relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 blur opacity-70 transition-opacity" />
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default App;
