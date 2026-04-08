"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { fadeUp, stagger, lineFade } from "@/lib/motion";

/* ─── Carousel Data ─── */

const carouselRow1 = [
  "Project A",
  "Portrait",
  "Temecula",
  "Studio",
  "Design",
  "Code",
  "Sunset",
];
const carouselRow2 = [
  "Workspace",
  "Camera",
  "Detail",
  "Skyline",
  "Creative",
  "Build",
  "Mood",
];
const carouselRow3 = [
  "Inspiration",
  "Process",
  "Coffee",
  "Typography",
  "Motion",
  "Light",
  "Texture",
];

/* ─── Carousel Row Component ─── */

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: string[];
  direction: "left" | "right";
  speed: string;
}) {
  const animationClass =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 ${animationClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="shrink-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center"
          >
            <span className="font-mono text-[9px] text-[#bbb] uppercase tracking-[0.15em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setFormState(res.ok ? "sent" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main id="main-content">

      {/* ─── Hero ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center"
      >
        <Container>
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >
              <div className="overflow-hidden">
                <motion.h1
                  custom={0}
                  variants={lineFade}
                  className="font-sans font-bold tracking-[-0.06em] leading-[0.85] text-[clamp(3.5rem,11vw,9rem)] uppercase"
                >
                  Rodolfo
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  custom={1}
                  variants={lineFade}
                  className="font-sans font-bold tracking-[-0.06em] leading-[0.85] text-[clamp(3.5rem,11vw,9rem)] uppercase"
                >
                  Ortega.
                </motion.h1>
              </div>

              <motion.p
                custom={2}
                variants={lineFade}
                className="mt-8 md:mt-10 font-serif italic text-[clamp(1.1rem,2.5vw,1.6rem)] text-[#999] tracking-normal leading-relaxed"
              >
                Builder, Designer, Creator.
              </motion.p>

              <motion.p
                custom={3}
                variants={lineFade}
                className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#888] max-w-md"
              >
                Creative director & developer — Temecula, CA
              </motion.p>

              <motion.div custom={4} variants={lineFade} className="mt-10">
                <Link
                  href="/work"
                  className="inline-block font-mono text-[12px] uppercase tracking-[0.15em] border border-white/30 hover:border-white px-8 py-4 text-white/70 hover:text-white transition-all duration-300"
                >
                  View Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-6 md:left-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            aria-hidden="true"
            className="w-px h-12 bg-[#888] origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* ─── Video Trailer ─── */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="relative w-full aspect-[9/16] md:aspect-video max-w-4xl mx-auto bg-[#080808] border border-[#1a1a1a] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 border border-[#333] group-hover:border-white flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <Play
                    aria-hidden="true"
                    className="w-5 h-5 md:w-6 md:h-6 text-[#888] group-hover:text-white transition-colors duration-500 ml-0.5"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888] group-hover:text-white transition-colors duration-500">
                  Showreel — 2026
                </p>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#222] group-hover:border-[#444] transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#222] group-hover:border-[#444] transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#222] group-hover:border-[#444] transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#222] group-hover:border-[#444] transition-colors duration-500" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Studio HQ ─── */}
      <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 bg-[#070707]" />
        <div className="absolute inset-0 bg-black/50" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#888] mb-6"
            >
              Studio Headquarters
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-sans font-bold tracking-[-0.05em] leading-[0.85] text-[clamp(3rem,12vw,10rem)] uppercase"
            >
              Temecula,
            </motion.h2>
            <motion.h2
              variants={fadeUp}
              className="font-sans font-bold tracking-[-0.05em] leading-[0.85] text-[clamp(3rem,12vw,10rem)] uppercase"
            >
              California
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#888]"
            >
              33.4936&deg; N, 117.1484&deg; W
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ═══ WHITE ZONE — About through Footer ═══ */}
      <div className="bg-white text-black">
        {/* ─── About ─── */}
        <section id="about" className="pt-24 pb-24 md:pt-32 md:pb-32">
          <Container>
            <div className="flex flex-col items-center gap-16 md:gap-20">
              {/* Portrait placeholder */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                aria-hidden="true"
                className="w-40 h-40 md:w-52 md:h-52 bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center"
              >
                <span className="font-mono text-[10px] text-[#bbb] uppercase tracking-[0.15em]">
                  Portrait
                </span>
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-sans font-bold tracking-[-0.05em] leading-[0.9] text-[clamp(3rem,10vw,6rem)] uppercase text-center"
              >
                Who I Am
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-xl text-center"
              >
                <motion.p
                  variants={fadeUp}
                  className="font-serif text-[clamp(1.15rem,4vw,1.5rem)] leading-relaxed tracking-tight mb-10"
                >
                  I come from photography, videography, and design — then taught
                  myself to code so I could ship the things I was designing.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="font-serif text-[clamp(1.15rem,4vw,1.5rem)] leading-relaxed tracking-tight"
                >
                  Now I use every tool available, including AI, to build faster
                  and with more intention than a traditional dev shop.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-wrap justify-center gap-3 max-w-lg"
              >
                {[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Firebase",
                  "Stripe",
                  "Photography",
                  "Videography",
                  "Visual Design",
                  "AI-Assisted Building",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] uppercase tracking-[0.05em] border border-[#ddd] text-black px-4 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ─── Photo Carousel ─── */}
        <section className="py-24 md:py-32 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <MarqueeRow items={carouselRow1} direction="right" speed="35s" />
            <MarqueeRow items={carouselRow2} direction="left" speed="40s" />
            <MarqueeRow items={carouselRow3} direction="right" speed="45s" />
          </motion.div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="py-24 md:py-32">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#555]">
                    Contact
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
                {/* Left — CTA */}
                <motion.div variants={fadeUp} className="md:col-span-5">
                  <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                    Let&apos;s build
                    <br />
                    something.
                  </h2>
                  <p className="font-serif text-[15px] text-[#555] leading-relaxed mb-10">
                    Whether it&apos;s a website for your business, a product
                    idea, or a creative project — I&apos;d like to hear about
                    it.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2">
                        Email
                      </p>
                      <a
                        href="mailto:orudy01@gmail.com"
                        className="font-mono text-sm text-black hover:text-[#555] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
                      >
                        orudy01@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2">
                        Response Time
                      </p>
                      <p className="font-mono text-sm text-black">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div variants={fadeUp} className="md:col-span-7">
                  {formState === "sent" ? (
                    <div className="flex flex-col items-start justify-center h-full gap-4">
                      <h3 className="font-sans font-bold text-2xl tracking-tight">
                        Message sent.
                      </h3>
                      <p className="font-serif text-[15px] text-[#555] leading-relaxed">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-4 font-mono text-[12px] uppercase tracking-[0.15em] text-[#666] hover:text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
                      >
                        Send another
                      </button>
                    </div>
                  ) : formState === "error" ? (
                    <div className="flex flex-col items-start justify-center h-full gap-4">
                      <h3 className="font-sans font-bold text-2xl tracking-tight">
                        Something went wrong.
                      </h3>
                      <p className="font-serif text-[15px] text-[#555] leading-relaxed">
                        Please try again or email me directly at orudy01@gmail.com
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-4 font-mono text-[12px] uppercase tracking-[0.15em] text-[#666] hover:text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
                      >
                        Try again
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-black placeholder:text-[#767676] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="business" className="sr-only">
                            Business or Project
                          </label>
                          <input
                            id="business"
                            type="text"
                            placeholder="Business / Project"
                            className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-black placeholder:text-[#767676] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-black placeholder:text-[#767676] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="service" className="sr-only">
                            What do you need?
                          </label>
                          <select
                            id="service"
                            className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-[#555] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300 [&>option]:bg-white"
                          >
                            <option value="">What do you need?</option>
                            <option value="landing">Landing Page</option>
                            <option value="business">Business Site</option>
                            <option value="full">Full Package</option>
                            <option value="product">Product / App</option>
                            <option value="other">Something Else</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="sr-only">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-[#555] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300 [&>option]:bg-white"
                          >
                            <option value="">Timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="2-weeks">Within 2 weeks</option>
                            <option value="month">Within a month</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Project details
                        </label>
                        <textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={4}
                          className="w-full bg-transparent border-b border-[#ddd] pb-3 font-mono text-sm text-black placeholder:text-[#767676] focus:outline-none focus:border-[#333] focus-visible:ring-0 transition-colors duration-300 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={formState === "sending"}
                        className="font-mono text-[12px] uppercase tracking-[0.15em] border border-black px-8 py-4 text-black hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm"
                      >
                        {formState === "sending"
                          ? "Sending..."
                          : "Send Message"}
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </section>

        <Footer variant="light" />
      </div>
      </main>
    </div>
  );
}
