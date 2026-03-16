"use client";

import { motion } from "framer-motion";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { fadeUp, stagger } from "@/lib/motion";

const projects = [
  {
    number: "01",
    title: "B&B Auto Detailing",
    category: "Web — Local Business",
    year: "2025",
    description:
      "Landing page for a veteran-owned detailing business. Contact form, service packages, and lead generation. 12 qualified leads in the first month.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    number: "02",
    title: "Sandra's Mini Pancakes",
    category: "Web — Catering",
    year: "2025",
    description:
      "Catering website with 3 service tiers and a booking inquiry system. Warm gold palette designed to match the brand's personality.",
    tags: ["React", "Vite", "Framer Motion"],
  },
  {
    number: "03",
    title: "Gym Logger",
    category: "Web App — SaaS",
    year: "2025",
    description:
      "Full-stack workout tracker with Stripe subscription billing, Firebase backend, and session logging. Built end-to-end from concept to deploy.",
    tags: ["React", "Firebase", "Stripe", "Zustand"],
  },
  {
    number: "04",
    title: "AI Micro-Agency",
    category: "Product — In Progress",
    year: "2026",
    description:
      "Building an AI-assisted micro-agency as both a portfolio piece and income channel. End-to-end product development using modern AI tooling.",
    tags: ["Next.js", "AI", "Stripe", "Firebase"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav active="Work" />
      <main id="main-content">

        {/* Header */}
        <section className="pt-32 pb-16">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs text-[#888]" aria-hidden="true">01</span>
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
                    className="group border-t border-[#1a1a1a] py-12 md:py-16 last:border-b last:border-[#1a1a1a]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                      {/* Project image placeholder */}
                      <div className="md:col-span-7 order-2 md:order-1">
                        <div
                          aria-hidden="true"
                          className="w-full aspect-[16/10] bg-[#0a0a0a] border border-[#1a1a1a] group-hover:border-[#333] transition-colors duration-500 flex items-center justify-center overflow-hidden"
                        >
                          <span className="font-mono text-[11px] text-[#888] uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                            {project.title}
                          </span>
                        </div>
                      </div>

                      {/* Project info */}
                      <div className="md:col-span-5 order-1 md:order-2 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="font-mono text-[11px] text-[#888]" aria-hidden="true">
                              {project.number}
                            </span>
                            <span className="font-mono text-[11px] text-[#888] uppercase tracking-[0.15em]">
                              {project.category}
                            </span>
                          </div>
                          <h2 className="font-sans font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-4 group-hover:text-white transition-colors duration-300">
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
                              className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#888] border border-[#333] px-2.5 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="font-mono text-[10px] text-[#888] ml-auto">
                            {project.year}
                          </span>
                        </div>
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
