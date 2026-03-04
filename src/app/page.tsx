"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInRight,
} from "@/lib/animations";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SERVICES, TESTIMONIALS, COMPANY } from "@/lib/constants";
import { ServiceIcon } from "@/components/ServiceIcon";
import Link from "next/link";
import Image from "next/image";

const METRICS = [
  { value: "47%", label: "Average revenue increase" },
  { value: "120+", label: "Sales professionals deployed" },
  { value: "14", label: "Months avg time to ROI" },
  { value: "93%", label: "Client retention rate" },
];

const TRUST_LOGOS = [
  "NordicTech",
  "SIG",
  "GreenShift",
  "Meridian Group",
  "Apex Digital",
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900 hidden lg:block" />

        <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center py-32 lg:py-0">
          {/* Left content */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-caption uppercase tracking-widest font-medium text-copper-600"
              >
                {COMPANY.legalName} &mdash; Helsingborg, Sweden
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-display-lg md:text-display-xl text-navy-900 text-balance"
              >
                We build sales
                <br />
                <span className="text-gradient">engines</span> that
                <br />
                deliver.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg text-charcoal-600 max-w-md text-pretty"
              >
                Operative sales teams, proven methodology, and interim
                leadership &mdash; deployed into your business so you can focus
                on what you do best.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Button href="/contact" variant="primary" size="lg">
                  Talk to us
                </Button>
                <Button href="/work" variant="outline" size="lg">
                  See our work
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 relative h-[60vh] lg:h-screen"
          >
            <div className="relative w-full h-full lg:absolute lg:inset-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
                alt="Modern office with city views"
                fill
                className="object-cover rounded-3xl lg:rounded-none"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Overlay gradient for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent rounded-3xl lg:rounded-none" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="absolute bottom-8 left-8 lg:bottom-16 lg:left-auto lg:right-16 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-xs"
            >
              <p className="text-display-sm text-navy-900 font-semibold">
                340%
              </p>
              <p className="text-body-sm text-charcoal-500 mt-1">
                Pipeline growth achieved for our latest SaaS client
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-cream-100 py-10 overflow-hidden border-y border-cream-300">
        <div className="container-wide mb-6">
          <p className="text-caption uppercase tracking-widest text-charcoal-400 text-center">
            Trusted by ambitious companies across the Nordics
          </p>
        </div>

        {/* Animated infinite scroll */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS].map(
              (name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 px-10 md:px-14"
                >
                  <span className="text-heading-md md:text-heading-lg font-semibold text-charcoal-300 whitespace-nowrap select-none tracking-tight">
                    {name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}</style>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Section intro - offset left */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
              <SectionLabel>What we do</SectionLabel>
              <AnimatedSection>
                <h2 className="text-display-md lg:text-display-lg text-navy-900 mt-4 mb-6 text-balance">
                  Four ways we drive your growth
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-body-lg text-charcoal-600 text-pretty">
                  Whether you need boots on the ground or a strategic overhaul,
                  we have the expertise and people to make it happen.
                </p>
              </AnimatedSection>
            </div>

            {/* Asymmetric card grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.slug}
                  variants={fadeInUp}
                  className={`group relative bg-white rounded-2xl p-7 md:p-8 border border-cream-200 hover:border-copper-200 transition-all duration-500 ease-out-expo hover:shadow-lg ${
                    index === 0 ? "md:translate-y-0" : ""
                  } ${index === 1 ? "md:translate-y-8" : ""} ${
                    index === 2 ? "md:-translate-y-4" : ""
                  } ${index === 3 ? "md:translate-y-4" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center mb-5 group-hover:bg-copper-500 group-hover:text-white transition-all duration-500">
                    <ServiceIcon icon={service.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="text-heading-sm font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-body-sm text-charcoal-500 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-body-sm font-medium text-copper-600 hover:text-copper-700 transition-colors group/link"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS / METRICS ─── */}
      <section className="bg-navy-900 section-padding relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-copper-400 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <motion.span
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block text-caption uppercase tracking-widest font-medium text-copper-400"
              >
                Proven results
              </motion.span>
              <AnimatedSection>
                <h2 className="text-display-md lg:text-display-lg text-cream-50 mt-4 text-balance">
                  Numbers that speak
                  <br className="hidden md:block" /> for themselves
                </h2>
              </AnimatedSection>
            </div>

            <AnimatedSection variants={slideInRight}>
              <p className="text-body-lg text-navy-300 max-w-md text-pretty">
                We are measured by one thing: the commercial impact we deliver
                for our clients. Here is what the data shows.
              </p>
            </AnimatedSection>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-800/50 rounded-2xl overflow-hidden"
          >
            {METRICS.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="bg-navy-900 p-8 md:p-10 lg:p-12 text-center group hover:bg-navy-800/80 transition-colors duration-500"
              >
                <span className="block text-display-md md:text-display-lg text-copper-400 font-semibold group-hover:text-copper-300 transition-colors duration-500">
                  {metric.value}
                </span>
                <span className="block text-body-sm text-navy-300 mt-3 group-hover:text-navy-200 transition-colors duration-500">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide">
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel>Client voices</SectionLabel>
            <AnimatedSection>
              <h2 className="text-display-md lg:text-display-lg text-navy-900 mt-4 text-balance">
                What our clients say
              </h2>
            </AnimatedSection>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-8 md:p-9 border border-cream-200 ${
                  index === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                {/* Quotation mark */}
                <svg
                  className="w-10 h-10 text-copper-200 mb-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <blockquote className="font-serif text-body-lg text-navy-900 leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-navy-900">
                      {testimonial.author}
                    </p>
                    <p className="text-body-sm text-charcoal-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section-padding bg-cream-50 relative overflow-hidden">
        {/* Large decorative text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold text-cream-200/50 leading-none">
            S
          </span>
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-display-md md:text-display-lg lg:text-display-xl text-navy-900 mb-6 text-balance">
                Ready to grow?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-body-lg text-charcoal-600 mb-10 max-w-lg mx-auto text-pretty">
                Every engagement starts with a conversation. Tell us where you
                are, where you want to be &mdash; and we will show you how to
                get there.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Start a conversation
                </Button>
                <span className="text-body-sm text-charcoal-400">
                  or email us at{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-copper-600 hover:text-copper-700 underline underline-offset-4 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
