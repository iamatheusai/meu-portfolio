import { Reveal, SectionHeader } from "./Reveal";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const spring = { type: "spring" as const, stiffness: 45, damping: 18 };

function BrowserChrome({ title }: { title?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", padding: "7px 10px", gap: 5,
      background: "oklch(0.10 0.018 260 / 0.98)",
      borderBottom: "1px solid oklch(1 0 0 / 0.06)", flexShrink: 0,
    }}>
      {(["#ff6058","#ffbd2e","#28c840"] as const).map((c, i) => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c, flexShrink: 0, opacity: 0.7 }} />
      ))}
      {title && (
        <div style={{
          flex: 1, marginLeft: 8, height: 10, borderRadius: 5,
          background: "oklch(1 0 0 / 0.06)", display: "flex", alignItems: "center",
          paddingLeft: 8, overflow: "hidden",
        }}>
          <div style={{ fontSize: 7, color: "oklch(0.52 0.04 252)", whiteSpace: "nowrap", fontFamily: "var(--font-sans)" }}>{title}</div>
        </div>
      )}
      {!title && <div style={{ flex: 1, height: 10, borderRadius: 5, background: "oklch(1 0 0 / 0.06)", marginLeft: 6 }} />}
    </div>
  );
}

// ── Clínica / Saúde — blue medical theme ─────────────────────────

function WFClinica() {
  return (
    <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Page background */}
      <rect width="420" height="260" fill="#0b1c2e" />
      {/* Nav bar */}
      <rect width="420" height="28" fill="#0d2038" />
      <rect x="14" y="9" width="46" height="10" rx="2" fill="#2a7dc8" />
      <rect x="270" y="11" width="26" height="6" rx="2" fill="#1e3a56" />
      <rect x="304" y="11" width="26" height="6" rx="2" fill="#1e3a56" />
      <rect x="338" y="11" width="26" height="6" rx="2" fill="#1e3a56" />
      <rect x="370" y="8" width="38" height="12" rx="6" fill="#1e66c0" />
      <line x1="0" y1="28" x2="420" y2="28" stroke="#1a3354" strokeWidth=".7" />
      {/* Hero — left content */}
      <rect x="0" y="28" width="214" height="122" fill="#091524" />
      <rect x="16" y="38" width="58" height="5" rx="2" fill="#1e6aaa" />
      <rect x="16" y="49" width="182" height="13" rx="3" fill="#d0e8ff" />
      <rect x="16" y="67" width="162" height="9" rx="2" fill="#7aaac8" />
      <rect x="16" y="82" width="172" height="4" rx="2" fill="#2a4860" />
      <rect x="16" y="90" width="150" height="4" rx="2" fill="#2a4860" />
      <rect x="16" y="98" width="132" height="4" rx="2" fill="#2a4860" />
      <rect x="16" y="110" width="84" height="20" rx="10" fill="#1e66c0" />
      <rect x="108" y="110" width="74" height="20" rx="10" fill="#091524" stroke="#1e4068" strokeWidth=".8" />
      {/* Hero — right image */}
      <rect x="214" y="28" width="206" height="122" fill="#0e2844" />
      <rect x="214" y="28" width="206" height="122" fill="#164070" opacity=".35" />
      {/* Medical cross */}
      <rect x="303" y="73" width="5" height="28" rx="2.5" fill="#2a80d0" opacity=".9" />
      <rect x="291" y="82" width="29" height="7" rx="3.5" fill="#2a80d0" opacity=".9" />
      {/* Stats strip */}
      {[0, 140, 280].map((x, i) => (
        <g key={i}>
          <rect x={x} y="150" width="140" height="38" fill="#0d2040" />
          {i < 2 && <line x1={x + 140} y1="150" x2={x + 140} y2="188" stroke="#172e48" strokeWidth=".6" />}
          <rect x={x + 10} y="160" width="44" height="12" rx="2" fill="#2278c0" />
          <rect x={x + 10} y="176" width="70" height="4" rx="2" fill="#2a4c66" />
        </g>
      ))}
      {/* Service cards */}
      {[0, 140, 280].map((x, i) => (
        <g key={`s${i}`}>
          <rect x={x} y="188" width="140" height="72" fill="#0c1e34" />
          {i < 2 && <line x1={x + 140} y1="188" x2={x + 140} y2="260" stroke="#172e48" strokeWidth=".6" />}
          <rect x={x + 10} y="198" width="20" height="20" rx="4" fill="#1a4a7c" />
          {/* icon cross */}
          <rect x={x + 19} y="204" width="2" height="8" rx="1" fill="#2a80d0" opacity=".7" />
          <rect x={x + 16} y="207" width="8" height="2" rx="1" fill="#2a80d0" opacity=".7" />
          <rect x={x + 38} y="200" width="88" height="6" rx="2" fill="#b0cee8" />
          <rect x={x + 38} y="210" width="72" height="4" rx="2" fill="#2a5070" />
          <rect x={x + 38} y="218" width="58" height="4" rx="2" fill="#2a4c66" />
          <rect x={x + 38} y="226" width="44" height="4" rx="2" fill="#1e3a52" />
        </g>
      ))}
    </svg>
  );
}

// ── Restaurante — warm amber theme ───────────────────────────────

function WFRestaurante() {
  return (
    <svg viewBox="0 0 260 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Full page bg */}
      <rect width="260" height="350" fill="#120907" />
      {/* Hero background */}
      <rect width="260" height="178" fill="#1c0d08" />
      <rect width="260" height="178" fill="#2a1000" opacity=".4" />
      {/* Nav */}
      <rect x="16" y="13" width="50" height="8" rx="2" fill="#c47828" />
      <rect x="172" y="14" width="28" height="5" rx="2" fill="#4a2812" />
      <rect x="208" y="14" width="28" height="5" rx="2" fill="#4a2812" />
      {/* Hero content */}
      <rect x="56" y="46" width="148" height="5" rx="2" fill="#7a4820" />
      <rect x="22" y="58" width="216" height="20" rx="3" fill="#f0c06a" />
      <rect x="36" y="84" width="188" height="12" rx="2" fill="#c88040" />
      <rect x="44" y="102" width="172" height="4" rx="2" fill="#5a3018" />
      <rect x="50" y="110" width="160" height="4" rx="2" fill="#5a3018" />
      <rect x="72" y="124" width="116" height="24" rx="12" fill="#c47828" />
      {/* separator line */}
      <line x1="20" y1="158" x2="240" y2="158" stroke="#4a2812" strokeWidth=".5" />
      {/* Small icons hint */}
      <rect x="116" y="164" width="28" height="4" rx="2" fill="#7a4018" />
      {/* Menu section bg */}
      <rect x="0" y="180" width="260" height="170" fill="#140c07" />
      {/* Menu tabs */}
      <rect x="16" y="188" width="52" height="16" rx="8" fill="#c47828" />
      <rect x="76" y="188" width="42" height="16" rx="8" fill="#281808" stroke="#5a3018" strokeWidth=".5" />
      <rect x="126" y="188" width="48" height="16" rx="8" fill="#281808" stroke="#5a3018" strokeWidth=".5" />
      <rect x="182" y="188" width="42" height="16" rx="8" fill="#281808" stroke="#5a3018" strokeWidth=".5" />
      {/* Menu cards 2x2 */}
      {([[16, 214], [140, 214], [16, 284], [140, 284]] as [number, number][]).map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="112" height="62" rx="5" fill="#1c1008" stroke="#3a2010" strokeWidth=".5" />
          <rect x={x} y={y} width="112" height="34" rx="5" fill="#2a1808" />
          {/* Warm food image tone */}
          <rect x={x} y={y} width="112" height="34" fill="#8a4010" opacity=".2" />
          {/* Plate icon */}
          <circle cx={x + 56} cy={y + 17} r="9" fill="#3a2010" opacity=".6" />
          <rect x={x + 8} y={y + 40} width="60" height="5" rx="2" fill="#d4903a" />
          <rect x={x + 8} y={y + 49} width="40" height="4" rx="2" fill="#5a3018" />
          <rect x={x + 80} y={y + 47} width="24" height="10" rx="2" fill="#c47828" opacity=".8" />
        </g>
      ))}
    </svg>
  );
}

// ── Escritório de Advocacia — dark gold professional ──────────────

function WFAdvocacia() {
  return (
    <svg viewBox="0 0 380 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Page bg */}
      <rect width="380" height="240" fill="#07090f" />
      {/* Header */}
      <rect width="380" height="38" fill="#090c16" />
      <rect x="16" y="13" width="60" height="11" rx="2" fill="#b8902a" />
      <rect x="222" y="16" width="28" height="5" rx="2" fill="#2a2c3a" />
      <rect x="258" y="16" width="28" height="5" rx="2" fill="#2a2c3a" />
      <rect x="294" y="16" width="28" height="5" rx="2" fill="#2a2c3a" />
      <rect x="332" y="13" width="38" height="13" rx="6" fill="#b8902a" />
      <line x1="0" y1="38" x2="380" y2="38" stroke="#1a1e2c" strokeWidth=".7" />
      {/* Decorative gold accent line */}
      <rect x="0" y="36" width="380" height="2" fill="#b8902a" opacity=".15" />
      {/* Hero area */}
      <rect x="16" y="50" width="92" height="5" rx="2" fill="#7a6020" />
      <rect x="16" y="61" width="282" height="18" rx="3" fill="#ede0c0" />
      <rect x="16" y="85" width="240" height="11" rx="2" fill="#9a8060" />
      <rect x="16" y="102" width="262" height="4" rx="2" fill="#303040" />
      <rect x="16" y="110" width="242" height="4" rx="2" fill="#303040" />
      {/* CTA buttons */}
      <rect x="16" y="124" width="104" height="22" rx="11" fill="#b8902a" />
      <rect x="128" y="124" width="88" height="22" rx="11" fill="#0a0c18" stroke="#b8902a" strokeWidth=".8" />
      {/* Practice area cards */}
      {[16, 148, 272].map((x, i) => (
        <g key={i}>
          <rect x={x} y="158" width="118" height="76" rx="5" fill="#0b0f1e" stroke="#1e2232" strokeWidth=".6" />
          {/* Gold top bar */}
          <rect x={x} y="158" width="118" height="3" rx="1.5" fill="#b8902a" />
          {/* Icon box */}
          <rect x={x + 10} y="170" width="22" height="22" rx="4" fill="#1c1808" stroke="#b8902a" strokeWidth=".6" />
          {/* Balance icon lines */}
          <line x1={x + 21} y1="175" x2={x + 21} y2="188" stroke="#b8902a" strokeWidth=".8" opacity=".7" />
          <line x1={x + 15} y1="177" x2={x + 27} y2="177" stroke="#b8902a" strokeWidth=".8" opacity=".7" />
          <rect x={x + 10} y="198" width="92" height="6" rx="2" fill="#ccc0a0" />
          <rect x={x + 10} y="208" width="74" height="4" rx="2" fill="#40404c" />
          <rect x={x + 10} y="216" width="60" height="4" rx="2" fill="#38384a" />
          <rect x={x + 10} y="224" width="48" height="4" rx="2" fill="#30303c" />
        </g>
      ))}
    </svg>
  );
}

// ── Academia / Fitness — dark violet energy ───────────────────────

function WFFitness() {
  const bars = [40, 58, 44, 70, 62, 50, 78, 88];
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Page bg */}
      <rect width="300" height="380" fill="#07060e" />
      {/* Hero bg with glow */}
      <rect width="300" height="188" fill="#0c0a18" />
      <rect width="300" height="188" fill="#6020a8" opacity=".08" />
      {/* Nav */}
      <rect x="16" y="12" width="44" height="8" rx="2" fill="#8040cc" />
      <rect x="230" y="13" width="24" height="6" rx="2" fill="#221830" />
      <rect x="262" y="10" width="30" height="14" rx="7" fill="#7030c0" />
      {/* Hero content */}
      <rect x="16" y="38" width="100" height="5" rx="2" fill="#5a30a0" />
      <rect x="16" y="49" width="268" height="24" rx="3" fill="#ece8ff" />
      <rect x="16" y="79" width="244" height="14" rx="2" fill="#b8a8e0" />
      <rect x="16" y="99" width="220" height="5" rx="2" fill="#32284a" />
      <rect x="16" y="108" width="200" height="5" rx="2" fill="#32284a" />
      {/* CTA buttons */}
      <rect x="16" y="124" width="120" height="24" rx="12" fill="#7030c0" />
      <rect x="146" y="124" width="86" height="24" rx="12" fill="#10081e" stroke="#7030c0" strokeWidth=".8" />
      {/* Stats row */}
      {[16, 112, 208].map((x, i) => (
        <g key={i}>
          <rect x={x} y="164" width="84" height="24" rx="4" fill="#100c1c" stroke="#281e3c" strokeWidth=".5" />
          <rect x={x + 8} y="169" width="42" height="9" rx="2" fill="#8840d0" />
          <rect x={x + 8} y="182" width="30" height="4" rx="2" fill="#362a50" />
        </g>
      ))}
      {/* Program cards 2×2 */}
      {([[16, 200], [160, 200], [16, 282], [160, 282]] as [number, number][]).map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="128" height="72" rx="5" fill="#0e0c1c" stroke="#281e3c" strokeWidth=".5" />
          {/* Card image area */}
          <rect x={x} y={y} width="128" height="36" rx="5" fill="#1a1430" />
          <rect x={x} y={y} width="128" height="36" fill="#7030c0" opacity=".12" />
          {/* Play icon */}
          <circle cx={x + 64} cy={y + 18} r="10" fill="#7030c0" opacity=".4" />
          <path d={`M${x + 60},${y + 14} L${x + 70},${y + 18} L${x + 60},${y + 22} Z`} fill="#c090ff" opacity=".7" />
          <rect x={x + 8} y={y + 42} width="90" height="7" rx="2" fill="#ddd0ff" />
          <rect x={x + 8} y={y + 54} width="64" height="5" rx="2" fill="#4a3870" />
          <rect x={x + 8} y={y + 63} width="48" height="4" rx="2" fill="#3a2a56" />
        </g>
      ))}
      {/* Chart bar */}
      <rect x="16" y="365" width="268" height="15" rx="3" fill="#0e0c1c" stroke="#281e3c" strokeWidth=".4" />
      {bars.map((h, idx) => (
        <rect key={idx} x={20 + idx * 32} y={380 - h * 0.13} width="24" height={h * 0.13} rx="2"
          fill={idx >= 6 ? "#8840d0" : "#2c1e48"} />
      ))}
    </svg>
  );
}

// ── Imobiliária — dark teal/green ────────────────────────────────

function WFImobiliaria() {
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Page bg */}
      <rect width="340" height="220" fill="#08131e" />
      {/* Header */}
      <rect width="340" height="32" fill="#0b1828" />
      <rect x="14" y="11" width="46" height="10" rx="2" fill="#0a9060" />
      <rect x="218" y="13" width="24" height="5" rx="2" fill="#162a3a" />
      <rect x="250" y="13" width="24" height="5" rx="2" fill="#162a3a" />
      <rect x="284" y="10" width="46" height="12" rx="6" fill="#0a8050" />
      <line x1="0" y1="32" x2="340" y2="32" stroke="#132030" strokeWidth=".6" />
      {/* Search hero */}
      <rect x="14" y="40" width="312" height="62" rx="5" fill="#0c1c2c" stroke="#162c3e" strokeWidth=".6" />
      <rect x="22" y="50" width="192" height="12" rx="5" fill="#2a607a" />
      <rect x="22" y="66" width="46" height="12" rx="5" fill="#132438" />
      <rect x="76" y="66" width="46" height="12" rx="5" fill="#132438" />
      <rect x="130" y="66" width="46" height="12" rx="5" fill="#132438" />
      <rect x="256" y="44" width="60" height="26" rx="5" fill="#0a8050" />
      {/* Search icon */}
      <circle cx="281" cy="54" r="5" stroke="#6ae0b0" strokeWidth="1.2" fill="none" opacity=".7" />
      <line x1="284.5" y1="57.5" x2="288" y2="61" stroke="#6ae0b0" strokeWidth="1.2" opacity=".7" />
      {/* Property cards 3-col */}
      {[14, 122, 230].map((x, i) => (
        <g key={i}>
          <rect x={x} y="112" width="100" height="104" rx="6" fill="#0c1c2c" stroke="#162c3e" strokeWidth=".5" />
          {/* Property image */}
          <rect x={x} y="112" width="100" height="56" rx="6" fill="#0f2c40" />
          <rect x={x} y="112" width="100" height="56" fill="#0a6040" opacity=".22" />
          {/* House icon */}
          <path d={`M${x + 50},126 L${x + 40},134 L${x + 40},145 L${x + 60},145 L${x + 60},134 Z`}
            fill="#0a7848" opacity=".4" />
          {/* Price tag */}
          <rect x={x + 8} y="118" width="58" height="14" rx="4" fill="#0a7848" />
          <rect x={x + 12} y="122" width="36" height="6" rx="2" fill="#6ae0a8" opacity=".9" />
          {/* Details */}
          <rect x={x + 8} y="175" width="82" height="7" rx="2" fill="#7abca8" />
          <rect x={x + 8} y="186" width="62" height="4" rx="2" fill="#2a5040" />
          <rect x={x + 8} y="194" width="46" height="4" rx="2" fill="#22403a" />
          {/* CTA */}
          <rect x={x + 8} y="202" width="84" height="10" rx="5" fill="#0a7040" opacity=".75" />
        </g>
      ))}
    </svg>
  );
}

// ── Digital Composition ───────────────────────────────────────────

function DigitalComposition() {
  const reduce = useReducedMotion();
  const [px, setPx] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setPx({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const frame = (bg = "oklch(0.12 0.024 260 / 0.95)") => ({
    borderRadius: 10,
    background: bg,
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden" as const,
    border: "1px solid oklch(1 0 0 / 0.08)",
  });

  return (
    <div className="relative" style={{ minHeight: 600, overflow: "hidden" }}>
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 90% 70% at 55% 45%, oklch(0.22 0.07 248 / 0.12), transparent 70%)",
      }} />

      {/* ── Ghost: Imobiliária — far back ── */}
      {!reduce && (
        <div className="absolute hidden sm:block" style={{ top: "0%", left: "28%", width: "52%", transform: "rotate(-4deg)", zIndex: 1 }}>
          <motion.div
            style={{ ...frame("oklch(0.11 0.025 200 / 0.92)"), filter: "blur(2px)", opacity: 0.32, boxShadow: "0 8px 30px oklch(0 0 0 / 0.32)" }}
            animate={{ y: [0, -18, 0], x: px.x * -20 }}
            transition={{ y: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 6 }, x: spring }}
          >
            <BrowserChrome title="imobiliariapremium.com.br" />
            <WFImobiliaria />
          </motion.div>
        </div>
      )}

      {/* ── Tertiary: Academia — mid-left ── */}
      {!reduce && (
        <div className="absolute hidden sm:block" style={{ bottom: "0%", left: "-2%", width: "42%", transform: "rotate(-5deg)", zIndex: 2 }}>
          <motion.div
            style={{ ...frame("oklch(0.10 0.022 285 / 0.94)"), filter: "blur(0.6px)", opacity: 0.48, boxShadow: "0 8px 40px oklch(0 0 0 / 0.42)" }}
            animate={{ y: [0, 14, 0], x: px.x * 18 }}
            transition={{ y: { duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }, x: spring }}
          >
            <BrowserChrome title="academiaelite.com.br" />
            <WFFitness />
          </motion.div>
        </div>
      )}

      {/* ── Secondary: Advocacia — top-right ── */}
      {!reduce && (
        <div className="absolute hidden sm:block" style={{ top: "6%", right: "-2%", width: "50%", transform: "rotate(4deg)", zIndex: 2 }}>
          <motion.div
            style={{ ...frame("oklch(0.09 0.020 255 / 0.96)"), opacity: 0.68, boxShadow: "0 10px 44px oklch(0 0 0 / 0.42)" }}
            animate={{ y: [0, -10, 0], x: px.x * -12 }}
            transition={{ y: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }, x: spring }}
          >
            <BrowserChrome title="tavares-advogados.com.br" />
            <WFAdvocacia />
          </motion.div>
        </div>
      )}

      {/* ── Main: Clínica — front and center ── */}
      <div className="absolute" style={{ top: "8%", left: "1%", width: "78%", transform: "rotate(-1deg)", zIndex: 3 }}>
        <motion.div
          style={{ ...frame("oklch(0.11 0.026 240 / 0.98)"), opacity: 1, boxShadow: "0 24px 80px oklch(0 0 0 / 0.58), 0 0 0 1px oklch(0.72 0.18 245 / 0.07) inset, 0 0 40px oklch(0.20 0.08 248 / 0.08)" }}
          animate={{ y: [0, -7, 0], x: px.x * -6 }}
          transition={{ y: { duration: 12, repeat: Infinity, ease: "easeInOut" }, x: spring }}
        >
          <BrowserChrome title="clinicasorriso.com.br" />
          <WFClinica />
        </motion.div>
      </div>

      {/* ── Floating: Restaurante — bottom-right ── */}
      {!reduce && (
        <div className="absolute hidden sm:block" style={{ bottom: "8%", right: "0%", width: "36%", transform: "rotate(3deg)", zIndex: 4 }}>
          <motion.div
            style={{ ...frame("oklch(0.11 0.022 28 / 0.96)"), opacity: 0.88, boxShadow: "0 16px 56px oklch(0 0 0 / 0.50), 0 0 0 1px oklch(0.72 0.18 245 / 0.05) inset" }}
            animate={{ y: [0, 9, 0], x: px.x * 10 }}
            transition={{ y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }, x: spring }}
          >
            <BrowserChrome title="bistrochaplin.com.br" />
            <WFRestaurante />
          </motion.div>
        </div>
      )}

      {/* Floating PageSpeed badge */}
      {!reduce && (
        <motion.div className="absolute hidden sm:block" style={{ bottom: "22%", right: "1%", zIndex: 10 }}
          animate={{ y: [0, -9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div style={{
            background: "oklch(0.14 0.026 260 / 0.96)", border: "1px solid oklch(1 0 0 / 0.10)",
            borderRadius: 10, padding: "10px 14px", backdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px oklch(0 0 0 / 0.52)",
          }}>
            <div style={{ fontSize: 9, color: "oklch(0.52 0.04 252)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, fontFamily: "var(--font-sans)" }}>
              PageSpeed
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "var(--font-display)", color: "oklch(0.93 0.014 240)", lineHeight: 1 }}>
              100
            </div>
            <div style={{ fontSize: 9, marginTop: 3, color: "oklch(0.65 0.18 150)" }}>↑ Performance</div>
          </div>
        </motion.div>
      )}

      {/* Floating "Site no ar" badge */}
      {!reduce && (
        <motion.div className="absolute hidden sm:block" style={{ top: "44%", right: "1%", zIndex: 10 }}
          animate={{ y: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <div style={{
            background: "oklch(0.14 0.026 260 / 0.96)", border: "1px solid oklch(1 0 0 / 0.10)",
            borderRadius: 10, padding: "8px 12px", backdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px oklch(0 0 0 / 0.52)", display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "oklch(0.65 0.18 150)", boxShadow: "0 0 8px oklch(0.65 0.18 150 / 0.6)", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-display)", color: "oklch(0.93 0.014 240)" }}>Site no ar</div>
              <div style={{ fontSize: 8, color: "oklch(0.52 0.04 252)", marginTop: 1, fontFamily: "var(--font-sans)" }}>Deploy concluído</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Edge gradient masks */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 18%)", zIndex: 20 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 22%)", zIndex: 20 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--background) 0%, transparent 18%)", zIndex: 20 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 16%)", zIndex: 20 }} />
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────

export function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="glow-orb size-[500px] right-[-200px] top-[10%] bg-primary/20 animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: text content */}
        <div>
          <SectionHeader
            eyebrow="Sobre"
            title={
              <>
                Engenharia digital com{" "}
                <span className="text-gradient-primary">obsessão por detalhe</span>.
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-[1.8]">
              Crio sites e landing pages para empresas que se levam a sério. Cada projeto é
              construído sobre estratégia, design refinado e código de alta performance —
              pensado para gerar autoridade e converter visitantes em clientes reais.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-[1.8]">
              Trabalho lado a lado com profissionais autônomos e negócios locais que entendem
              que presença digital premium não é luxo — é o que separa quem é lembrado de quem
              é ignorado.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {([
              ["Estratégia", "Cada pixel com propósito"],
              ["Performance", "Carregamento instantâneo"],
              ["Conversão", "Estrutura orientada a vendas"],
              ["Suporte", "Acompanhamento contínuo"],
            ] as [string, string][]).map(([t, d], i) => (
              <Reveal key={t} delay={0.4 + i * 0.08}>
                <div className="glass-premium rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="font-display text-base font-semibold text-foreground leading-[1.3] tracking-[-0.01em]">{t}</div>
                  <div className="mt-1.5 text-xs text-muted-foreground leading-[1.65]">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: multiple business landing pages composition */}
        <Reveal delay={0.15}>
          <DigitalComposition />
        </Reveal>
      </div>
    </section>
  );
}
