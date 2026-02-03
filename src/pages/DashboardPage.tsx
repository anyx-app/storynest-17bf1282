import React from 'react';
import { Play, Clock, BarChart } from 'lucide-react';

const FEATURED_STORIES = [
  {
    id: 1,
    title: "The Curious Fox",
    summary: "Join Felix the Fox as he discovers a hidden garden in the magical forest.",
    level: "Beginner",
    time: "5 min",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-400 to-red-400"
  },
  {
    id: 2,
    title: "Space Adventure 101",
    summary: "Blast off into space and learn about the planets in our solar system!",
    level: "Intermediate",
    time: "8 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-400 to-indigo-400"
  },
  {
    id: 3,
    title: "The Ocean's Secret",
    summary: "Dive deep with Marina the Mermaid to find the lost pearl of Atlantis.",
    level: "Advanced",
    time: "12 min",
    image: "https://images.unsplash.com/photo-1482269550772-bd88c946274e?auto=format&fit=crop&q=80&w=800",
    color: "from-teal-400 to-emerald-400"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-3xl bg-[#6B8E23] px-8 py-12 text-white shadow-xl">
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold md:text-5xl">Welcome back, Explorer! 🚀</h1>
            <p className="mt-2 text-lg text-white/90">Ready for a new adventure today?</p>
          </div>
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md border border-white/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700] text-amber-900 font-bold">
                Level 5
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">Current Streak</p>
                <p className="text-xl font-bold">3 Days 🔥</p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-[#FFD700]/20 blur-3xl" />
      </div>

      {/* Featured Stories Grid */}
      <section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-slate-800">Your Library</h2>
          <button className="text-sm font-bold text-[#FF6F61] hover:underline">View All Stories</button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_STORIES.map((story) => (
            <div 
              key={story.id} 
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-20 mix-blend-overlay`} />
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-md backdrop-blur-sm">
                  {story.level}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-slate-800 group-hover:text-[#FF6F61] transition-colors">
                  {story.title}
                </h3>
                <p className="mb-6 flex-1 text-slate-600 leading-relaxed">
                  {story.summary}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Clock size={16} />
                    <span>{story.time}</span>
                  </div>
                  <button className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#FF6F61] hover:shadow-lg active:scale-95">
                    <Play size={16} fill="currentColor" />
                    Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white/60 p-8 shadow-lg backdrop-blur-md border border-white/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <BarChart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Weekly Progress</h3>
          </div>
          <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full w-[70%] bg-[#FF6F61] rounded-full" />
          </div>
          <p className="mt-2 text-right text-sm font-bold text-slate-500">70% of weekly goal</p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#FFD700] to-orange-300 p-8 shadow-lg text-amber-900">
          <h3 className="text-2xl font-bold mb-2">Daily Challenge 🏆</h3>
          <p className="font-medium mb-4">Read 1 story and answer 3 questions to earn the "Bookworm" badge!</p>
          <button className="w-full rounded-xl bg-white/30 py-2 font-bold hover:bg-white/40 transition">
            Start Challenge
          </button>
        </div>
      </section>
    </div>
  );
}
