import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const matheusAsset = { url: "/matheus.png" };
const waUrl = `https://wa.me/5582996895359?text=${encodeURIComponent("Olá Matheus! Acabei de visitar seu portfólio e gostaria de conversar sobre um site ou landing page para meu negócio.")}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 50, damping: 20 };

function StaggerWord({ text, delay = 0, gradient = false }: { text: string; delay?: number; gradient?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-bottom" style={{ paddingRight: "0.32em" }}>
      <motion.span
        initial={{ y: "112%", filter: "blur(8px)", opacity: 0 }}
        animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.1, ease, delay }}
        className={gradient ? "inline-block will-change-transform text-gradient-primary" : "inline-block will-change-transform"}
      >
        {text}
      </motion.span>
    </span>
  );
}

type Particle = { x: number; y: number; sz: number; dur: number; del: number; kind: 0 | 1 | 2 };
function CinematicParticles() {
  const [pts, setPts] = useState<Particle[]>([]);
  useEffect(() => {
    setPts(
      Array.from({ length: 58 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        sz: Math.random() * 2.5 + 0.6,
        dur: Math.random() * 10 + 8,
        del: Math.random() * 7,
        kind: (i % 6 === 0 ? 2 : i % 4 === 0 ? 1 : 0) as 0 | 1 | 2,
      }))
    );
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pts.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ opacity: [0, p.kind === 0 ? 0.65 : 0.28, 0], y: [0, -28, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.del }}
        >
          {p.kind === 0 && <div className="rounded-full bg-primary" style={{ width: p.sz, height: p.sz }} />}
          {p.kind === 1 && <div className="rounded-full border border-primary/30" style={{ width: p.sz * 5, height: p.sz * 5 }} />}
          {p.kind === 2 && (
            <div className="relative" style={{ width: p.sz * 4, height: p.sz * 4 }}>
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-primary/25" />
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary/25" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ScanLine() {
  return (
    <motion.div
      className="absolute inset-x-0 pointer-events-none"
      style={{
        height: 2,
        zIndex: 15,
        background: "linear-gradient(90deg, transparent 0%, oklch(0.72 0.18 245 / 0.2) 25%, oklch(0.55 0.22 265 / 0.55) 50%, oklch(0.72 0.18 245 / 0.2) 75%, transparent 100%)",
        boxShadow: "0 0 28px 3px oklch(0.72 0.18 245 / 0.2)",
      }}
      initial={{ top: "-2px" }}
      animate={{ top: "101%" }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatDelay: 5 }}
    />
  );
}

function WireframeBrowser() {
  return (
    <svg viewBox="0 0 340 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x=".5" y=".5" width="339" height="209" rx="8" stroke="currentColor" strokeWidth=".8" />
      <rect width="340" height="28" rx="8" fill="currentColor" fillOpacity=".04" />
      <line x1="0" y1="28" x2="340" y2="28" stroke="currentColor" strokeWidth=".6" />
      <circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth=".7" />
      <circle cx="30" cy="14" r="4" stroke="currentColor" strokeWidth=".7" />
      <circle cx="44" cy="14" r="4" stroke="currentColor" strokeWidth=".7" />
      <rect x="62" y="8" width="180" height="12" rx="6" stroke="currentColor" strokeWidth=".6" />
      <rect x="18" y="40" width="304" height="76" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
      <rect x="32" y="56" width="110" height="7" rx="2" fill="currentColor" fillOpacity=".14" />
      <rect x="32" y="70" width="75" height="4" rx="2" fill="currentColor" fillOpacity=".08" />
      <rect x="32" y="80" width="55" height="4" rx="2" fill="currentColor" fillOpacity=".06" />
      <rect x="32" y="94" width="52" height="13" rx="6.5" fill="currentColor" fillOpacity=".1" />
      {[18, 120, 228].map((x, i) => (
        <g key={i}>
          <rect x={x} y="130" width="93" height="66" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
          <rect x={x + 8} y="146" width="60" height="4" rx="2" fill="currentColor" fillOpacity=".12" />
          <rect x={x + 8} y="156" width="40" height="3" rx="2" fill="currentColor" fillOpacity=".07" />
          <rect x={x + 8} y="164" width="50" height="3" rx="2" fill="currentColor" fillOpacity=".05" />
        </g>
      ))}
    </svg>
  );
}

function WireframeDashboard() {
  return (
    <svg viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x=".5" y=".5" width="299" height="189" rx="8" stroke="currentColor" strokeWidth=".8" />
      <rect width="64" height="190" rx="8" fill="currentColor" fillOpacity=".03" />
      <line x1="64" y1="0" x2="64" y2="190" stroke="currentColor" strokeWidth=".5" />
      <rect x="12" y="18" width="40" height="6" rx="2" fill="currentColor" fillOpacity=".14" />
      {[44, 58, 72, 86, 100].map((y, i) => (
        <rect key={i} x="12" y={y} width="40" height="4" rx="2" fill="currentColor" fillOpacity=".07" />
      ))}
      <rect x="74" y="14" width="80" height="6" rx="2" fill="currentColor" fillOpacity=".14" />
      {[74, 130, 186, 237].map((x, i) => (
        <rect key={i} x={x} y="32" width="48" height="32" rx="3" fill="currentColor" fillOpacity=".03" stroke="currentColor" strokeWidth=".5" />
      ))}
      <rect x="74" y="78" width="152" height="100" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
      <polyline points="85,165 102,145 120,155 140,125 160,135 180,108 200,120 216,100" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="236" y="78" width="54" height="100" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
      <rect x="244" y="90" width="36" height="3" rx="2" fill="currentColor" fillOpacity=".1" />
      <rect x="244" y="100" width="24" height="3" rx="2" fill="currentColor" fillOpacity=".07" />
    </svg>
  );
}

function WireframeLanding() {
  return (
    <svg viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x=".5" y=".5" width="219" height="299" rx="6" stroke="currentColor" strokeWidth=".7" />
      <rect width="220" height="24" rx="6" fill="currentColor" fillOpacity=".03" />
      <line x1="0" y1="24" x2="220" y2="24" stroke="currentColor" strokeWidth=".5" />
      <rect x="10" y="8" width="32" height="6" rx="2" fill="currentColor" fillOpacity=".14" />
      <rect x="158" y="10" width="20" height="4" rx="2" fill="currentColor" fillOpacity=".08" />
      <rect x="136" y="10" width="16" height="4" rx="2" fill="currentColor" fillOpacity=".08" />
      <rect x="116" y="10" width="14" height="4" rx="2" fill="currentColor" fillOpacity=".08" />
      <rect x="14" y="36" width="192" height="110" rx="3" fill="currentColor" fillOpacity=".02" />
      <rect x="34" y="56" width="152" height="9" rx="2" fill="currentColor" fillOpacity=".14" />
      <rect x="46" y="72" width="128" height="5" rx="2" fill="currentColor" fillOpacity=".07" />
      <rect x="52" y="83" width="116" height="5" rx="2" fill="currentColor" fillOpacity=".06" />
      <rect x="60" y="100" width="100" height="16" rx="8" fill="currentColor" fillOpacity=".1" />
      {[14, 80, 146].map((x, i) => (
        <rect key={i} x={x} y="158" width="60" height="70" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
      ))}
      <rect x="14" y="240" width="192" height="50" rx="3" fill="currentColor" fillOpacity=".02" stroke="currentColor" strokeWidth=".5" />
      <rect x="24" y="255" width="80" height="4" rx="2" fill="currentColor" fillOpacity=".1" />
      <rect x="24" y="265" width="56" height="3" rx="2" fill="currentColor" fillOpacity=".07" />
    </svg>
  );
}

function StatValue({ raw }: { raw: string }) {
  const match = raw.match(/(\d+)/);
  if (!match) return <div className="font-display text-2xl md:text-3xl font-medium text-gradient">{raw}</div>;
  const target = parseInt(match[1], 10);
  const pre = raw.slice(0, match.index ?? 0);
  const post = raw.slice((match.index ?? 0) + match[1].length);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const dur = 1800;
          const total = Math.round(dur / (1000 / 60));
          let frame = 0;
          const id = setInterval(() => {
            frame++;
            const p = frame / total;
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.min(Math.round(target * eased), target));
            if (frame >= total) clearInterval(id);
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, started]);

  return (
    <div ref={ref} className="font-display text-2xl md:text-3xl font-medium text-gradient">
      {pre}{count}{post}
    </div>
  );
}

const bgFull = "oklch(0.07 0.012 260)";
const bgA = (a: number) => `oklch(0.07 0.012 260 / ${a})`;

export function Hero() {
  const headline = "Sites e Landing Pages que transformam autoridade em resultados".split(" ");
  const reduce = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();
  const gridScrollY = useTransform(scrollY, [0, 700], [0, 260]);

  // Desktop: content slides up and fades out on scroll (unchanged)
  const desktopContentY = useTransform(scrollY, [0, 500], [0, -70]);
  const desktopHeroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  // Mobile: content APPEARS as user scrolls (50% → 100% opacity)
  const mobileContentOpacity = useTransform(scrollY, [0, 220], [0.45, 1]);

  // Mobile: photo parallax — photo moves up slower than scroll, creating depth
  const mobilePhotoY = useTransform(scrollY, [0, 600], [0, -80]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setParallax({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise">

      {/* L0: cinematic base */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 75% 50% at 64% 22%, oklch(0.20 0.07 248 / 0.18), transparent 68%)",
            `linear-gradient(175deg, ${bgFull} 0%, oklch(0.05 0.008 260) 50%, ${bgFull} 100%)`,
          ].join(", "),
        }}
      />

      {/* L1: 3D perspective floor grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: "500px", perspectiveOrigin: "50% 100%" }}>
        <motion.div
          style={{
            position: "absolute",
            width: "220%",
            height: "240%",
            left: "-60%",
            top: "-10%",
            backgroundImage:
              "linear-gradient(oklch(0.72 0.18 245 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.18 245 / 1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.026,
            rotateX: "62deg",
            y: gridScrollY,
            maskImage: "radial-gradient(ellipse 100% 70% at 50% 115%, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 70% at 50% 115%, black 0%, transparent 65%)",
          }}
        />
      </div>

      {/* L2: Background wireframes — desktop only */}
      {!reduce && (
        <>
          <motion.div
            className="absolute pointer-events-none text-primary hidden md:block"
            style={{ top: "-6%", right: "-9%", width: "44vw", maxWidth: 540, opacity: 0.036, rotate: "8deg" }}
            animate={{ x: parallax.x * -18, y: [0, -22, 0, 22, 0] }}
            transition={{ x: spring, y: { duration: 22, repeat: Infinity, ease: "easeInOut" } }}
          >
            <WireframeBrowser />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none text-primary hidden md:block"
            style={{ bottom: "-4%", left: "-11%", width: "40vw", maxWidth: 500, opacity: 0.024, rotate: "-7deg" }}
            animate={{ x: parallax.x * 22, y: [0, 18, 0, -18, 0] }}
            transition={{ x: spring, y: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 } }}
          >
            <WireframeDashboard />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none text-primary hidden md:block"
            style={{ top: "4%", left: "5%", width: "22vw", maxWidth: 280, opacity: 0.020, rotate: "-4deg" }}
            animate={{ x: parallax.x * 12, y: [0, 14, 0] }}
            transition={{ x: spring, y: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 } }}
          >
            <WireframeBrowser />
          </motion.div>
        </>
      )}

      {/* L3: Volumetric beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[12%] w-px h-[140%] bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-12 blur-[1px]" />
        <div className="absolute top-[-20%] right-[30%] w-px h-[140%] bg-gradient-to-b from-transparent via-accent/15 to-transparent rotate-12" />
        <div className="absolute top-[-20%] left-[20%] w-px h-[140%] bg-gradient-to-b from-transparent via-primary/10 to-transparent -rotate-6" />
      </div>

      {/* L4: Glow orbs */}
      <motion.div
        animate={{ x: parallax.x * 28, y: parallax.y * 28 }}
        transition={spring}
        className="glow-orb size-[700px] left-[-250px] top-[-180px] bg-primary animate-float-slow"
        style={{ opacity: 0.07 }}
      />
      <motion.div
        animate={{ x: parallax.x * -40, y: parallax.y * -40 }}
        transition={spring}
        className="glow-orb size-[900px] right-[-380px] top-[0%] bg-accent animate-float-reverse"
        style={{ opacity: 0.055 }}
      />

      {/* L5: Atmospheric depth */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 48%, oklch(0.24 0.07 252 / 0.10), transparent 50%)" }} />

      {/* L6: Particles */}
      <CinematicParticles />

      {/* L7: Scan line */}
      {!reduce && <ScanLine />}

      {/* ── PHOTO ── */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 pointer-events-none w-full md:w-[54vw]"
        style={{ zIndex: 2, y: isMobile ? mobilePhotoY : undefined }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
      >
        {/* Aura glow behind photo */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 60% at 52% 35%, oklch(0.28 0.09 248 / 0.08), transparent 72%)" }} />

        {/* Photo */}
        <motion.img
          src={matheusAsset.url}
          alt="Matheus"
          loading="eager"
          animate={reduce || isMobile ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 12%", filter: "contrast(1.14) brightness(0.82) saturate(0.75)" }}
        />

        {/* Mobile overlay: transparent at top (face visible) → dark at bottom (text readable) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: `linear-gradient(to bottom,
              ${bgA(0.18)} 0%,
              ${bgA(0.28)} 25%,
              ${bgA(0.50)} 55%,
              ${bgA(0.80)} 82%,
              ${bgFull} 100%)`,
          }}
        />

        {/* Desktop overlays (unchanged) */}
        <div className="absolute inset-y-0 left-0 hidden md:block" style={{ width: "68%", background: `linear-gradient(to right, ${bgFull} 0%, ${bgA(0.94)} 14%, ${bgA(0.76)} 30%, ${bgA(0.52)} 48%, ${bgA(0.24)} 66%, transparent 88%)` }} />
        <div className="absolute inset-x-0 bottom-0 hidden md:block" style={{ height: "40%", background: `linear-gradient(to top, ${bgFull} 0%, ${bgA(0.80)} 26%, ${bgA(0.40)} 56%, transparent 90%)` }} />
        <div className="absolute inset-x-0 top-0 hidden md:block" style={{ height: "22%", background: `linear-gradient(to bottom, ${bgFull} 0%, ${bgA(0.75)} 45%, transparent 100%)` }} />
        <div className="absolute inset-y-0 right-0" style={{ width: "28%", background: "linear-gradient(to left, oklch(0.35 0.12 245 / 0.06), transparent 100%)" }} />

        {/* Floating metrics card — lg only */}
        {!reduce && (
          <motion.div
            className="absolute hidden lg:block"
            style={{ top: "13%", right: "7%" }}
            animate={{ y: [0, -10, 0], x: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-2xl p-4" style={{ border: "1px solid oklch(1 0 0 / 0.05)", background: "oklch(0.10 0.018 260 / 0.88)", backdropFilter: "blur(24px)", minWidth: 192, boxShadow: "0 8px 40px oklch(0 0 0 / 0.50), 0 0 0 1px oklch(1 0 0 / 0.04)" }}>
              <div className="text-[9px] text-muted-foreground uppercase tracking-[0.16em] mb-3">Resultado médio</div>
              <div className="flex items-end gap-3 mb-3">
                <div>
                  <div className="font-display text-[2rem] leading-none font-semibold text-foreground">+347%</div>
                  <div className="text-[10px] text-emerald-400 mt-1">↑ Conversão</div>
                </div>
                <div className="pl-3" style={{ borderLeft: "1px solid oklch(1 0 0 / 0.06)" }}>
                  <div className="font-display text-2xl leading-none font-semibold text-foreground">98</div>
                  <div className="text-[10px] mt-1" style={{ color: "oklch(0.72 0.18 245 / 0.7)" }}>Perf.</div>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-7">
                {[38, 52, 43, 67, 72, 58, 88, 92].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-[2px]" style={{ height: `${h}%`, originY: 1, background: i >= 6 ? "oklch(0.72 0.18 245 / 0.75)" : "oklch(0.72 0.18 245 / 0.25)" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2 + i * 0.07, duration: 0.5, ease }} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Floating project preview card — lg only */}
        {!reduce && (
          <motion.div
            className="absolute hidden lg:block"
            style={{ bottom: "24%", right: "9%" }}
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="rounded-xl overflow-hidden" style={{ width: 160, border: "1px solid oklch(1 0 0 / 0.05)", background: "oklch(0.10 0.018 260 / 0.88)", backdropFilter: "blur(24px)", boxShadow: "0 8px 40px oklch(0 0 0 / 0.45)" }}>
              <div className="h-[72px] p-2 overflow-hidden" style={{ opacity: 0.5 }}><WireframeLanding /></div>
              <div className="px-3 py-2.5" style={{ borderTop: "1px solid oklch(1 0 0 / 0.04)" }}>
                <div className="text-[10px] text-foreground font-medium">Landing Page</div>
                <div className="text-[9px] text-muted-foreground mt-0.5 tracking-wide">Design premium</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Online badge — lg only */}
        <motion.div
          className="absolute glass rounded-full px-3 py-1.5 text-[10px] tracking-widest uppercase text-muted-foreground hidden lg:flex items-center gap-2"
          style={{ top: "44%", left: "3%", border: "1px solid oklch(1 0 0 / 0.06)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Online · Brasil
        </motion.div>
      </motion.div>

      {/* ── CONTENT ── */}
      <motion.div
        className="relative w-full px-6 lg:px-14 z-10"
        style={{
          y: isMobile ? undefined : desktopContentY,
          opacity: isMobile ? mobileContentOpacity : desktopHeroOpacity,
        }}
      >
        {/* Mobile: centered + full width. Desktop: left-aligned + max-width */}
        <div className="w-full md:max-w-[660px] mx-auto md:mx-0 text-center md:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 border border-primary/20"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" style={{ animationDuration: "2.2s" }} />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Sparkles className="size-3 text-primary/70" />
            Desenvolvedor Web · Especialista em Conversão
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.4rem,4.6vw,5rem)] leading-[1.08] tracking-[-0.03em] font-bold">
            {headline.slice(0, 5).map((w, i) => (
              <StaggerWord key={i} text={w} delay={0.3 + i * 0.06} />
            ))}
            <br />
            <span className="font-extrabold">
              {headline.slice(5).map((w, i) => (
                <StaggerWord key={i} text={w} delay={0.72 + i * 0.06} gradient />
              ))}
            </span>
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.1 }}
            style={{ originX: 0 }}
            className="mt-8 h-px w-14 bg-gradient-to-r from-primary/70 to-transparent mx-auto md:mx-0"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="mt-5 max-w-sm md:max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0"
          >
            Desenvolvo experiências digitais premium para empresas que desejam crescer,
            gerar confiança e conquistar mais clientes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, oklch(0.38 0.16 152), oklch(0.30 0.13 155))", border: "1px solid oklch(0.55 0.20 150 / 0.45)", boxShadow: "0 0 32px oklch(0.50 0.18 150 / 0.22), 0 4px 16px oklch(0 0 0 / 0.35)", color: "oklch(0.90 0.13 150)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[8%] to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 24px oklch(0.55 0.20 150 / 0.18)" }} />
              <WhatsAppIcon className="size-4 shrink-0" />
              Falar no WhatsApp
            </a>
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all border border-white/10 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[5%] to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              Ver Projetos
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.6 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-xs md:max-w-2xl mx-auto md:mx-0"
          >
            {[
              ["+50", "Projetos entregues"],
              ["98%", "Clientes satisfeitos"],
              ["+3 anos", "De experiência"],
              ["100/100", "Performance Score"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-primary/20 pl-4 text-left">
                <StatValue raw={value} />
                <div className="mt-1 text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="opacity-55">Scroll</span>
          <div className="relative h-10 w-px overflow-hidden">
            <div className="absolute inset-0 bg-muted-foreground/20" />
            <motion.div
              className="absolute left-0 right-0 bg-gradient-to-b from-primary to-transparent"
              style={{ height: "55%" }}
              animate={{ y: ["-100%", "180%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
