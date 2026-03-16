"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { fadeUp, stagger } from "@/lib/motion";

const serviceTiers = [
  {
    name: "Landing Page",
    price: "$1,200",
    timeline: "7 days",
    description:
      "One page that converts. Perfect for single services, launches, or lead generation.",
    includes: [
      "Custom design — no templates",
      "Mobile responsive",
      "Contact form setup",
      "Basic SEO",
      "2 rounds of revisions",
    ],
    bestFor: "Single service businesses, product launches",
  },
  {
    name: "Business Site",
    price: "$2,200",
    timeline: "10 days",
    popular: true,
    description:
      "Full website presence for established businesses. Multiple pages, bigger impact.",
    includes: [
      "Everything in Landing Page",
      "Up to 5 pages",
      "Service & product sections",
      "Testimonials & social proof",
      "Google Analytics setup",
      "3 rounds of revisions",
    ],
    bestFor: "Restaurants, salons, service businesses",
  },
  {
    name: "Full Package",
    price: "$3,500",
    timeline: "14 days",
    description:
      "E-commerce, booking systems, or complex functionality. The complete digital presence.",
    includes: [
      "Everything in Business Site",
      "Up to 8 pages",
      "E-commerce or booking setup",
      "Payment integration (Stripe)",
      "CRM & email integration",
      "4 rounds of revisions",
    ],
    bestFor: "E-commerce, booking-based businesses",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav active="Services" />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#050505]">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs text-[#666]">02</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888]">
                  Services
                </span>
              </div>
            </motion.div>

            {/* Services hero */}
            <motion.div
              variants={fadeUp}
              className="max-w-4xl mb-12 md:mb-16"
            >
              <h1 className="font-sans font-bold tracking-[-0.04em] leading-[0.9] text-[clamp(2.5rem,7vw,5.5rem)] uppercase">
                Your Website
                <br />
                Live In 7 Days
                <br />
                <span className="text-[#555]">Not 4 Weeks</span>
              </h1>
              <p className="mt-8 font-serif text-lg md:text-xl text-[#888] max-w-2xl leading-relaxed">
                Agency quality, freelancer prices. Custom sites for local
                businesses that actually convert visitors into customers.
              </p>
            </motion.div>

            {/* Problem / Solution */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#666] mb-5">
                  The Problem
                </p>
                <p className="font-serif text-lg text-[#888] leading-relaxed">
                  Most agencies take{" "}
                  <span className="text-white">4–6 weeks</span> and charge{" "}
                  <span className="text-white">$3,500+</span>. You need leads
                  now, not next quarter.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#666] mb-5">
                  The Solution
                </p>
                <p className="font-serif text-lg text-white leading-relaxed">
                  I ship custom sites in{" "}
                  <span className="font-semibold">7 days</span> starting at{" "}
                  <span className="font-semibold">$1,200</span>. Same quality,
                  less waiting, less budget.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Pricing tiers */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {serviceTiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  className={`border p-8 md:p-10 flex flex-col relative ${
                    tier.popular
                      ? "border-white"
                      : "border-[#1a1a1a] hover:border-[#333] transition-colors duration-500"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-8 bg-white text-black font-mono text-[10px] px-3 py-1 uppercase tracking-[0.15em]">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-8">
                    <span className="font-mono text-[10px] text-[#777] uppercase tracking-[0.2em]">
                      Starting at
                    </span>
                    <p className="font-sans font-bold text-3xl md:text-4xl text-white mt-2 tracking-tight">
                      {tier.price}
                    </p>
                  </div>
                  <h3 className="font-sans font-bold text-lg uppercase tracking-tight mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#777] mb-6">
                    {tier.timeline}
                  </p>
                  <p className="font-serif text-[15px] text-[#888] mb-8 flex-1 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[12px] text-[#999] flex items-start gap-2.5"
                      >
                        <span className="text-white mt-0.5">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[10px] text-[#666] uppercase tracking-[0.1em] mb-8">
                    Best for: {tier.bestFor}
                  </p>

                  <Link
                    href="/#contact"
                    className={`mt-auto block text-center font-mono text-[12px] uppercase tracking-[0.15em] px-6 py-3.5 transition-colors duration-200 ${
                      tier.popular
                        ? "bg-white text-black hover:bg-[#e0e0e0]"
                        : "border border-[#333] text-[#888] hover:border-white hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-12 font-mono text-[11px] text-[#666] text-center tracking-[0.1em]"
            >
              50% to start · 50% on launch
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-[#1a1a1a]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-6"
            >
              Ready to start?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-serif text-lg text-[#888] mb-10 leading-relaxed"
            >
              Tell me about your project and I&apos;ll get back to you within 24
              hours with a plan.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/#contact"
                className="inline-block font-mono text-[12px] uppercase tracking-[0.15em] border border-white px-8 py-4 text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
