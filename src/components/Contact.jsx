import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const Contact = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0b1020] p-6 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <button onClick={onClose} className="rounded-full px-2 py-1 text-sm text-slate-300 hover:text-white">Close</button>
            </div>

            <p className="mt-2 text-sm text-slate-300">Select a channel and say hello. I’d love to collaborate on intelligent systems.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="mailto:broahmad.ai@gmail.com"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <Mail className="h-5 w-5 text-cyan-300 transition-transform group-hover:scale-110" />
                <span>Email</span>
              </a>
              <a
                href="https://instagram.com/vynr.growth"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <Instagram className="h-5 w-5 text-cyan-300 transition-transform group-hover:scale-110" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
