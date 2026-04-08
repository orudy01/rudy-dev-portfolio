"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { fadeUp, stagger } from "@/lib/motion";

const serviceTiers = [
  {
    name: "Landing Page",
    price: "$500",
    timeline: "3–5 days",
    description:
      "One page that converts. Perfect for launches, side projects, or getting online fast.",
    includes: [
      "Premium template, customized to your brand",
      "Looks perfect on every device",
      "Ready to capture leads on day one",
      "Built to show up on Google",
      "1 round of revisions",
    ],
    bestFor: "Freelancers, side projects, product launches",
    payment: "Full payment upfront",
  },
  {
    name: "Custom Website",
    price: "$1,000",
    timeline: "7–10 days",
    popular: true,
    description:
      "Fully custom design for established businesses. Multiple pages, bigger impact.",
    includes: [
      "Custom design — no templates",
      "Up to 5 pages",
      "Looks perfect on every device",
      "Service & product showcase sections",
      "Testimonials & social proof",
      "Know exactly where your traffic comes from",
      "Built to show up on Google",
      "2 rounds of revisions",
    ],
    bestFor: "Restaurants, salons, local service businesses",
    payment: "50% to start · 50% on launch",
  },
  {
    name: "Full Build",
    price: "$1,200",
    timeline: "10–14 days",
    description:
      "E-commerce, booking systems, or complex functionality. The complete digital presence.",
    includes: [
      "Everything in Custom Website",
      "Up to 8 pages",
      "Accept payments from day one (Stripe)",
      "E-commerce or booking system setup",
      "Automatically follow up with every lead",
      "3 rounds of revisions",
    ],
    bestFor: "E-commerce, booking-based businesses, SaaS",
    payment: "50% to start · 50% on launch",
  },
];

const carePlanFeatures = [
  "Uptime monitoring",
  "Weekly backups",
  "Monthly security scan",
  "Software & dependency updates",
  "Priority support (24–48hr response)",
  "Monthly status report",
];

const faqItems = [
  {
    question: "What do I need to provide to get started?",
    answer:
      "Just your logo, brand colors, and content (text + images). If you don't have content ready, I can help guide you through it. I handle everything else — design, development, and launch.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Every package includes revision rounds so we can refine the design together. I work collaboratively — you'll see progress throughout the build, not just at the end.",
  },
  {
    question: "What happens after my site launches?",
    answer:
      "Every project includes 3 months of the Website Care Plan — uptime monitoring, backups, security scans, and priority support. After 3 months, you can continue month-to-month or cancel anytime.",
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer:
      "Yes. I can set up hosting for you or work with your existing provider. I'll make sure everything is configured properly so your site is fast and secure.",
  },
  {
    question: "Can I update the site myself after launch?",
    answer:
      "Depends on the build. I'll set you up with a system that matches your comfort level — whether that's a simple CMS or a fully managed setup where I handle changes for you.",
  },
  {
    question: "What if I need more pages or features later?",
    answer:
      "Easy. We can scope that as a follow-up project, or handle small changes through your Care Plan. I'm here for the long run, not just the launch.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main id="main-content">

        {/* Header */}
        <section className="pt-32 pb-16 bg-[#050505]">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888]">
                    Services
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="max-w-4xl mb-12 md:mb-16">
                <h1 className="font-sans font-bold tracking-[-0.04em] leading-[0.9] text-[clamp(2.5rem,7vw,5.5rem)] uppercase">
                  Your Website
                  <br />
                  Live In Days
                  <br />
                  <span className="text-[#888]">Not Weeks</span>
                </h1>
                <p className="mt-8 font-serif text-lg md:text-xl text-[#888] max-w-2xl leading-relaxed">
                  Agency quality, freelancer prices. Custom sites for local
                  businesses that actually convert visitors into customers.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888] mb-5">
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
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888] mb-5">
                    The Solution
                  </p>
                  <p className="font-serif text-lg text-white leading-relaxed">
                    I ship sites in as little as{" "}
                    <span className="font-semibold">3 days</span> starting at{" "}
                    <span className="font-semibold">$500</span>. Same quality,
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
              viewport={{ once: true }}
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
                      <span className="font-mono text-[10px] text-[#888] uppercase tracking-[0.2em]">
                        Starting at
                      </span>
                      <p className="font-sans font-bold text-3xl md:text-4xl text-white mt-2 tracking-tight">
                        {tier.price}
                      </p>
                    </div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-tight mb-1">
                      {tier.name}
                    </h3>
                    <p className="font-mono text-[11px] text-[#888] mb-6">
                      {tier.timeline}
                    </p>
                    <p className="font-serif text-[15px] text-[#888] mb-8 flex-1 leading-relaxed">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[12px] text-[#888] flex items-start gap-2.5"
                        >
                          <span className="text-white mt-0.5" aria-hidden="true">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-mono text-[10px] text-[#888] uppercase tracking-widest mb-8">
                      Best for: {tier.bestFor}
                    </p>

                    <Link
                      href="/#contact"
                      className={`mt-auto block text-center font-mono text-[12px] uppercase tracking-[0.15em] px-6 py-3.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm ${
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

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
              >
                <p className="font-mono text-[11px] text-[#888] tracking-widest">
                  Landing Page: Full payment upfront
                </p>
                <p className="font-mono text-[11px] text-[#888] tracking-widest">
                  Custom &amp; Full Build: 50% to start · 50% on launch
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Website Care Plan */}
        <section className="py-24 md:py-32 border-t border-[#1a1a1a] bg-[#050505]">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeUp} className="mb-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888] mb-5">
                  After Launch
                </p>
                <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-4">
                  Website Care Plan
                </h2>
                <p className="font-serif text-lg text-[#888] leading-relaxed max-w-2xl">
                  Every project includes 3 months of ongoing support. Your site stays
                  secure, backed up, and monitored — so you can focus on running your
                  business.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="border border-[#1a1a1a] p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#888] uppercase tracking-[0.2em]">
                      Monthly
                    </span>
                    <p className="font-sans font-bold text-3xl md:text-4xl text-white mt-2 tracking-tight">
                      $50<span className="text-[#888] text-lg font-normal">/mo</span>
                    </p>
                  </div>
                  <p className="font-mono text-[11px] text-[#888]">
                    3 months included with every project · then month-to-month
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {carePlanFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="font-mono text-[12px] text-[#888] flex items-start gap-2.5"
                    >
                      <span className="text-white mt-0.5" aria-hidden="true">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 border-t border-[#1a1a1a] bg-[#050505]">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp} className="mb-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888] mb-5">
                  Common Questions
                </p>
                <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight">
                  FAQ
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-[#1a1a1a] last:border-b"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-serif text-[15px] md:text-base text-white pr-8 leading-relaxed">
                        {item.question}
                      </span>
                      <span
                        className={`font-mono text-[#888] text-lg flex-shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index
                          ? "max-h-96 opacity-100 pb-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-serif text-[14px] text-[#888] leading-relaxed pr-12">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
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
                  className="inline-block font-mono text-[12px] uppercase tracking-[0.15em] border border-white px-8 py-4 text-white hover:bg-white hover:text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <Footer />
      </main>
    </div>
  );
}
