import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Star, Trophy, User, Menu, X, LogOut } from 'lucide-react';

export default function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Library', path: '/app', icon: BookOpen },
    { name: 'My Progress', path: '/app/progress', icon: Star },
    { name: 'Achievements', path: '/app/achievements', icon: Trophy },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-800 font-sans selection:bg-[#FF6F61] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/app" className="flex items-center gap-2 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6F61] to-[#FFD700] text-white shadow-lg transition-transform group-hover:scale-110">
                <BookOpen size={24} className="animate-pulse" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800 group-hover:text-[#FF6F61] transition-colors">
                StoryNest
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:text-[#FF6F61] ${
                    isActive(link.path) 
                      ? 'text-[#FF6F61] scale-105' 
                      : 'text-slate-500'
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-slate-200 mx-2" />
              
              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition-all hover:border-[#FF6F61] hover:text-[#FF6F61] hover:shadow-md">
                <User size={18} />
                <span>Profile</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-[#FF6F61]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-4 shadow-lg animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg p-3 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-rose-50 text-[#FF6F61]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button className="flex items-center gap-3 rounded-lg p-3 text-base font-medium text-slate-600 hover:bg-slate-50 w-full text-left">
                <User size={20} />
                Profile Settings
              </button>
              <button className="flex items-center gap-3 rounded-lg p-3 text-base font-medium text-rose-500 hover:bg-rose-50 w-full text-left">
                <LogOut size={20} />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Outlet />
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 bg-white/40 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} StoryNest. Where imagination grows.</p>
      </footer>
    </div>
  );
}
