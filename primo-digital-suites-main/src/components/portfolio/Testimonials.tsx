import { Reveal, SectionHeader, TiltCard } from "./Reveal";

const items = [
  {
    quote: "O site superou todas as expectativas. Em duas semanas após o lançamento, dobramos o número de orçamentos recebidos.",
    name: "Dra. Carolina Mendes",
    role: "Clínica Odontológica Premium",
    metric: "+100%",
    metricLabel: "Orçamentos",
  },
  {
    quote: "Profissionalismo absurdo. O resultado final ficou no mesmo nível das maiores referências internacionais que tínhamos como inspiração.",
    name: "Rafael Tavares",
    role: "Escritório de Advocacia Tavares",
    metric: "Top 1%",
    metricLabel: "Design",
  },
  {
    quote: "Mais do que um site, recebemos uma estratégia digital completa. Performance, design e conversão num só pacote.",
    name: "Lucas Oliveira",
    role: "Solar Energy Solutions",
    metric: "100",
    metricLabel: "PageSpeed",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title={
            <>
              O que dizem <span className="text-gradient-primary">os clientes</span>.
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TiltCard intensity={5}>
                <div
                  className="h-full rounded-2xl p-8 relative overflow-hidden flex flex-col"
                  style={{
                    background: "oklch(0.16 0.026 260 / 0.86)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                    boxShadow:
                      "0 0 0 1px oklch(0.72 0.18 245 / 0.05) inset, 0 20px 60px oklch(0 0 0 / 0.40)",
                    backdropFilter: "blur(28px)",
                  }}
                >
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Subtle corner glow */}
                  <div
                    className="absolute -top-12 -left-12 size-24 rounded-full blur-2xl pointer-events-none"
                    style={{ background: "oklch(0.72 0.18 245 / 0.06)" }}
                  />

                  {/* Quote mark */}
                  <div
                    className="mb-6 font-display leading-none select-none"
                    style={{
                      fontSize: 52,
                      lineHeight: 1,
                      background: "linear-gradient(135deg, oklch(0.72 0.18 245), oklch(0.55 0.22 265))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      opacity: 0.35,
                    }}
                  >
                    "
                  </div>

                  <p className="text-foreground/85 leading-[1.75] text-balance flex-1 text-sm md:text-base">{t.quote}</p>

                  <div
                    className="mt-8 pt-6 flex items-end justify-between"
                    style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
                  >
                    <div>
                      <div className="font-display font-semibold text-foreground leading-[1.3] tracking-[-0.01em]">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-[1.5]">{t.role}</div>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <div
                        className="font-display font-bold leading-none"
                        style={{
                          fontSize: 20,
                          background: "linear-gradient(135deg, oklch(0.72 0.18 245), oklch(0.55 0.22 265))",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {t.metric}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1 tracking-wide uppercase">
                        {t.metricLabel}
                      </div>
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
