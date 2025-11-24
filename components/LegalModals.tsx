import React from 'react';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">About Us</h2>
            <p className="mb-4">
              Welcome to <strong>Will Generator AI</strong>, a project powered by <strong>HSINI MOHAMED</strong>. 
              Our mission is to simplify the estate planning process by providing a free, accessible, and easy-to-use tool 
              for generating simple Last Will and Testament templates.
            </p>
            <p className="mb-4">
              We believe that everyone deserves the peace of mind that comes with having their affairs in order, 
              regardless of their financial situation.
            </p>
          </>
        );
      case 'contact':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Contact Us</h2>
            <p className="mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="font-semibold text-white">Email:</p>
              <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a>
              <p className="font-semibold text-white mt-4">Website:</p>
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a>
            </div>
          </>
        );
      case 'guide':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">User Guide</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li><strong>Enter Personal Details:</strong> Fill in your full name and address.</li>
              <li><strong>Appoint an Executor:</strong> Choose a trusted person to carry out your will.</li>
              <li><strong>Name Beneficiaries:</strong> List who gets what assets.</li>
              <li><strong>Appoint Guardians:</strong> Essential if you have minor children.</li>
              <li><strong>Witnesses:</strong> Enter names of two disinterested witnesses.</li>
              <li><strong>Review:</strong> Use our AI tool to check for clarity.</li>
              <li><strong>Finalize:</strong> Copy the text, print it, sign it in front of witnesses, and have them sign it.</li>
            </ol>
            <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded text-sm text-yellow-200">
              <strong>Note:</strong> This tool creates a <em>template</em>. You must follow your local state laws for signing and witnessing to make it valid.
            </div>
          </>
        );
      case 'privacy':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Privacy Policy</h2>
            <p className="mb-2"><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
              At doodax.com ("we", "us", "our"), we respect your privacy. This Privacy Policy explains how we handle information.
            </p>
            <h3 className="text-lg font-semibold text-white mt-4">1. Information Collection</h3>
            <p className="mb-2">We do not store your personal will data on our servers. All data processing for the will generation happens in your browser locally or is sent temporarily to the AI service for review purposes only and is not retained.</p>
            <h3 className="text-lg font-semibold text-white mt-4">2. AI Processing</h3>
            <p className="mb-2">When you use the "Review with AI" feature, the text of your will is sent to Google's Gemini API. Please review Google's privacy policy regarding API usage.</p>
            <h3 className="text-lg font-semibold text-white mt-4">3. Cookies</h3>
            <p className="mb-2">We may use standard cookies to improve website performance.</p>
          </>
        );
      case 'terms':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Terms of Service</h2>
            <p className="mb-4">By using this website, you agree to the following terms:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>No Legal Advice:</strong> This tool is for informational purposes only. We are not a law firm and do not provide legal advice.</li>
              <li><strong>Use at Your Own Risk:</strong> You are responsible for ensuring your will complies with local laws.</li>
              <li><strong>No Warranty:</strong> The service is provided "as is" without warranties of any kind.</li>
              <li><strong>Limitation of Liability:</strong> doodax.com and HSINI MOHAMED are not liable for any damages arising from the use of this tool.</li>
            </ul>
          </>
        );
      case 'dmca':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">DMCA Notice</h2>
            <p className="mb-4">
              We respect the intellectual property rights of others. If you believe that material available on our site infringes on your copyright(s), please notify us.
            </p>
            <p className="mb-2"><strong>Designated Agent:</strong> HSINI MOHAMED</p>
            <p className="mb-2"><strong>Email:</strong> hsini.web@gmail.com</p>
            <p className="mt-4 text-sm text-gray-400">Please include sufficient information to identify the copyrighted work and the infringing material.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Legal Information</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-gray-300 leading-relaxed custom-scrollbar">
          {renderContent()}
          
          <div className="mt-8 p-4 bg-red-900/20 border border-red-900/50 rounded-lg">
            <h4 className="text-red-400 font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              DISCLAIMER
            </h4>
            <p className="text-sm mt-2 text-gray-400">
              This website uses AI technology to generate text. It is <strong>NOT</strong> a substitute for an attorney or law firm. 
              State laws vary significantly. Google and Doodax do not guarantee the legal validity of documents generated here. 
              By clicking "Continue", you acknowledge that you are using this tool for educational purposes only.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-700 bg-slate-800/50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg hover:shadow-indigo-500/20"
          >
            I Understand & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;