import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Differentials } from "@/components/portfolio/Differentials";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CTA, Footer } from "@/components/portfolio/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matheus — Desenvolvedor Web Premium | Sites e Landing Pages" },
      { name: "description", content: "Desenvolvedor web especializado em sites e landing pages premium para negócios locais, autônomos e prestadores de serviços. Design sofisticado, alta performance e foco em conversão." },
      { property: "og:title", content: "Matheus — Desenvolvedor Web Premium" },
      { property: "og:description", content: "Sites e Landing Pages que transformam autoridade em resultados." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
