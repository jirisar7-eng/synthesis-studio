/**
 * @module PublicWeb
 * @Audit_ID PUB-LIVE-027
 * @Popis_Ukolu První reálný obsah pro veřejnost generovaný AI.
 */

import React from 'react';
import { ThemeConfig } from '../../design/ThemeConfig';

export const PublicWeb: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 font-mono">
    <h1 className={`text-4xl font-bold mb-6 text-white ${ThemeConfig.animation.pulse}`}>
      🌌 SYNTHESIS CORE ENGINE
    </h1>
    <div className="p-6 border border-blue-500/30 bg-blue-500/5 rounded-lg">
      <p className="text-blue-400 mb-4 font-bold">STATUS: ALPHA v1.0 ONLINE</p>
      <p className="text-gray-400 leading-relaxed">
        Vítejte v digitálním organismu, který se sám spravuje a vyvíjí. 
        Tato stránka byla kompletně vygenerována a nasazena autonomní 
        inteligencí Gemini Bridge bez manuálního zásahu do kódu.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 border border-gray-800 rounded">
        <h3 className="text-purple-400 font-bold underline">Git-Based Logic</h3>
        <p className="text-xs text-gray-500 mt-2">Zero-Database architecture. All data persistent in JSON nodes.</p>
      </div>
      <div className="p-4 border border-gray-800 rounded">
        <h3 className="text-green-400 font-bold underline">Cyberpunk UI</h3>
        <p className="text-xs text-gray-500 mt-2">Responsive at 144Hz. Optimized for mobile/desktop synthesis.</p>
      </div>
    </div>
  </div>
);