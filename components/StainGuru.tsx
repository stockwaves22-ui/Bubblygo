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
      setAdvice("Oops! Sisya is stumped. Best to let our pros handle it.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl shadow-2xl border border-brand-100 w-80 sm:w-96 overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-purple-600 to-brand-600 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                <Icons.Bot size={20} />
              </div>
              <div>
                  <h3 className="font-bold text-lg leading-none">Sisya</h3>
                  <p className="text-[10px] text-white/80 uppercase tracking-wider font-bold">Laundry AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition">
              <Icons.X size={18} />
            </button>
          </div>
          
          <div className="p-5 max-h-96 overflow-y-auto bg-slate-50">
            {!advice && !loading && (
              <div className="text-center py-4">
                  <p className="text-sm text-slate-600 mb-2">
                    Hi! I'm Sisya.
                  </p>
                  <p className="text-xs text-slate-500">
                    Spilled coffee? Grass stains? Tell me what happened, and I'll tell you the quick fix!
                  </p>
              </div>
            )}

            {advice && (
              <div className="bg-white p-4 rounded-2xl border border-brand-100 mb-4 text-sm text-slate-700 shadow-sm">
                <p className="whitespace-pre-wrap leading-relaxed">{advice}</p>
              </div>
            )}

            {loading && (
              <div className="flex justify-center py-8">
                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Ink on white shirt..."
              className="flex-1 text-sm border border-slate-300 rounded-full px-4 py-3 focus:outline-none focus:border-brand-500"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-brand-600 text-white p-3 rounded-full hover:bg-brand-700 transition disabled:opacity-50 shadow-md"
            >
              <Icons.Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-slate-900 text-white pl-5 pr-2 py-2 rounded-full shadow-2xl hover:shadow-xl transition-all transform hover:scale-105 border border-slate-700"
      >
        <span className="font-bold text-sm tracking-wide">Ask Sisya</span>
        <div className="bg-brand-500 text-white p-2 rounded-full">
            <Icons.Bot size={20} className={isOpen ? '' : 'animate-pulse'} />
        </div>
      </button>
    </div>
  );
};