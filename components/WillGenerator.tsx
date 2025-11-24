// Fix: Implement the WillGenerator component with form and AI review functionality.
import React, { useState, useMemo } from 'react';
import { WillData, Beneficiary } from '../types';
import { generateWillText } from '../lib/willTemplate';
import { GoogleGenAI } from '@google/genai';

const initialState: WillData = {
  testatorName: '',
  testatorCity: '',
  testatorState: '',
  executorName: '',
  executorAddress: '',
  guardianName: '',
  beneficiaries: [{ id: crypto.randomUUID(), name: '', asset: '' }],
  witness1Name: '',
  witness2Name: '',
  executionDate: new Date().toISOString().split('T')[0],
};

const WillGenerator: React.FC = () => {
  const [formData, setFormData] = useState<WillData>(initialState);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewResult, setReviewResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const willText = useMemo(() => generateWillText(formData), [formData]);
  
  const ai = useMemo(() => new GoogleGenAI({ apiKey: process.env.API_KEY as string }), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBeneficiaryChange = (id: string, field: keyof Omit<Beneficiary, 'id'>, value: string) => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: prev.beneficiaries.map((b) =>
        b.id === id ? { ...b, [field]: value } : b
      ),
    }));
  };

  const addBeneficiary = () => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: [...prev.beneficiaries, { id: crypto.randomUUID(), name: '', asset: '' }],
    }));
  };

  const removeBeneficiary = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: prev.beneficiaries.filter((b) => b.id !== id),
    }));
  };
  
  const reviewWithAI = async () => {
    setIsLoading(true);
    setReviewResult('');
    try {
        const prompt = `Please review the following last will and testament document. Identify any potential issues, ambiguities, or areas that might cause legal complications. Provide a concise, bulleted list of suggestions for improvement. Do not provide legal advice, but rather general recommendations for clarity and completeness. Here is the document:\n\n${willText}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        setReviewResult(response.text);
    } catch (error) {
        console.error('Error reviewing will with AI:', error);
        setReviewResult('An error occurred while reviewing the document. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <section id="generator" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">Create Your Will</h2>
        <form className="space-y-6">
          {/* Testator Info */}
          <fieldset className="border border-slate-600 p-4 rounded-md">
            <legend className="px-2 text-lg font-medium text-gray-300">Testator Information (You)</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input name="testatorName" value={formData.testatorName} onChange={handleInputChange} placeholder="Full Name" className="bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <input name="testatorCity" value={formData.testatorCity} onChange={handleInputChange} placeholder="City" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
              <input name="testatorState" value={formData.testatorState} onChange={handleInputChange} placeholder="State" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
            </div>
          </fieldset>

          {/* Executor Info */}
          <fieldset className="border border-slate-600 p-4 rounded-md">
            <legend className="px-2 text-lg font-medium text-gray-300">Executor</legend>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input name="executorName" value={formData.executorName} onChange={handleInputChange} placeholder="Executor's Full Name" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
                <input name="executorAddress" value={formData.executorAddress} onChange={handleInputChange} placeholder="Executor's Address" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
            </div>
          </fieldset>

           {/* Guardian Info */}
          <fieldset className="border border-slate-600 p-4 rounded-md">
            <legend className="px-2 text-lg font-medium text-gray-300">Guardian (for minor children, optional)</legend>
            <input name="guardianName" value={formData.guardianName} onChange={handleInputChange} placeholder="Guardian's Full Name" className="bg-slate-700 border border-slate-600 rounded-md p-2 mt-2 w-full" />
          </fieldset>

          {/* Beneficiaries */}
          <fieldset className="border border-slate-600 p-4 rounded-md">
            <legend className="px-2 text-lg font-medium text-gray-300">Beneficiaries & Assets</legend>
            <div className="space-y-4 mt-2">
                {formData.beneficiaries.map((b, index) => (
                    <div key={b.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                        <input value={b.name} onChange={(e) => handleBeneficiaryChange(b.id, 'name', e.target.value)} placeholder={`Beneficiary ${index + 1} Name`} className="bg-slate-700 border border-slate-600 rounded-md p-2 md:col-span-1" />
                        <input value={b.asset} onChange={(e) => handleBeneficiaryChange(b.id, 'asset', e.target.value)} placeholder="Asset (e.g., 'my 2020 Honda Civic')" className="bg-slate-700 border border-slate-600 rounded-md p-2 md:col-span-1" />
                         <button type="button" onClick={() => removeBeneficiary(b.id)} className="text-red-400 hover:text-red-300 md:col-span-1">Remove</button>
                    </div>
                ))}
            </div>
             <button type="button" onClick={addBeneficiary} className="mt-4 text-indigo-400 hover:text-indigo-300">+ Add Beneficiary</button>
          </fieldset>
          
           {/* Witnesses */}
          <fieldset className="border border-slate-600 p-4 rounded-md">
            <legend className="px-2 text-lg font-medium text-gray-300">Witnesses</legend>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input name="witness1Name" value={formData.witness1Name} onChange={handleInputChange} placeholder="Witness 1 Full Name" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
                <input name="witness2Name" value={formData.witness2Name} onChange={handleInputChange} placeholder="Witness 2 Full Name" className="bg-slate-700 border border-slate-600 rounded-md p-2" />
            </div>
          </fieldset>
          
          <button
            type="button"
            onClick={() => setIsReviewing(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-lg"
          >
            Generate & Review Will
          </button>
        </form>
      </div>

      {/* Output Section */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">Your Generated Will</h2>
        {isReviewing ? (
            <div>
                 <pre className="bg-slate-900/70 p-4 rounded-md whitespace-pre-wrap text-sm font-mono overflow-auto max-h-96">
                    {willText}
                </pre>
                <div className="mt-6">
                    <button onClick={reviewWithAI} disabled={isLoading} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-gray-500">
                        {isLoading ? 'Analyzing...' : 'Review with AI'}
                    </button>
                    <button onClick={() => setIsReviewing(false)} className="ml-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                        Back to Edit
                    </button>
                </div>
                {reviewResult && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-indigo-400">AI Review & Suggestions</h3>
                        <pre className="bg-slate-900/70 p-4 rounded-md whitespace-pre-wrap text-sm font-mono overflow-auto max-h-96">
                            {reviewResult}
                        </pre>
                    </div>
                )}
            </div>
        ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
                <p>Fill out the form to generate your will document.</p>
            </div>
        )}
      </div>
    </section>
  );
};

export default WillGenerator;
