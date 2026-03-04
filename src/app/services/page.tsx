"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES, COMPANY } from "@/lib/constants";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, market, and growth objectives. Through deep-dive workshops and data analysis, we uncover the real blockers holding your sales back.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we design a tailored engagement plan. This includes clear KPIs, timelines, and the specific resources needed to move the needle.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We deploy our people and processes into your organization. Whether it is an embedded sales team, training program, or interim leader, we get to work immediately.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Through continuous measurement and iteration, we refine what works and fix what does not. You get weekly reports and full transparency on progress.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-copper-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-cream-50">
      {/* ───────────────────── Page Header ───────────────────── */}
      <section className="section-padding bg-navy-900 text-cream-50">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel className="!text-copper-400">
                Services
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-display-lg md:text-display-xl font-semibold text-balance"
            >
              Everything your sales organization needs
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-body-lg text-navy-200 max-w-2xl text-pretty"
            >
              From hands-on selling to strategic advisory, we provide the full
              spectrum of sales expertise. Pick one service or combine them — we
              tailor every engagement to your growth stage and goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── Service Blocks ───────────────────── */}
      {SERVICES.map((service, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className="section-padding border-b border-charcoal-100 last:border-b-0"
          >
            <div className="container-wide">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text Content */}
                <AnimatedSection
                  variants={isReversed ? slideInRight : slideInLeft}
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-copper-50 flex items-center justify-center text-copper-600">
                      <ServiceIcon icon={service.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-caption uppercase tracking-widest font-medium text-copper-600">
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900 text-balance">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-body-lg text-charcoal-600 text-pretty leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-start gap-3 text-body-md text-charcoal-700"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Button href="/contact" variant="primary" size="md">
                      Get started
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Button>
                  </div>
                </AnimatedSection>

                {/* Image */}
                <AnimatedSection
                  variants={isReversed ? slideInLeft : slideInRight}
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-navy-100">
                    <Image
                      src={SERVICE_IMAGES[index]}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy-900/10" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* ───────────────────── Process Section ───────────────────── */}
      <section className="section-padding bg-navy-900 text-cream-50">
        <div className="container-wide">
          {/* Section Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel className="!text-copper-400">
                Our Process
              </SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mt-6 text-display-sm md:text-display-md font-semibold text-balance"
            >
              How we work
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-body-lg text-navy-300 text-pretty"
            >
              Every engagement follows a proven framework that ensures we
              deliver measurable impact from the very first week.
            </motion.p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Horizontal connector line - desktop only */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-navy-700" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            >
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="relative text-center lg:text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full bg-copper-500 text-white font-semibold text-heading-sm mb-6 mx-auto">
                    {step.number}
                  </div>

                  <h3 className="text-heading-md font-semibold text-cream-50 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-body-md text-navy-300 text-pretty leading-relaxed">
                    {step.description}
                  </p>

                  {/* Vertical connector for mobile */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-px h-8 bg-navy-700" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────── CTA Section ───────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-display-sm md:text-display-md font-semibold text-navy-900 text-balance"
            >
              Let&apos;s talk about your sales challenges
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-body-lg text-charcoal-600 max-w-2xl mx-auto text-pretty"
            >
              Whether you need a full sales team, strategic guidance, or anything
              in between — a conversation is the best place to start. No pitch
              decks, just honest advice.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book a conversation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
              <Button
                href={`mailto:${COMPANY.email}`}
                variant="outline"
                size="lg"
              >
                {COMPANY.email}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
