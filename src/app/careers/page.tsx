"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { OPEN_POSITIONS, COMPANY } from "@/lib/constants";

const CULTURE_HIGHLIGHTS = [
  {
    title: "Nordic work culture",
    description:
      "Flat hierarchies, open dialogue, and mutual respect. We believe the best ideas come from every level of the organization.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    title: "Results over hours",
    description:
      "We measure impact, not time at a desk. Deliver great work for our clients and own how you get there.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    title: "Real client impact",
    description:
      "Every project is hands-on. You'll see the direct results of your work in growing client revenue and building sales teams that last.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    title: "Professional growth",
    description:
      "Work alongside experienced sales leaders. Learn through live deals, not textbooks. Your development is our priority.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  },
];

const BENEFITS = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    title: "Competitive compensation",
    description:
      "Attractive base salary with performance-based bonuses tied to client success.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Flexible work arrangements",
    description:
      "Hybrid setup with the freedom to work from home, the office, or wherever you're most productive.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Professional development budget",
    description:
      "Annual budget for courses, certifications, conferences, and books to sharpen your skills.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    title: "Health & wellness allowance",
    description:
      "Friskvardsbidrag for gym, sports, and wellness activities to keep you at your best.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    title: "Team retreats & events",
    description:
      "Regular team offsites, after-works, and celebrations. We work hard and enjoy the journey together.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>
    ),
    title: "30 days vacation",
    description:
      "Generous time off because rest fuels performance. Recharge fully and come back sharper.",
  },
];

export default function CareersPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const togglePosition = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="bg-cream-50">
      {/* ─── Page Header ─── */}
      <section className="section-padding bg-navy-900 text-cream-50">
        <div className="container-wide">
          <div className="max-w-4xl">
            <SectionLabel className="!text-copper-400">Careers</SectionLabel>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-display-lg md:text-display-xl font-semibold text-cream-50 mt-6 text-balance"
            >
              Build your career in sales consulting
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="text-body-lg text-navy-200 mt-6 max-w-2xl text-pretty"
            >
              At {COMPANY.name}, you won&apos;t sit on the sidelines. You&apos;ll
              work directly with ambitious companies, solve real commercial
              challenges, and grow alongside a team that values results,
              collaboration, and continuous improvement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Culture Section ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <SectionLabel>Why Southbase</SectionLabel>

            <AnimatedSection>
              <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900 mt-5 text-balance">
                A culture built for people who want to make an impact
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-body-lg text-charcoal-600 mt-5 text-pretty">
                We&apos;re a close-knit team rooted in Helsingborg with clients
                across the Nordics. Our culture blends Scandinavian values with a
                high-performance mindset — because we believe you can deliver
                exceptional results without burning out.
              </p>
            </AnimatedSection>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {CULTURE_HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white border border-charcoal-100"
              >
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-heading-md font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-charcoal-600 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="section-padding bg-cream-200">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <SectionLabel>Benefits & Perks</SectionLabel>

            <AnimatedSection>
              <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900 mt-5 text-balance">
                We take care of our team
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-body-lg text-charcoal-600 mt-5 text-pretty">
                Great work deserves great support. Here&apos;s what you get when
                you join {COMPANY.name}.
              </p>
            </AnimatedSection>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-charcoal-100 hover:border-copper-200 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-copper-50 text-copper-600 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-heading-sm font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="text-body-md text-charcoal-600 mt-2">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Open Positions ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 md:mb-20">
            <SectionLabel>Open Positions</SectionLabel>

            <AnimatedSection>
              <h2 className="text-display-sm md:text-display-md font-semibold text-navy-900 mt-5 text-balance">
                Join the team
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-body-lg text-charcoal-600 mt-5 text-pretty">
                We&apos;re always looking for talented people who share our
                passion for sales excellence. Explore our current openings below.
              </p>
            </AnimatedSection>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-4xl space-y-4"
          >
            {OPEN_POSITIONS.map((position, index) => (
              <motion.div
                key={position.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-charcoal-100 overflow-hidden transition-colors duration-300 hover:border-copper-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => togglePosition(index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer group"
                  aria-expanded={expandedIndex === index}
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-heading-md font-semibold text-navy-900 group-hover:text-copper-600 transition-colors duration-300">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-body-sm text-charcoal-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-body-sm text-charcoal-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-navy-900"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.19, 1, 0.22, 1] },
                        opacity: { duration: 0.3, delay: 0.05 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-charcoal-100 pt-6">
                        <p className="text-body-md text-charcoal-700 leading-relaxed">
                          {position.description}
                        </p>

                        <div className="mt-6">
                          <h4 className="text-heading-sm font-semibold text-navy-900 mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req) => (
                              <li
                                key={req}
                                className="flex items-start gap-3 text-body-md text-charcoal-600"
                              >
                                <svg
                                  className="w-5 h-5 text-copper-500 flex-shrink-0 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                  />
                                </svg>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8">
                          <Button href="/contact" variant="secondary" size="md">
                            Apply for this role
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Application CTA ─── */}
      <section className="section-padding bg-navy-900 text-cream-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-display-sm md:text-display-md font-semibold text-cream-50 text-balance">
                Don&apos;t see your role?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-body-lg text-navy-200 mt-5 max-w-2xl mx-auto text-pretty">
                We&apos;re always interested in hearing from talented people. Send
                us your CV and a short note about what you&apos;d bring to{" "}
                {COMPANY.name}, and we&apos;ll be in touch when the right
                opportunity opens up.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Send a general application
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>

                <Button
                  href={`mailto:${COMPANY.email}`}
                  variant="outline"
                  size="lg"
                  className="!text-cream-50 !border-cream-50/30 hover:!bg-cream-50/10 hover:!text-cream-50"
                >
                  Email us directly
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
