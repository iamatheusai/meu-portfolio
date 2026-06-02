import { Reveal, SectionHeader, TiltCard } from "./Reveal";
import { Diamond, Target, Smartphone, Zap, Award, TrendingUp } from "lucide-react";

const items = [
  { icon: Diamond, title: "Design Premium", desc: "Estética cinematográfica que comunica autoridade." },
  { icon: Target, title: "Estrutura Estratégica", desc: "Cada seção construída para conduzir à conversão." },
  { icon: Smartphone, title: "Experiência Responsiva", desc: "Perfeito em qualquer tela, em qualquer lugar." },
  { icon: Zap, title: "Carregamento Rápido", desc: "Sites que abrem antes do usuário pensar." },
  { icon: Award, title: "Posicionamento Profissional", desc: "Sua marca no nível das maiores do mercado." },
  { icon: TrendingUp, title: "Foco em Conversão", desc: "Métricas reais. Resultados mensuráveis." },
];

export function Differentials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Diferenciais"
          title={
            <>
              Por que clientes escolhem{" "}
              <span className="text-gradient-primary">trabalhar comigo</span>
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <TiltCard>
                <div
                  className="group relative h-full rounded-2xl p-8 overflow-hidden min-h-[180px]"
                  style={{
                    background: "oklch(0.16 0.026 260 / 0.86)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                    boxShadow:
                      "0 0 0 1px oklch(0.72 0.18 245 / 0.05) inset, 0 16px 48px oklch(0 0 0 / 0.38)",
                    backdropFilter: "blur(28px)",
                  }}
                >
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Bottom accent line — reveals on hover */}
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-primary to-accent" />

                  {/* Icon + text */}
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 inline-flex size-10 items-center justify-center rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.72 0.18 245 / 0.16), oklch(0.55 0.22 265 / 0.10))",
                        border: "1px solid oklch(0.72 0.18 245 / 0.16)",
                      }}
                    >
                      <it.icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground leading-[1.25] tracking-[-0.018em]">{it.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">{it.desc}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
