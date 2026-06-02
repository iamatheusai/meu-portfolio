import { Reveal, SectionHeader } from "./Reveal";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendimento profundo do seu negócio, público e objetivos de conversão." },
  { n: "02", title: "Estratégia", desc: "Arquitetura de informação e copy estruturados para guiar à ação desejada." },
  { n: "03", title: "Design", desc: "Identidade visual premium construída com foco em autoridade e clareza." },
  { n: "04", title: "Desenvolvimento", desc: "Código limpo, performance máxima e responsividade impecável." },
  { n: "05", title: "Lançamento", desc: "Go-live monitorado, otimização contínua e suporte estratégico." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-32 overflow-hidden">
      <div className="glow-orb size-[400px] left-[20%] top-[40%] bg-accent/20 animate-glow-pulse" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Processo"
          title={
            <>
              Metodologia <span className="text-gradient-primary">precisa e transparente</span>
            </>
          }
          description="Cada projeto segue um processo refinado que entrega previsibilidade e excelência."
        />

        <div className="mt-20 relative">
          <div className="absolute left-0 top-12 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative flex items-center justify-center size-24 mx-auto lg:mx-0 rounded-full glass-strong shadow-glow">
                    <span className="font-display text-2xl text-gradient-primary">{s.n}</span>
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-glow-pulse" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium text-center lg:text-left">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-center lg:text-left">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
