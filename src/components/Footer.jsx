import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b1020] border-t border-white/10 py-8 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center text-sm">
          © 2025 Bro Ahmad — AI Creative Strategist | Let’s build intelligent systems together.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:broahmad.ai@gmail.com" className="hover:text-white">broahmad.ai@gmail.com</a>
          <span className="opacity-40">•</span>
          <a href="https://instagram.com/vynr.growth" target="_blank" rel="noreferrer" className="hover:text-white">@vynr.growth</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
