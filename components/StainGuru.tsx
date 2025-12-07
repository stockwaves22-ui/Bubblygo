import React, { useState } from 'react';
import { Icons } from './Icons';
import { getStainAdvice } from '../services/geminiService';

export const StainGuru: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAdvice(null);
    try {
      const result = await getStainAdvice(query);
      setAdvice(result);
    } catch (err) {
      setAdvice("Oops! Even I'm stumped. Best to let our pros handle it.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-brand-100 w-80 sm:w-96 overflow-hidden">
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Icons.Bot size={20} />
              <h3 className="font-semibold">Stain Guru AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700 p-1 rounded">
              <Icons.X size={18} />
            </button>
          </div>
          
          <div className="p-4 max-h-96 overflow-y-auto bg-slate-50">
            {!advice && !loading && (
              <p className="text-sm text-slate-600 mb-4">
                Spilled something? Tell me what it is (e.g., "Coffee on silk shirt") and I'll give you a quick fix before pickup!
              </p>
            )}

            {advice && (
              <div className="bg-white p-3 rounded-lg border border-brand-100 mb-4 text-sm text-slate-700 shadow-sm">
                <p className="whitespace-pre-wrap">{advice}</p>
              </div>
            )}

            {loading && (
              <div className="flex justify-center py-4">
                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-600"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Red wine on cotton..."
              className="flex-1 text-sm border border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:border-brand-500"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 transition disabled:opacity-50"
            >
              <Icons.Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
      >
        <Icons.Sparkles size={20} className={isOpen ? '' : 'animate-pulse'} />
        <span className="font-medium">{isOpen ? 'Close Assistant' : 'Stain Help?'}</span>
      </button>
    </div>
  );
};
