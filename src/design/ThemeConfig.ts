/**
 * @module ThemeConfig
 * @SiD DSGN-CONST-002
 * @Audit_ID DSGN-MOD-019
 * @Popis_Ukolu Centralizovaný designový systém. Změnou zde změníš celý web.
 */

export const ThemeConfig = {
  colors: {
    background: "#000000",
    surface: "#0a0a0b",
    primary: "#0066ff",
    secondary: "#bc13fe",
    accent: "#39ff14",
    danger: "#ff003c",
    border: "rgba(255, 255, 255, 0.1)"
  },
  effects: {
    glass: "backdrop-blur-md bg-white/5",
    glow: "shadow-[0_0_15px_rgba(0,102,255,0.4)]",
    borderGlow: "border border-white/10 hover:border-blue-500/50"
  },
  animation: {
    pulse: "animate-pulse",
    transition: "transition-all duration-300 ease-in-out"
  }
};