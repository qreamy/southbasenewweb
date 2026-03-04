"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CASE_STUDIES } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const AGGREGATE_STATS = [
  { metric: "15+", label: "Client engagements" },
  { metric: "94%", label: "Client retention rate" },
  { metric: "2.4x", label: "Avg. revenue lift" },
  { metric: "<3 weeks", label: "Avg. time to deploy" },
];

export default function WorkPage() {
  return (
    <main className="bg-cream-50">
      {/* ── Page Header ── */}
      <section className="section-padding bg-navy-900 text-cream-50">
        <div className="container-wide text-center">
          <SectionLabel className="text-copper-400">Our Work</SectionLabel>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-6 text-display-lg md:text-display-xl font-serif text-balance"
          >
            Results that speak
            <br className="hidden sm:block" /> for themselves
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-6 max-w-2xl mx-auto text-body-lg text-navy-200 text-pretty"
          >
            Every engagement is measured by outcomes, not activity. Here is a
            look at how we have helped ambitious companies across the Nordics
            build, fix, and scale their sales operations.
          </motion.p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="section-padding">
        <div className="container-wide space-y-28 md:space-y-36">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={study.slug}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center"
              >
                {/* Image */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  className={`relative aspect-[4/3] rounded-4xl overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={`${study.client} case study`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />

                  {/* Industry tag on image */}
                  <span className="absolute top-5 left-5 inline-block bg-cream-50/90 backdrop-blur-sm text-navy-900 text-caption uppercase tracking-widest font-medium px-4 py-2 rounded-full">
                    {study.industry}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span className="text-caption uppercase tracking-widest font-medium text-copper-600">
                    {study.client}
                  </span>

                  <h2 className="mt-3 text-display-sm md:text-display-md font-serif text-navy-900 text-balance">
                    {study.title}
                  </h2>

                  <p className="mt-5 text-body-lg text-charcoal-600 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="mt-8 space-y-5">
                    <div>
                      <h3 className="text-heading-sm font-semibold text-navy-900">
                        The Challenge
                      </h3>
                      <p className="mt-2 text-body-md text-charcoal-500 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-semibold text-navy-900">
                        Our Solution
                      </h3>
                      <p className="mt-2 text-body-md text-charcoal-500 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
                    {study.results.map((result, rIdx) => (
                      <motion.div
                        key={rIdx}
                        variants={fadeInUp}
                        className="text-center sm:text-left"
                      >
                        <span className="block text-display-sm md:text-display-md font-serif font-bold text-copper-600">
                          {result.metric}
                        </span>
                        <span className="mt-1 block text-caption uppercase tracking-wider text-charcoal-400 font-medium">
                          {result.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Aggregate Metrics Banner ── */}
      <section className="bg-navy-900">
        <div className="container-wide py-16 md:py-22">
          <AnimatedSection>
            <p className="text-center text-caption uppercase tracking-widest font-medium text-copper-400 mb-10">
              Our track record at a glance
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {AGGREGATE_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <span className="block text-display-md md:text-display-lg font-serif font-bold text-cream-50">
                  {stat.metric}
                </span>
                <span className="mt-2 block text-body-sm md:text-body-md text-navy-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto"
          >
            <SectionLabel>Get Started</SectionLabel>

            <motion.h2
              variants={fadeInUp}
              className="mt-6 text-display-sm md:text-display-lg font-serif text-navy-900 text-balance"
            >
              Your results could be next
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-body-lg text-charcoal-500 text-pretty"
            >
              Every great sales transformation starts with a conversation. Tell
              us where you are today, and we will show you what is possible.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Start a conversation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore our services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
