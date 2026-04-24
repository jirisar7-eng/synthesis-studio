import React from 'react';
import { DomainRouter } from './modules/router/DomainRouter';
import { TextDatabase } from './modules/text/TextDatabase';
import { GSyncButton } from './components/GSyncButton';

/**
 * @module App
 * @SiD CORE-APP-001
 * @Audit_ID UI-RESKIN-018
 * @Popis_Ukolu Odstranění výchozího UI (Synthesis Objective, Input Stack) a nasazení našeho Dashboardu.
 * @Status VYPOŘÁDÁNO
 */

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#000000] text-[#ffffff] font-mono p-4 overflow-x-hidden">
      {/* Hlavní lišta Synthesis Studio */}
      <header className="flex justify-between items-center pb-6 border-b border-gray-800 mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tighter text-white uppercase italic">SYNTHESIS STUDIO</h1>
          <p className="text-[10px] text-gray-500 tracking-widest">v1.1-PRO // {TextDatabase.SYSTEM.HEALTH_OPTIMAL}</p>
        </div>
        
        {/* Naše vlastní G-Sync tlačítko */}
        <div className="flex items-center gap-4">
           <GSyncButton />
           <div className="hidden md:flex flex-col text-right">
             <span className="text-[9px] text-gray-600 uppercase font-bold">Latency</span>
             <span className="text-[10px] text-blue-500">42.2ms</span>
           </div>
        </div>
      </header>

      {/* Hlavní obsah - sem nasadíme Infrastructure Dashboard */}
      <main className="flex flex-col gap-8 max-w-7xl mx-auto py-4">
        <DomainRouter />
      </main>

      {/* Systémová lišta */}
      <footer className="mt-12 pt-4 border-t border-gray-800 text-[10px] text-gray-700 flex justify-between uppercase tracking-widest font-bold">
        <div className="flex gap-6">
          <span>[SiD: CORE-APP-001]</span>
          <span>AUDIT: UI-RESKIN-018</span>
        </div>
        <div className="text-gray-800">
           © 2026 SYNTHESIS_COLLECTIVE // ALL_RIGHTS_RESERVED
        </div>
      </footer>
    </div>
  );
};

export default App;