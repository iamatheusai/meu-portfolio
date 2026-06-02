import { Reveal, SectionHeader } from "./Reveal";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import dental from "@/assets/project-dental.jpg";
import law from "@/assets/project-law.jpg";
import gym from "@/assets/project-gym.jpg";
import solar from "@/assets/project-solar.jpg";
import consulting from "@/assets/project-consulting.jpg";

const projects = [
  {
    img: dental, title: "Clínica Odontológica Premium", category: "Saúde · Landing Page", year: "2026",
    desc: "Landing page focada em captação de pacientes particulares. Hero split com copywriting orientado à dor e solução, depoimentos verificados e agendamento direto via WhatsApp.",
  },
  {
    img: law, title: "Escritório de Advocacia", category: "Jurídico · Site Institucional", year: "2026",
    desc: "Site institucional em dark mode com posicionamento de alta autoridade. Tipografia de impacto, seções de especialidades e formulário de consulta inicial integrado.",
  },
  {
    img: gym, title: "Academia de Alto Padrão", category: "Fitness · Landing Page", year: "2025",
    desc: "Landing page com estética cinematográfica para academia premium. Conversão centrada em planos, aulas experimentais e storytelling visual dos resultados dos alunos.",
  },
  {
    img: solar, title: "Empresa de Energia Solar", category: "Energia · Site Completo", year: "2025",
    desc: "Site completo com simulador de economia solar, cálculo de retorno de investimento e fluxo de captação de leads qualificados para o time comercial.",
  },
  {
    img: consulting, title: "Consultoria Empresarial", category: "B2B · Site Institucional", year: "2025",
    desc: "Site institucional B2B focado em autoridade e geração de reuniões. Arquitetura construída em torno de cases de resultado e conversão para diagnóstico gratuito.",
  },
];

function DeviceFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-card/80 border-b border-white/5 rounded-t-2xl">
        <span className="size-2.5 rounded-full bg-red-400/60" />
        <span className="size-2.5 rounded-full bg-yellow-400/60" />
        <span className="size-2.5 rounded-full bg-green-400/60" />
        <div className="flex-1 ml-3 h-5 rounded-md bg-background/60 max-w-xs" />
      </div>
      <div className="overflow-hidden rounded-b-2xl">
        <img src={src} alt={alt} className="w-full aspect-[16/10] object-cover" loading="lazy" width={1280} height={800} />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="glow-orb size-[600px] right-[-200px] top-[20%] bg-primary/25 animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Portfólio"
          title={
            <>
              Projetos com <span className="text-gradient-primary">alma e estratégia</span>.
            </>
          }
          description="Uma seleção de experiências digitais construídas para gerar autoridade e resultado."
        />

        <div className="mt-20 space-y-32">
          {projects.map((p, i) => (
            <div key={p.title} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="lg:col-span-7">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative glass-strong rounded-2xl shadow-premium overflow-hidden">
                    <DeviceFrame src={p.img} alt={p.title} />
                  </div>
                </motion.div>
              </Reveal>

              <Reveal delay={0.15} className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-muted-foreground">
                  <span>{p.year}</span>
                  <span className="h-px w-8 bg-white/20" />
                  <span>{p.category}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <a href="#contato" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Projeto similar?
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
