import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Brain, Rocket } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-white pt-16 pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
             <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
             <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
             <div className="absolute -bottom-32 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <nav className="flex items-center justify-between mb-20">
             <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6F61] text-white shadow-lg">
                  <BookOpen size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-800">StoryNest</span>
             </div>
             <Link to="/app" className="rounded-full bg-white border border-slate-200 px-6 py-2 font-bold text-slate-600 shadow-sm hover:border-[#FF6F61] hover:text-[#FF6F61] transition-all">
               Log In
             </Link>
          </nav>

          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            Where Stories Come to Life and <span className="text-[#FF6F61]">Learning Begins</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 leading-relaxed">
            StoryNest transforms reading into a playful adventure. Interactive stories, 
            read-along audio, and vocabulary games help your child grow.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              to="/app" 
              className="group flex items-center gap-2 rounded-full bg-[#FF6F61] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 hover:bg-[#ff857a] hover:shadow-xl"
            >
              Start Your Adventure
              <Rocket className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <button className="rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-600 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              For Teachers
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "Interactive Stories",
                  desc: "Stories that react to your touch, making reading a two-way conversation.",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: Brain,
                  title: "Smart Vocabulary",
                  desc: "Click any word to hear it spoken and see a kid-friendly definition.",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Trophy,
                  title: "Fun Rewards",
                  desc: "Earn badges and unlock new avatars as you complete reading challenges.",
                  color: "bg-yellow-100 text-yellow-600"
                }
              ].map((feature, i) => (
                <div key={i} className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} transition-transform group-hover:scale-110`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
