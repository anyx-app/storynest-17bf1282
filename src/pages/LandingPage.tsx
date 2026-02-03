import React from 'react';
import { ArrowRight, Star, BookOpen, Music, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FF6F61] to-[#FF8C42] px-6 py-20 text-white shadow-2xl md:px-12 lg:py-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-[#FFD700]/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold backdrop-blur-md border border-white/20 shadow-inner">
            <Star size={16} className="text-[#FFD700] fill-[#FFD700]" />
            <span className="uppercase tracking-wide">New Stories Added Weekly!</span>
          </div>
          
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl leading-tight drop-shadow-sm">
            Where Stories Come to <span className="text-[#FFD700]">Life</span> and Learning <span className="text-[#6B8E23] text-white">Begins</span>
          </h1>
          
          <p className="mb-10 text-xl font-medium text-white/90 md:text-2xl leading-relaxed max-w-2xl mx-auto">
            StoryNest turns reading into an interactive adventure with read-along audio, fun quizzes, and magical rewards.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/app"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#FF6F61] shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Start Reading Free
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              For Teachers
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">Why Kids Love StoryNest</h2>
          <p className="text-lg text-slate-600">Designed for fun, engineered for learning.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Interactive Stories",
              desc: "Stories that react to your touch! Click words to see pictures and hear pronunciations.",
              color: "bg-blue-500",
              light: "bg-blue-50"
            },
            {
              icon: Music,
              title: "Read-Along Audio",
              desc: "Professional narration helps build listening skills and proper pronunciation.",
              color: "bg-[#FF6F61]",
              light: "bg-[#FF6F61]/10"
            },
            {
              icon: ShieldCheck,
              title: "Safe Environment",
              desc: "100% ad-free and kid-safe zone. Parents can relax while kids learn.",
              color: "bg-[#6B8E23]",
              light: "bg-[#6B8E23]/10"
            }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.light} text-white shadow-sm`}>
                <feature.icon className={`h-8 w-8 text-slate-800 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-slate-800">{feature.title}</h3>
              <p className="text-lg leading-relaxed text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
