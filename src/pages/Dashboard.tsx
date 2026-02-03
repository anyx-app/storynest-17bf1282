import React from 'react';
import { Play, Clock, BarChart3, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  // Mock Data for UI Skeleton
  const stories = [
    {
      id: 1,
      title: "The Space Explorer's Guide",
      summary: "Blast off into the cosmos and learn about planets, stars, and alien friends!",
      level: "Intermediate",
      time: "15 min",
      cover: "bg-gradient-to-br from-indigo-500 to-purple-600",
      progress: 45
    },
    {
      id: 2,
      title: "Lily and the Magic Garden",
      summary: "A story about a girl who discovers plants that can talk and sing.",
      level: "Beginner",
      time: "10 min",
      cover: "bg-gradient-to-br from-green-400 to-emerald-600",
      progress: 0
    },
    {
      id: 3,
      title: "Robot's First Day at School",
      summary: "Can a robot make friends in a human school? Join Robby to find out.",
      level: "Advanced",
      time: "20 min",
      cover: "bg-gradient-to-br from-blue-400 to-cyan-500",
      progress: 100
    },
    {
      id: 4,
      title: "The Dragon Who Loved Tea",
      summary: "Not all dragons breathe fire. This one prefers chamomile and biscuits.",
      level: "Beginner",
      time: "12 min",
      cover: "bg-gradient-to-br from-orange-400 to-red-500",
      progress: 10
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-800">Welcome back, Explorer! 🚀</h1>
          <p className="mt-2 text-lg text-slate-600">Ready to discover a new world today?</p>
        </div>
        
        <div className="flex gap-4">
           <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm border border-slate-100">
             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-sm font-bold text-slate-600">Level 3</span>
           </div>
           <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm border border-slate-100">
             <span className="text-lg">🔥</span>
             <span className="text-sm font-bold text-slate-600">5 Day Streak</span>
           </div>
        </div>
      </div>

      {/* Featured / Continue Reading */}
      <div className="mb-12 rounded-3xl bg-white p-8 shadow-xl shadow-indigo-100/50 border border-indigo-50 relative overflow-hidden group">
         <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-indigo-50 to-transparent opacity-50" />
         
         <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="h-48 w-full md:w-64 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white text-5xl transform group-hover:scale-105 transition-transform duration-500">
               🪐
            </div>
            <div className="flex-1 space-y-4">
               <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm tracking-wide uppercase">
                  <Play size={16} className="fill-current" />
                  Continue Reading
               </div>
               <h2 className="text-3xl font-bold text-slate-800">The Space Explorer's Guide</h2>
               <p className="text-slate-600 text-lg max-w-xl">
                 You left off at Chapter 3: "The Rings of Saturn". Learn about what makes the rings sparkle!
               </p>
               <div className="flex items-center gap-6 pt-2">
                  <div className="flex-1 max-w-xs">
                     <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Progress</span>
                        <span>45%</span>
                     </div>
                     <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-[#FF6F61] rounded-full w-[45%]" />
                     </div>
                  </div>
                  <button className="rounded-full bg-[#FF6F61] px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-[#ff857a] hover:scale-105 active:scale-95">
                     Resume
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Library Grid */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Your Library</h2>
        <button className="text-sm font-bold text-[#FF6F61] hover:text-orange-600 flex items-center gap-1">
           View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div key={story.id} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
            {/* Card Image */}
            <div className={`h-48 w-full ${story.cover} relative flex items-center justify-center`}>
               <span className="text-6xl drop-shadow-lg filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
                 {story.id === 2 ? '🌱' : story.id === 3 ? '🤖' : story.id === 4 ? '🐉' : '📚'}
               </span>
               {story.progress === 100 && (
                 <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    ★ Completed
                 </div>
               )}
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-6">
               <div className="mb-3 flex items-center gap-3">
                  <span className={`rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold ${
                    story.level === 'Beginner' ? 'text-green-600 bg-green-50' : 
                    story.level === 'Intermediate' ? 'text-blue-600 bg-blue-50' : 
                    'text-purple-600 bg-purple-50'
                  }`}>
                    {story.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Clock size={12} /> {story.time}
                  </span>
               </div>
               
               <h3 className="mb-2 text-xl font-bold text-slate-800 leading-tight group-hover:text-[#FF6F61] transition-colors">
                 {story.title}
               </h3>
               <p className="mb-6 flex-1 text-sm text-slate-500 leading-relaxed">
                 {story.summary}
               </p>

               <button className="mt-auto w-full rounded-xl border-2 border-slate-100 bg-white py-3 font-bold text-slate-600 transition-all hover:border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white">
                 Read Story
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
