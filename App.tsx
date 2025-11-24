import React from 'react';
import Layout from './components/Layout';
import WillGenerator from './components/WillGenerator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <header className="text-center py-10">
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl drop-shadow-lg tracking-tight">
            AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Will Generator</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Secure your legacy in minutes. A free, private, and intelligent tool to generate your Last Will and Testament document instantly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#generator" className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
                Start Now
            </a>
            <a href="#toc" className="px-8 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-full font-semibold hover:bg-indigo-900/70 transition-colors backdrop-blur-sm">
                Learn More
            </a>
          </div>
        </header>

        <WillGenerator />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-12" />
        
        <SeoArticle />
      </div>
    </Layout>
  );
};

export default App;