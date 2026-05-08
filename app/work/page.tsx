"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { fadeUp, stagger } from "@/lib/motion";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  image?: {
    src: string;
    alt: string;
  };
};

const projects = [
  {
    number: "01",
    title: "Gym Logger",
    category: "Web App — Personal + SaaS",
    year: "2025",
    description:
      "Built from scratch because every workout tracker I tried locked features behind a paywall. Tracks my sessions over time, generates AI-powered workout plans based on your goals, equipment, and schedule (Groq / Llama 3.3), and lets others browse my workouts, view my supplement stack, or book a personal training session. A personal tool that doubles as a tool for others to use.",
    tags: ["React", "Node.js", "Stripe", "Resend", "Groq"],
    url: "https://gymrudy.com",
    image: {
      src: "/work/gym-log.jpg",
      alt: "Gym Logger website preview",
    },
  },
  {
    number: "02",
    title: "B&B Auto Detailing",
    category: "Web — Local Business",
    year: "2025",
    description:
      "Landing page for a veteran-owned detailing business. Contact form, service packages, and lead generation. 12 qualified leads in the first month.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://www.bandbautodetailing.com",
    image: {
      src: "/work/b-and-b-auto-detailing.jpg",
      alt: "B&B Auto Detailing website preview",
    },
  },
  {
    number: "03",
    title: "Sandra's Mini Pancakes",
    category: "Web — Catering",
    year: "2025",
    description:
      "Catering website with 3 service tiers and a booking inquiry system. Warm gold palette designed to match the brand's personality.",
    tags: ["React", "Vite", "Framer Motion"],
    url: "#",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0, transparent 6px, #111 6px, #111 7px)",
      }}
    >
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#222] group-hover:border-[#444] transition-colors duration-500" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#222] group-hover:border-[#444] transition-colors duration-500" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#222] group-hover:border-[#444] transition-colors duration-500" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#222] group-hover:border-[#444] transition-colors duration-500" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
        </span>

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888]">
          Status — In Progress
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#555]">
          {project.title}
        </p>

        <span aria-hidden="true" className="block w-6 h-px bg-[#333]" />

        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-white">
          Coming Soon
        </p>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main id="main-content">

        {/* Header */}
        <section className="pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888]">
                    Selected Work
                  </span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-sans font-bold tracking-[-0.04em] leading-[0.9] text-[clamp(2.5rem,8vw,6rem)] uppercase max-w-4xl mb-8"
              >
                Projects &amp;<br />
                Case Studies
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-serif text-lg md:text-xl text-[#888] max-w-2xl leading-relaxed"
              >
                A selection of client work, products, and experiments — each one
                shipped end-to-end.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Projects */}
        <section className="pb-24 md:pb-32">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="space-y-0">
                {projects.map((project) => (
                  <motion.div
                    key={project.number}
                    variants={fadeUp}
                    className="group border-t border-[#1a1a1a] py-8 md:py-16 last:border-b last:border-[#1a1a1a]"
                  >
                    {/* Mobile layout */}
                    <div className="flex flex-col gap-4 md:hidden">
                      <div
                        className="w-full aspect-video bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center overflow-hidden"
                      >
                        <ProjectPreview project={project} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-2">
                          {project.category} · {project.year}
                        </span>
                        <h2 className="font-sans font-bold text-xl tracking-tight leading-tight mb-3">
                          {project.title}
                        </h2>
                        <p className="font-serif text-[14px] text-[#888] leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-widest text-[#888] border border-[#333] px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.url !== "#" ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-[0.15em] text-white ml-auto hover:text-[#888] transition-colors duration-200"
                          >
                            View →
                          </a>
                        ) : (
                          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#555] ml-auto">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-12">
                      <div className="col-span-7">
                        <div
                          className="w-full aspect-16/10 bg-[#0a0a0a] border border-[#1a1a1a] group-hover:border-[#444] transition-colors duration-500 flex items-center justify-center overflow-hidden"
                        >
                          <ProjectPreview project={project} />
                        </div>
                      </div>
                      <div className="col-span-5 flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[11px] text-[#888] uppercase tracking-[0.15em] block mb-4">
                            {project.category}
                          </span>
                          <h2 className="font-sans font-bold text-3xl tracking-tight leading-tight mb-4 group-hover:text-white transition-colors duration-300">
                            {project.title}
                          </h2>
                          <p className="font-serif text-[15px] text-[#888] leading-relaxed mb-6">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] uppercase tracking-widest text-[#888] border border-[#333] px-2.5 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="font-mono text-[10px] text-[#888] ml-auto">
                            {project.year}
                          </span>
                        </div>
                        {project.url !== "#" ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-white border-b border-[#333] pb-0.5 hover:border-white transition-colors duration-200 w-fit"
                          >
                            View Project →
                          </a>
                        ) : (
                          <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-[#555] w-fit">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        <Footer />
      </main>
    </div>
  );
}
