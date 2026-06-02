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

// ── Clínica / Saúde ───────────────────────────────────────────────

function WFClinica() {
  return (
    <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cln-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d3358" /><stop offset="100%" stopColor="#071422" />
        </linearGradient>
        <linearGradient id="cln-r" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c4e7a" /><stop offset="100%" stopColor="#0a2840" />
        </linearGradient>
        <linearGradient id="cln-btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a5ebc" /><stop offset="100%" stopColor="#1a4aa0" />
        </linearGradient>
      </defs>
      <rect width="420" height="260" fill="#071828" />

      {/* Nav */}
      <rect width="420" height="32" fill="#060e1b" />
      <rect x="13" y="12" width="3" height="8" rx="1.5" fill="#2a7dc8" />
      <rect x="10" y="15" width="9" height="3" rx="1.5" fill="#2a7dc8" />
      <text x="26" y="20" fontSize="8" fontWeight="700" fill="#d8eeff" fontFamily="'Space Grotesk', sans-serif">Clínica Sorriso</text>
      <text x="158" y="20" fontSize="6.5" fill="#507898" fontFamily="'Inter', sans-serif">Serviços</text>
      <text x="198" y="20" fontSize="6.5" fill="#507898" fontFamily="'Inter', sans-serif">Equipe</text>
      <text x="234" y="20" fontSize="6.5" fill="#507898" fontFamily="'Inter', sans-serif">Resultados</text>
      <rect x="300" y="8" width="108" height="16" rx="8" fill="url(#cln-btn)" />
      <text x="319" y="18" fontSize="6.5" fill="#fff" fontFamily="'Inter', sans-serif" fontWeight="600">Agendar Consulta</text>
      <line x1="0" y1="32" x2="420" y2="32" stroke="#0d2236" strokeWidth=".6" />

      {/* Hero left */}
      <rect x="0" y="32" width="222" height="118" fill="url(#cln-l)" />
      <rect x="14" y="44" width="88" height="11" rx="5.5" fill="#0a2240" />
      <text x="20" y="51.5" fontSize="5.5" fill="#3a88c8" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="1.2">ODONTOLOGIA PREMIUM</text>
      <text x="14" y="70" fontSize="18" fontWeight="700" fill="#e0f0ff" fontFamily="'Space Grotesk', sans-serif">Sorria com</text>
      <text x="14" y="91" fontSize="18" fontWeight="700" fill="#4a9ed8" fontFamily="'Space Grotesk', sans-serif">Confiança Real</text>
      <text x="14" y="108" fontSize="6.5" fill="#5a8aa8" fontFamily="'Inter', sans-serif">Tratamentos modernos, tecnologia de ponta</text>
      <text x="14" y="118" fontSize="6.5" fill="#5a8aa8" fontFamily="'Inter', sans-serif">e atendimento verdadeiramente humanizado.</text>
      <rect x="14" y="126" width="96" height="17" rx="8.5" fill="url(#cln-btn)" />
      <text x="24" y="136.5" fontSize="6.5" fill="#fff" fontFamily="'Inter', sans-serif" fontWeight="600">Agendar Consulta</text>
      <rect x="118" y="126" width="78" height="17" rx="8.5" fill="none" stroke="#1e4a78" strokeWidth=".7" />
      <text x="133" y="136.5" fontSize="6.5" fill="#4a90c8" fontFamily="'Inter', sans-serif">Ver Serviços →</text>

      {/* Hero right */}
      <rect x="222" y="32" width="198" height="118" fill="url(#cln-r)" />
      <ellipse cx="321" cy="91" rx="44" ry="50" fill="#2060a0" opacity="0.15" />
      <ellipse cx="321" cy="78" rx="26" ry="30" fill="#3878c0" opacity="0.10" />
      <circle cx="321" cy="66" r="13" fill="#1a4a7a" opacity="0.22" />
      <path d="M307,96 Q321,90 335,96 L338,118 L304,118 Z" fill="#1a4a7a" opacity="0.18" />
      <rect x="234" y="114" width="102" height="24" rx="6" fill="#05101c" fillOpacity="0.88" stroke="#1a3a5a" strokeWidth=".5" />
      <text x="240" y="124" fontSize="9" fill="#f0c030">★★★★★</text>
      <text x="240" y="134" fontSize="5.5" fill="#4a7898" fontFamily="'Inter', sans-serif">4.9 · +500 avaliações verificadas</text>

      {/* Stats */}
      <rect x="0" y="150" width="420" height="36" fill="#050e19" />
      <line x1="140" y1="158" x2="140" y2="178" stroke="#0d2030" strokeWidth=".5" />
      <line x1="280" y1="158" x2="280" y2="178" stroke="#0d2030" strokeWidth=".5" />
      <text x="70" y="167" fontSize="13" fontWeight="700" fill="#3a90d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">500+</text>
      <text x="70" y="178" fontSize="5.5" fill="#3a6888" fontFamily="'Inter', sans-serif" textAnchor="middle">Pacientes atendidos</text>
      <text x="210" y="167" fontSize="13" fontWeight="700" fill="#3a90d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">15 anos</text>
      <text x="210" y="178" fontSize="5.5" fill="#3a6888" fontFamily="'Inter', sans-serif" textAnchor="middle">De experiência</text>
      <text x="350" y="167" fontSize="13" fontWeight="700" fill="#3a90d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">98%</text>
      <text x="350" y="178" fontSize="5.5" fill="#3a6888" fontFamily="'Inter', sans-serif" textAnchor="middle">Satisfação garantida</text>

      {/* Service cards */}
      {([ ["Implantes", "Tecnologia 3D guiada", "A partir de R$ 1.200"],
          ["Ortodontia", "Alinhadores invisíveis", "Consulta gratuita"],
          ["Clareamento", "8 tons mais claro", "R$ 380 · 1 sessão"],
      ] as [string,string,string][]).map(([t, s, p], i) => (
        <g key={i}>
          <rect x={i * 140} y="186" width="140" height="74" fill="#09192c" stroke="#102236" strokeWidth=".4" />
          <rect x={i * 140} y="186" width="140" height="3" fill="#1e5aaa" />
          <rect x={i * 140 + 10} y="197" width="20" height="20" rx="4" fill="#0c2240" stroke="#1a3e60" strokeWidth=".5" />
          <rect x={i * 140 + 19} y="202" width="2" height="10" rx="1" fill="#3a88c8" opacity="0.7" />
          <rect x={i * 140 + 15} y="206" width="10" height="2" rx="1" fill="#3a88c8" opacity="0.7" />
          <text x={i * 140 + 36} y="208" fontSize="7.5" fontWeight="600" fill="#bcd6f0" fontFamily="'Space Grotesk', sans-serif">{t}</text>
          <text x={i * 140 + 36} y="219" fontSize="5.5" fill="#3a6880" fontFamily="'Inter', sans-serif">{s}</text>
          <text x={i * 140 + 10} y="234" fontSize="6" fill="#2a6aaa" fontFamily="'Inter', sans-serif">{p}</text>
          <rect x={i * 140 + 10} y="242" width="116" height="13" rx="6.5" fill="#0d2748" stroke="#1a3e60" strokeWidth=".5" />
          <text x={i * 140 + 38} y="250.5" fontSize="6" fill="#3a88c8" fontFamily="'Inter', sans-serif">Saiba mais →</text>
        </g>
      ))}
    </svg>
  );
}

// ── Restaurante ───────────────────────────────────────────────────

function WFRestaurante() {
  return (
    <svg viewBox="0 0 260 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="rst-hero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#280d06" /><stop offset="100%" stopColor="#120907" />
        </linearGradient>
      </defs>
      <rect width="260" height="350" fill="#120907" />
      <rect width="260" height="178" fill="url(#rst-hero)" />
      <ellipse cx="130" cy="90" rx="110" ry="80" fill="#c04800" opacity="0.08" />

      {/* Nav */}
      <text x="130" y="17" fontSize="10" fontWeight="700" fill="#c47828" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">BISTRÔ CHAPLIN</text>
      <text x="130" y="27" fontSize="5" fill="#6a3010" fontFamily="'Inter', sans-serif" textAnchor="middle" letterSpacing="2">DEPUIS 1998</text>
      <text x="188" y="20" fontSize="6" fill="#4a2810" fontFamily="'Inter', sans-serif">Cardápio</text>
      <text x="222" y="20" fontSize="6" fill="#4a2810" fontFamily="'Inter', sans-serif">Reservas</text>
      <line x1="0" y1="36" x2="260" y2="36" stroke="#2a1008" strokeWidth=".5" />

      {/* Hero content */}
      <text x="130" y="62" fontSize="5.5" fill="#7a4820" fontFamily="'Inter', sans-serif" textAnchor="middle" letterSpacing="2">CULINÁRIA FRANCESA</text>
      <text x="130" y="82" fontSize="19" fontWeight="700" fill="#f0c06a" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">A Arte da</text>
      <text x="130" y="103" fontSize="19" fontWeight="700" fill="#f0c06a" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">Culinária</text>
      <text x="130" y="122" fontSize="6.5" fill="#6a3818" fontFamily="'Inter', sans-serif" textAnchor="middle">Ingredientes frescos, receitas clássicas</text>
      <text x="130" y="132" fontSize="6.5" fill="#6a3818" fontFamily="'Inter', sans-serif" textAnchor="middle">e uma experiência inesquecível.</text>
      <rect x="70" y="144" width="120" height="20" rx="10" fill="#c47828" />
      <text x="130" y="156" fontSize="7.5" fontWeight="600" fill="#fff" fontFamily="'Inter', sans-serif" textAnchor="middle">Reservar Mesa</text>
      <text x="130" y="174" fontSize="8" fill="#c47828" textAnchor="middle" opacity="0.5">★ ★ ★ ★ ★</text>

      {/* Menu section */}
      <rect x="0" y="178" width="260" height="172" fill="#110907" />
      <text x="130" y="197" fontSize="9" fontWeight="700" fill="#c47828" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">Nosso Cardápio</text>
      <rect x="14" y="204" width="50" height="13" rx="6.5" fill="#c47828" />
      <text x="39" y="213" fontSize="6" fill="#fff" fontFamily="'Inter', sans-serif" textAnchor="middle">Entradas</text>
      <rect x="72" y="204" width="42" height="13" rx="6.5" fill="#1e0e06" stroke="#4a2010" strokeWidth=".4" />
      <text x="93" y="213" fontSize="6" fill="#6a3818" fontFamily="'Inter', sans-serif" textAnchor="middle">Pratos</text>
      <rect x="122" y="204" width="50" height="13" rx="6.5" fill="#1e0e06" stroke="#4a2010" strokeWidth=".4" />
      <text x="147" y="213" fontSize="6" fill="#6a3818" fontFamily="'Inter', sans-serif" textAnchor="middle">Sobremesas</text>
      <rect x="180" y="204" width="38" height="13" rx="6.5" fill="#1e0e06" stroke="#4a2010" strokeWidth=".4" />
      <text x="199" y="213" fontSize="6" fill="#6a3818" fontFamily="'Inter', sans-serif" textAnchor="middle">Vinhos</text>

      {/* Menu cards */}
      {([
        [14, 226, "Foie Gras", "Brioche artesanal", "R$ 68"],
        [138, 226, "Salmão Ceviche", "Leche de tigre", "R$ 54"],
        [14, 292, "Magret de Pato", "Redução de laranja", "R$ 98"],
        [138, 292, "Risotto Trufado", "Funghi & parmesão", "R$ 86"],
      ] as [number,number,string,string,string][]).map(([x, y, name, desc, price], i) => (
        <g key={i}>
          <rect x={x} y={y} width="110" height="58" rx="6" fill="#1c1008" stroke="#3a1e08" strokeWidth=".5" />
          <rect x={x} y={y} width="110" height="30" rx="6" fill="#2a1208" />
          <rect x={x} y={y + 20} width="110" height="10" fill="#2a1208" />
          <ellipse cx={x + 55} cy={y + 15} rx="26" ry="12" fill="#c04800" opacity="0.09" />
          <circle cx={x + 55} cy={y + 15} r="9" fill="none" stroke="#5a3010" strokeWidth=".7" opacity="0.5" />
          <circle cx={x + 55} cy={y + 15} r="5" fill="#3a1e08" opacity="0.4" />
          <text x={x + 8} y={y + 41} fontSize="7" fontWeight="600" fill="#d4903a" fontFamily="'Space Grotesk', sans-serif">{name}</text>
          <text x={x + 8} y={y + 50} fontSize="5.5" fill="#5a3018" fontFamily="'Inter', sans-serif">{desc}</text>
          <text x={x + 72} y={y + 50} fontSize="6.5" fontWeight="600" fill="#c47828" fontFamily="'Space Grotesk', sans-serif">{price}</text>
        </g>
      ))}
    </svg>
  );
}

// ── Advocacia ─────────────────────────────────────────────────────

function WFAdvocacia() {
  return (
    <svg viewBox="0 0 380 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="adv-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d0f1a" /><stop offset="100%" stopColor="#070810" />
        </linearGradient>
        <linearGradient id="adv-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8a030" /><stop offset="100%" stopColor="#a87820" />
        </linearGradient>
      </defs>
      <rect width="380" height="240" fill="#07090f" />

      {/* Header */}
      <rect width="380" height="36" fill="#090c14" />
      <rect x="0" y="0" width="380" height="1.5" fill="url(#adv-gold)" opacity="0.4" />
      <text x="16" y="15" fontSize="9" fontWeight="700" fill="#b8902a" fontFamily="'Space Grotesk', sans-serif" letterSpacing="1.5">TAVARES</text>
      <text x="16" y="26" fontSize="5.5" fill="#6a5018" fontFamily="'Inter', sans-serif" letterSpacing="2.5">ADVOGADOS</text>
      <text x="170" y="20" fontSize="6.5" fill="#2e2c3e" fontFamily="'Inter', sans-serif">Especialidades</text>
      <text x="238" y="20" fontSize="6.5" fill="#2e2c3e" fontFamily="'Inter', sans-serif">Equipe</text>
      <text x="278" y="20" fontSize="6.5" fill="#2e2c3e" fontFamily="'Inter', sans-serif">Casos</text>
      <rect x="304" y="11" width="60" height="14" rx="7" fill="none" stroke="#b8902a" strokeWidth=".7" />
      <text x="316" y="20" fontSize="6" fill="#b8902a" fontFamily="'Inter', sans-serif">Consulta</text>
      <line x1="0" y1="36" x2="380" y2="36" stroke="#14182a" strokeWidth=".6" />
      <rect x="0" y="35.5" width="380" height="1" fill="url(#adv-gold)" opacity="0.1" />

      {/* Hero */}
      <rect x="0" y="36" width="380" height="120" fill="url(#adv-hero)" />
      <rect x="280" y="36" width="1" height="120" fill="#b8902a" opacity="0.04" />
      <rect x="340" y="36" width="1" height="120" fill="#b8902a" opacity="0.03" />
      <rect x="16" y="50" width="88" height="11" rx="5.5" fill="#14100a" />
      <text x="22" y="57.5" fontSize="5.5" fill="#8a6820" fontFamily="'Inter', sans-serif" letterSpacing="1.5">ESCRITÓRIO PREMIUM</text>
      <text x="16" y="76" fontSize="16" fontWeight="700" fill="#ede0c0" fontFamily="'Space Grotesk', sans-serif">Defendemos seus</text>
      <text x="16" y="95" fontSize="16" fontWeight="700" fill="#b8902a" fontFamily="'Space Grotesk', sans-serif">Direitos</text>
      <text x="104" y="95" fontSize="16" fontWeight="700" fill="#ede0c0" fontFamily="'Space Grotesk', sans-serif">com Excelência</text>
      <text x="16" y="112" fontSize="6.5" fill="#3a3848" fontFamily="'Inter', sans-serif">Mais de 20 anos defendendo pessoas e empresas</text>
      <text x="16" y="122" fontSize="6.5" fill="#3a3848" fontFamily="'Inter', sans-serif">com ética, estratégia e resultados comprovados.</text>
      <rect x="16" y="130" width="108" height="19" rx="9.5" fill="url(#adv-gold)" />
      <text x="28" y="141" fontSize="7" fontWeight="600" fill="#07090f" fontFamily="'Inter', sans-serif">Agendar Consulta</text>
      <rect x="132" y="130" width="82" height="19" rx="9.5" fill="none" stroke="#2e2a1e" strokeWidth=".7" />
      <text x="148" y="141" fontSize="7" fill="#8a6820" fontFamily="'Inter', sans-serif">Nossos Casos →</text>

      {/* Practice area cards */}
      {([
        [0, "Direito Civil", "Contratos, família e sucessões"],
        [128, "Dir. Trabalhista", "Rescisões e direitos do trabalho"],
        [256, "Dir. Empresarial", "M&A, contratos e compliance"],
      ] as [number,string,string][]).map(([x, title, sub], i) => (
        <g key={i}>
          <rect x={x} y="156" width="124" height="84" fill="#090c16" stroke="#14182a" strokeWidth=".4" />
          <rect x={x} y="156" width="124" height="2.5" fill="url(#adv-gold)" />
          <rect x={x + 10} y="168" width="20" height="20" rx="4" fill="#12100a" stroke="#b8902a" strokeWidth=".5" />
          <line x1={x + 20} y1="172" x2={x + 20} y2="184" stroke="#b8902a" strokeWidth=".8" opacity="0.6" />
          <line x1={x + 14} y1="174" x2={x + 26} y2="174" stroke="#b8902a" strokeWidth=".8" opacity="0.5" />
          <circle cx={x + 14} cy="177" r="2" fill="none" stroke="#b8902a" strokeWidth=".5" opacity="0.4" />
          <circle cx={x + 26} cy="177" r="2" fill="none" stroke="#b8902a" strokeWidth=".5" opacity="0.4" />
          <text x={x + 10} y="202" fontSize="7.5" fontWeight="600" fill="#ccc0a0" fontFamily="'Space Grotesk', sans-serif">{title}</text>
          <text x={x + 10} y="213" fontSize="5.5" fill="#363442" fontFamily="'Inter', sans-serif">{sub}</text>
          <text x={x + 10} y="230" fontSize="6" fill="#b8902a" fontFamily="'Inter', sans-serif">Saiba mais →</text>
        </g>
      ))}
    </svg>
  );
}

// ── Academia / Fitness ────────────────────────────────────────────

function WFFitness() {
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="fit-hero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e0c1c" /><stop offset="100%" stopColor="#07060e" />
        </linearGradient>
        <linearGradient id="fit-btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7030c0" /><stop offset="100%" stopColor="#5820a0" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="#07060e" />
      <rect width="300" height="195" fill="url(#fit-hero)" />
      <ellipse cx="150" cy="80" rx="120" ry="70" fill="#6020a8" opacity="0.10" />

      {/* Nav */}
      <rect x="14" y="10" width="36" height="14" rx="4" fill="#6020a8" opacity="0.4" />
      <text x="16" y="19" fontSize="8" fontWeight="700" fill="#c080ff" fontFamily="'Space Grotesk', sans-serif">ELITE</text>
      <text x="136" y="19" fontSize="6.5" fill="#2a1e40" fontFamily="'Inter', sans-serif">Planos</text>
      <text x="172" y="19" fontSize="6.5" fill="#2a1e40" fontFamily="'Inter', sans-serif">Aulas</text>
      <text x="208" y="19" fontSize="6.5" fill="#2a1e40" fontFamily="'Inter', sans-serif">Equipe</text>
      <rect x="246" y="8" width="42" height="15" rx="7.5" fill="url(#fit-btn)" />
      <text x="250" y="17.5" fontSize="6" fill="#fff" fontFamily="'Inter', sans-serif" fontWeight="600">Matricule-se</text>
      <line x1="0" y1="32" x2="300" y2="32" stroke="#12101e" strokeWidth=".5" />

      {/* Hero */}
      <rect x="14" y="44" width="72" height="11" rx="5.5" fill="#1a0e2e" />
      <text x="20" y="51.5" fontSize="5.5" fill="#7030c0" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="1.2">ACADEMIA PREMIUM</text>
      <text x="14" y="72" fontSize="22" fontWeight="700" fill="#ece8ff" fontFamily="'Space Grotesk', sans-serif">Transforme</text>
      <text x="14" y="96" fontSize="22" fontWeight="700" fill="#8840d0" fontFamily="'Space Grotesk', sans-serif">Seu Corpo</text>
      <text x="14" y="114" fontSize="6.5" fill="#3e2e58" fontFamily="'Inter', sans-serif">Treinos personalizados, estrutura premium</text>
      <text x="14" y="124" fontSize="6.5" fill="#3e2e58" fontFamily="'Inter', sans-serif">e acompanhamento de especialistas reais.</text>
      <rect x="14" y="135" width="110" height="18" rx="9" fill="url(#fit-btn)" />
      <text x="24" y="146" fontSize="7" fill="#fff" fontFamily="'Inter', sans-serif" fontWeight="600">Começar Agora</text>
      <rect x="132" y="135" width="74" height="18" rx="9" fill="none" stroke="#2e1e48" strokeWidth=".7" />
      <text x="148" y="146" fontSize="7" fill="#7030c0" fontFamily="'Inter', sans-serif">Ver Planos →</text>

      {/* Stats */}
      <rect x="0" y="168" width="300" height="27" fill="#060410" />
      <line x1="100" y1="175" x2="100" y2="188" stroke="#120e1e" strokeWidth=".5" />
      <line x1="200" y1="175" x2="200" y2="188" stroke="#120e1e" strokeWidth=".5" />
      <text x="50" y="183" fontSize="12" fontWeight="700" fill="#7840d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">2.000+</text>
      <text x="50" y="192" fontSize="5.5" fill="#2e1e48" fontFamily="'Inter', sans-serif" textAnchor="middle">Alunos ativos</text>
      <text x="150" y="183" fontSize="12" fontWeight="700" fill="#7840d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">8 anos</text>
      <text x="150" y="192" fontSize="5.5" fill="#2e1e48" fontFamily="'Inter', sans-serif" textAnchor="middle">No mercado</text>
      <text x="250" y="183" fontSize="12" fontWeight="700" fill="#7840d0" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">97%</text>
      <text x="250" y="192" fontSize="5.5" fill="#2e1e48" fontFamily="'Inter', sans-serif" textAnchor="middle">Satisfação</text>

      {/* Program cards 2x2 */}
      {([
        [14, 208, "CrossFit", "Alta intensidade", "#8840d0"],
        [160, 208, "Funcional", "Treino completo", "#7030c0"],
        [14, 294, "Musculação", "Hipertrofia máxima", "#6020a8"],
        [160, 294, "Yoga & Pilates", "Equilíbrio e força", "#9050d8"],
      ] as [number,number,string,string,string][]).map(([x, y, name, desc, color], i) => (
        <g key={i}>
          <rect x={x} y={y} width="124" height="76" rx="6" fill="#0c0a1a" stroke="#1e1630" strokeWidth=".5" />
          <rect x={x} y={y} width="124" height="40" rx="6" fill="#16122a" />
          <rect x={x} y={y + 30} width="124" height="10" fill="#16122a" />
          <ellipse cx={x + 62} cy={y + 20} rx="38" ry="16" fill={color} opacity="0.10" />
          <circle cx={x + 62} cy={y + 20} r="12" fill={color} opacity="0.28" />
          <path d={`M${x + 58},${y + 15} L${x + 69},${y + 20} L${x + 58},${y + 25} Z`} fill="#e0c0ff" opacity="0.65" />
          <text x={x + 10} y={y + 54} fontSize="8" fontWeight="600" fill="#e0d0ff" fontFamily="'Space Grotesk', sans-serif">{name}</text>
          <text x={x + 10} y={y + 65} fontSize="6" fill="#3e2e58" fontFamily="'Inter', sans-serif">{desc}</text>
          <rect x={x + 10} y={y + 69} width="80" height="2.5" rx="1.5" fill={color} opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}

// ── Imobiliária ───────────────────────────────────────────────────

function WFImobiliaria() {
  return (
    <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="imb-hdr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1c2c" /><stop offset="100%" stopColor="#07141e" />
        </linearGradient>
        <linearGradient id="imb-prop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2c3e" /><stop offset="100%" stopColor="#08181e" />
        </linearGradient>
        <linearGradient id="imb-btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a9060" /><stop offset="100%" stopColor="#0a7848" />
        </linearGradient>
      </defs>
      <rect width="340" height="220" fill="#08131e" />

      {/* Header */}
      <rect width="340" height="30" fill="url(#imb-hdr)" />
      <path d="M12,22 L18,14 L24,22 L24,28 L12,28 Z" fill="#0a8050" opacity="0.7" />
      <text x="28" y="19" fontSize="8" fontWeight="700" fill="#d0eedd" fontFamily="'Space Grotesk', sans-serif">PREMIER</text>
      <text x="28" y="28" fontSize="5" fill="#2a5040" fontFamily="'Inter', sans-serif" letterSpacing="2">IMÓVEIS</text>
      <text x="168" y="18" fontSize="6.5" fill="#1e3a2e" fontFamily="'Inter', sans-serif">Comprar</text>
      <text x="206" y="18" fontSize="6.5" fill="#1e3a2e" fontFamily="'Inter', sans-serif">Alugar</text>
      <text x="244" y="18" fontSize="6.5" fill="#1e3a2e" fontFamily="'Inter', sans-serif">Lançamentos</text>
      <rect x="286" y="9" width="44" height="13" rx="6.5" fill="url(#imb-btn)" />
      <text x="292" y="17" fontSize="6" fill="#fff" fontFamily="'Inter', sans-serif" fontWeight="600">Corretor</text>
      <line x1="0" y1="30" x2="340" y2="30" stroke="#102030" strokeWidth=".5" />

      {/* Search bar */}
      <rect x="10" y="40" width="320" height="58" rx="6" fill="#0b1c2c" stroke="#142838" strokeWidth=".5" />
      <text x="18" y="57" fontSize="7.5" fontWeight="600" fill="#8ab8a8" fontFamily="'Space Grotesk', sans-serif">Encontre o imóvel ideal</text>
      <rect x="16" y="64" width="112" height="26" rx="5" fill="#071420" stroke="#1a3040" strokeWidth=".5" />
      <text x="22" y="73" fontSize="5" fill="#2a5040" fontFamily="'Inter', sans-serif">LOCALIZAÇÃO</text>
      <text x="22" y="83" fontSize="6.5" fill="#5a9080" fontFamily="'Inter', sans-serif">São Paulo, SP</text>
      <rect x="136" y="64" width="90" height="26" rx="5" fill="#071420" stroke="#1a3040" strokeWidth=".5" />
      <text x="142" y="73" fontSize="5" fill="#2a5040" fontFamily="'Inter', sans-serif">TIPO</text>
      <text x="142" y="83" fontSize="6.5" fill="#5a9080" fontFamily="'Inter', sans-serif">Apartamento</text>
      <rect x="234" y="64" width="68" height="26" rx="5" fill="#071420" stroke="#1a3040" strokeWidth=".5" />
      <text x="240" y="73" fontSize="5" fill="#2a5040" fontFamily="'Inter', sans-serif">VALOR</text>
      <text x="240" y="83" fontSize="6.5" fill="#5a9080" fontFamily="'Inter', sans-serif">Até R$ 1M</text>
      <rect x="304" y="64" width="22" height="26" rx="5" fill="url(#imb-btn)" />
      <circle cx="313" cy="73" r="4" fill="none" stroke="#6ae0b0" strokeWidth="1" opacity="0.7" />
      <line x1="316" y1="76" x2="319" y2="79" stroke="#6ae0b0" strokeWidth="1" opacity="0.7" />

      {/* Property cards */}
      {([
        [8, 108, "Av. Paulista, 1500", "R$ 1.200.000", "120m² · 3 quartos · Venda"],
        [120, 108, "Vila Madalena, 280", "R$ 4.800/mês", "90m² · 2 quartos · Aluguel"],
        [232, 108, "Moema, Rua das Flores", "R$ 890.000", "95m² · 2 quartos · Venda"],
      ] as [number,number,string,string,string][]).map(([x, y, addr, price, detail], i) => (
        <g key={i}>
          <rect x={x} y={y} width="104" height="108" rx="5" fill="#0b1c2c" stroke="#122030" strokeWidth=".4" />
          <rect x={x} y={y} width="104" height="56" rx="5" fill="url(#imb-prop)" />
          <rect x={x} y={y + 46} width="104" height="10" fill="#0b1828" />
          <rect x={x + 20} y={y + 18} width="64" height="28" rx="3" fill="#1a3a50" opacity="0.4" />
          <path d={`M${x + 16},${y + 20} L${x + 52},${y + 6} L${x + 88},${y + 20}`} fill="#1a4a60" opacity="0.28" />
          <rect x={x + 6} y={y + 4} width="60" height="14" rx="4" fill="#07181e" fillOpacity="0.9" stroke="#0a5040" strokeWidth=".4" />
          <text x={x + 10} y={y + 14} fontSize="7" fontWeight="600" fill="#4ad898" fontFamily="'Space Grotesk', sans-serif">{price}</text>
          <text x={x + 8} y={y + 71} fontSize="6.5" fontWeight="600" fill="#7abca8" fontFamily="'Space Grotesk', sans-serif">{addr}</text>
          <text x={x + 8} y={y + 82} fontSize="5.5" fill="#2a5040" fontFamily="'Inter', sans-serif">{detail}</text>
          <line x1={x + 8} y1={y + 89} x2={x + 96} y2={y + 89} stroke="#122030" strokeWidth=".4" />
          <rect x={x + 8} y={y + 93} width="88" height="10" rx="5" fill="#0a3a28" stroke="#0a7040" strokeWidth=".4" />
          <text x={x + 22} y={y + 100} fontSize="6" fill="#0a9060" fontFamily="'Inter', sans-serif">Ver Detalhes →</text>
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
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 90% 70% at 55% 45%, oklch(0.22 0.07 248 / 0.12), transparent 70%)",
      }} />

      {/* Ghost: Imobiliária — far back */}
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

      {/* Tertiary: Academia — mid-left */}
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

      {/* Secondary: Advocacia — top-right */}
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

      {/* Main: Clínica — front and center */}
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

      {/* Floating: Restaurante — bottom-right */}
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

      {/* PageSpeed badge */}
      {!reduce && (
        <motion.div className="absolute hidden sm:block" style={{ bottom: "22%", right: "1%", zIndex: 10 }}
          animate={{ y: [0, -9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div style={{
            background: "oklch(0.14 0.026 260 / 0.96)", border: "1px solid oklch(1 0 0 / 0.10)",
            borderRadius: 10, padding: "10px 14px", backdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px oklch(0 0 0 / 0.52)",
          }}>
            <div style={{ fontSize: 9, color: "oklch(0.52 0.04 252)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, fontFamily: "var(--font-sans)" }}>PageSpeed</div>
            <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "var(--font-display)", color: "oklch(0.93 0.014 240)", lineHeight: 1 }}>100</div>
            <div style={{ fontSize: 9, marginTop: 3, color: "oklch(0.65 0.18 150)" }}>↑ Performance</div>
          </div>
        </motion.div>
      )}

      {/* "Site no ar" badge */}
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
                <span className="text-gradient-primary">obsessão por detalhe</span>
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

        {/* Right: landing pages composition */}
        <Reveal delay={0.15}>
          <DigitalComposition />
        </Reveal>
      </div>
    </section>
  );
}
