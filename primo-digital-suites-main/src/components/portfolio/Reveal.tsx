import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.88, ease },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "p" | "li";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function TiltCard({
  children,
  className,
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: x * intensity, y: y * -intensity, active: true });
  };

  const onLeave = () => setTilt({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: "900px", height: "100%" }}
    >
      <motion.div
        animate={{
          rotateY: tilt.x,
          rotateX: tilt.y,
          translateY: tilt.active ? -6 : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        style={{ transformStyle: "preserve-3d", height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,5.5vw,5rem)] font-semibold tracking-[-0.026em] leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-[1.75]">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
