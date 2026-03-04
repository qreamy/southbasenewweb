"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TEAM, COMPANY } from "@/lib/constants";

const VALUES = [
  {
    title: "Directness",
    description:
      "We say what we mean and mean what we say. No jargon, no hiding behind decks. If something isn't working, you'll hear it from us first — with a plan to fix it.",
    number: "01",
  },
  {
    title: "Accountability",
    description:
      "We tie ourselves to outcomes, not activities. Every engagement has clear metrics, and we report on them honestly. If we miss, we own it.",
    number: "02",
  },
  {
    title: "Craft",
    description:
      "Sales is not a numbers game played by amateurs. It's a discipline that rewards preparation, empathy, and relentless refinement. We treat it as such.",
    number: "03",
  },
  {
    title: "Partnership",
    description:
      "We don't operate at arm's length. We embed, we integrate, we become part of your team. Our success is measured entirely by yours.",
    number: "04",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-cream-50">
      {/* ─── Page Header ─── */}
      <section className="section-padding pb-16 md:pb-20 lg:pb-24">
        <div className="container-wide">
          <SectionLabel>About</SectionLabel>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-6 text-display-lg md:text-display-xl font-semibold text-navy-900 max-w-4xl text-balance"
          >
            We believe sales is a craft
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 text-body-lg text-charcoal-600 max-w-2xl text-pretty"
          >
            {COMPANY.name} was founded in {COMPANY.address.city} with a single
            conviction: that B2B sales deserves the same rigour and
            professionalism as any other business discipline. We exist to make
            that a reality for ambitious companies across the Nordics.
          </motion.p>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionLabel className="text-copper-400">
                Our Story
              </SectionLabel>

              <h2 className="mt-6 text-display-sm md:text-display-md font-semibold text-cream-50 text-balance">
                Born in Helsingborg. Built for the Nordics.
              </h2>

              <p className="mt-6 text-body-lg text-navy-200 text-pretty">
                When Johan Andersson started {COMPANY.name} in 2019, most
                companies treated sales as an afterthought — something you
                figured out after building the product. Hiring was ad hoc,
                processes were nonexistent, and &ldquo;strategy&rdquo; meant hoping inbound
                leads would keep coming.
              </p>

              <p className="mt-4 text-body-lg text-navy-200 text-pretty">
                We set out to change that. From our base at {COMPANY.address.street}{" "}
                in {COMPANY.address.city}, we&apos;ve built a consulting practice
                that treats B2B sales as what it truly is — a measurable,
                improvable, professional discipline that can be designed,
                trained, and scaled.
              </p>

              <blockquote className="mt-10 pl-6 border-l-2 border-copper-500">
                <p className="font-serif text-heading-md text-cream-100 italic">
                  &ldquo;Most companies don&apos;t have a sales problem. They have a
                  systems problem disguised as a sales problem.&rdquo;
                </p>
                <cite className="mt-3 block text-body-sm text-copper-400 not-italic">
                  Johan Andersson, Founder
                </cite>
              </blockquote>
            </motion.div>

            {/* Image Side */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                  alt="Southbase Consulting office in Helsingborg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Overlapping accent block */}
              <div className="absolute -bottom-6 -left-6 bg-copper-500 rounded-xl p-6 md:p-8 shadow-lg max-w-xs">
                <p className="text-heading-lg font-semibold text-white">
                  50+
                </p>
                <p className="text-body-sm text-copper-100 mt-1">
                  Client engagements delivered since 2019
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl">
            <SectionLabel>The Team</SectionLabel>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-6 text-display-sm md:text-display-md font-semibold text-navy-900 text-balance"
            >
              People who&apos;ve done it, not just talked about it
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-4 text-body-lg text-charcoal-600 text-pretty"
            >
              Every person at Southbase has carried a quota, built a pipeline,
              and felt the weight of a missed target. That lived experience is
              what makes our advice worth taking.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Photo with overlap effect */}
                <div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5"
                  style={{
                    marginTop: index % 2 === 1 ? "2rem" : "0",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-heading-sm font-semibold text-navy-900">
                  {member.name}
                </h3>
                <p className="text-body-sm text-copper-600 font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-body-sm text-charcoal-500 mt-2 text-pretty">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="section-padding bg-cream-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column - header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <SectionLabel>Our Values</SectionLabel>

              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-6 text-display-sm md:text-display-md font-semibold text-navy-900 text-balance"
              >
                What guides every engagement
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-4 text-body-lg text-charcoal-600 text-pretty"
              >
                These aren&apos;t wall decorations. They&apos;re the standards we hold
                ourselves to on every call, in every meeting, and in every
                report we send.
              </motion.p>
            </div>

            {/* Right column - stacked values */}
            <div className="lg:col-span-7 lg:col-start-6">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-0"
              >
                {VALUES.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    className={`relative py-10 ${
                      index < VALUES.length - 1
                        ? "border-b border-charcoal-200"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      {/* Number */}
                      <span className="text-display-sm font-serif text-copper-500/30 font-semibold shrink-0 leading-none pt-1">
                        {value.number}
                      </span>

                      <div>
                        <h3 className="text-heading-lg font-semibold text-navy-900">
                          {value.title}
                        </h3>
                        <p className="mt-3 text-body-lg text-charcoal-600 text-pretty max-w-lg">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Culture Section ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images Grid */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                  alt="Team collaboration at Southbase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop"
                  alt="Working at Southbase Consulting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden col-span-2 -mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop"
                  alt="Southbase office environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionLabel>Culture</SectionLabel>

              <h2 className="mt-6 text-display-sm md:text-display-md font-semibold text-navy-900 text-balance">
                Nordic by nature. Results by design.
              </h2>

              <p className="mt-6 text-body-lg text-charcoal-600 text-pretty">
                We&apos;re a Swedish company and we operate like one. Flat
                hierarchy, open dialogue, and a deep respect for people&apos;s time.
                We don&apos;t measure commitment by hours in a chair — we measure it
                by outcomes delivered.
              </p>

              <p className="mt-4 text-body-lg text-charcoal-600 text-pretty">
                Our team works from {COMPANY.address.city} and remotely across
                Sweden. We meet in person when it matters, collaborate
                asynchronously when it doesn&apos;t, and trust each other to get the
                work done.
              </p>

              <blockquote className="mt-8 pl-6 border-l-2 border-copper-500">
                <p className="font-serif text-heading-sm text-navy-900 italic">
                  &ldquo;The best sales cultures are built on trust and
                  transparency — not pressure and politics.&rdquo;
                </p>
              </blockquote>

              <ul className="mt-8 space-y-3">
                {[
                  "Flexible work — office, remote, or hybrid",
                  "Continuous learning budget for every team member",
                  "Quarterly offsites across the Nordics",
                  "Flat structure with real ownership",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-md text-charcoal-700"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-copper-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/careers" variant="primary">
                  View open positions
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <SectionLabel className="text-copper-400">
              Get in Touch
            </SectionLabel>

            <h2 className="mt-6 text-display-sm md:text-display-md font-semibold text-cream-50 text-balance mx-auto max-w-3xl">
              Ready to make sales your competitive advantage?
            </h2>

            <p className="mt-6 text-body-lg text-navy-200 max-w-xl mx-auto text-pretty">
              Let&apos;s talk about your goals. No pitch decks, no pressure — just
              an honest conversation about where you are and where you want
              to be.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Book a conversation
              </Button>
              <Button
                href="/work"
                variant="outline"
                size="lg"
                className="border-cream-300 text-cream-50 hover:bg-cream-50 hover:text-navy-900"
              >
                See our work
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
