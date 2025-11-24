import React, { useState } from 'react';
import LegalModals from './LegalModals';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(type);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen flex flex-col relative text-slate-200">
      
      {/* Navigation */}
      <header className="fixed w-full top-0 z-40 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <span className="font-serif font-bold text-white text-lg">W</span>
               </div>
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Will Generator AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#generator" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">Generator</a>
              <button onClick={openModal('guide')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">Guide</button>
              <button onClick={openModal('about')} className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">About</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 z-10">
        <div className="max-w-6xl mx-auto">
            {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10 mt-auto backdrop-blur-md z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Will Generator AI</h3>
                <p className="text-gray-400 max-w-sm mb-4">
                    Democratizing estate planning with secure, private, and free AI-powered tools. 
                    Create your legacy today.
                </p>
                <div className="flex space-x-4">
                    {/* Social/Github Link */}
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                    </a>
                </div>
            </div>
            
            <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><button onClick={openModal('guide')} className="hover:text-indigo-400 transition-colors">User Guide</button></li>
                    <li><button onClick={openModal('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
                    <li><button onClick={openModal('contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><button onClick={openModal('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
                    <li><button onClick={openModal('terms')} className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
                    <li><button onClick={openModal('dmca')} className="hover:text-indigo-400 transition-colors">DMCA</button></li>
                </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-500 text-sm">
                Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold">HSINI MOHAMED</a>
            </p>
            <p className="text-xs text-gray-600 mt-2">
                &copy; {new Date().getFullYear()} doodax.com. All rights reserved. Disclaimer: Not legal advice.
            </p>
          </div>
        </div>
      </footer>

      {/* Popups */}
      <LegalModals activeModal={activeModal} onClose={closeModal} />
    </div>
  );
};

export default Layout;