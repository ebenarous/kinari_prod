'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Deploy: React.FC = () => {
  return (
    <section id="deploy" className="relative py-24 bg-black text-center overflow-hidden border-t border-white/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/end.jpeg')",
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Ready to Ramp Up Production?
        </h2>
        
        <p className="text-xl text-zinc-400 leading-relaxed">
          Schedule a call to learn more, and find a time to see a <br /> live demo at your facility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="mailto:info@kinarisystems.com" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Deploy;
