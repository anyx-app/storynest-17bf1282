import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './lib/console-logger'; // CRITICAL: DO NOT DELETE THIS LINE

// Error Boundary for production safety
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-rose-50 p-4 text-center">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h1 className="mb-4 text-2xl font-bold text-rose-600">Oops! Something went wrong.</h1>
            <p className="text-slate-600">Please refresh the page to continue your story.</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-rose-500 px-6 py-2 font-bold text-white transition hover:bg-rose-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
