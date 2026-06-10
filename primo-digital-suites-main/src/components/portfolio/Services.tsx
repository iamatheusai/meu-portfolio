import { Reveal, SectionHeader, TiltCard } from "./Reveal";
import {
  Rocket, Building2, TrendingUp, Gauge, Smartphone, ArrowUpRight, Bot,
} from "lucide-react";

const services = [
  { icon: Rocket, title: "Landing Pages", desc: "Páginas de alta conversão estruturadas para transformar tráfego em leads qualificados." },
  { icon: Building2, title: "Sites Institucionais", desc: "Presença digital que comunica autoridade e gera confiança desde o primeiro segundo." },
  { icon: Bot, title: "Automações com IA", desc: "Chatbots de atendimento, qualificação de leads e integrações que automatizam tarefas repetitivas." },
  { icon: TrendingUp, title: "Otimização de Conversão", desc: "Estrutura estratégica e copywriting orientado a venda para maximizar resultados." },
  { icon: Gauge, title: "Performance & Velocidade", desc: "Sites otimizados com pontuação 100/100 no Google PageSpeed Insights." },
  { icon: Smartphone, title: "Design Responsivo", desc: "Experiência impecável em qualquer dispositivo, do desktop ao smartphone." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="glow-orb size-[400px] left-[-150px] top-[30%] bg-accent/20 animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Serviços"
          title={
            <>
              Soluções digitais <span className="text-gradient-primary">de alto padrão</span>
            </>
          }
          description="Cada serviço é entregue com a mesma obsessão por qualidade — do briefing inicial ao lançamento."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <TiltCard>
                <div
                  className="group relative h-full rounded-2xl p-8 overflow-hidden"
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

                  {/* Hover accent gradient */}
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.72 0.18 245 / 0.08) 0%, transparent 50%, oklch(0.55 0.22 265 / 0.06) 100%)",
                    }}
                  />

                  {/* Hover glow top-right */}
                  <div className="absolute -top-16 -right-16 size-36 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-3xl pointer-events-none"
                    style={{ background: "oklch(0.72 0.18 245 / 0.18)" }}
                  />

                  {/* Icon */}
                  <div
                    className="inline-flex size-11 items-center justify-center rounded-xl mb-6"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.72 0.18 245 / 0.16), oklch(0.55 0.22 265 / 0.10))",
                      border: "1px solid oklch(0.72 0.18 245 / 0.18)",
                    }}
                  >
                    <s.icon className="size-5 text-primary" />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-[1.25] tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-[1.7]">{s.desc}</p>

                  <ArrowUpRight
                    className="absolute top-6 right-6 size-4 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "oklch(0.72 0.18 245 / 0.35)" }}
                  />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
