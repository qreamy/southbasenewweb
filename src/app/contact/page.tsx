"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedSection } from "@/components/AnimatedSection";
import { COMPANY } from "@/lib/constants";

const serviceOptions = [
  "Operative Sales",
  "Sales Training",
  "Sales Strategy",
  "Interim Leadership",
  "Other",
];

const inputStyles =
  "w-full bg-white border border-charcoal-200 rounded-xl px-5 py-4 text-body-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all";

const labelStyles = "block text-body-sm font-medium text-navy-900 mb-2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <main>
      {/* ───────────────── Page Header ───────────────── */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <SectionLabel className="!text-copper-400">Contact</SectionLabel>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-display-lg md:text-display-xl text-cream-50 mt-5 text-balance"
          >
            Let&rsquo;s start a conversation
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-body-lg text-charcoal-300 mt-6 max-w-2xl mx-auto text-pretty"
          >
            Whether you need an operative sales team tomorrow or want to
            explore how we can accelerate your growth, we&rsquo;d love to hear
            from you.
          </motion.p>
        </div>
      </section>

      {/* ───────────── Two-Column: Form + Info ───────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Left: Contact Form ── */}
            <AnimatedSection
              variants={slideInLeft}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl border border-charcoal-100 p-8 md:p-10 shadow-sm">
                <h2 className="text-heading-lg text-navy-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-body-md text-charcoal-500 mb-8">
                  Fill out the form below and we&rsquo;ll get back to you
                  within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelStyles}>
                        Name <span className="text-copper-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelStyles}>
                        Email <span className="text-copper-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className={labelStyles}>
                        Company <span className="text-copper-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelStyles}>
                        Phone{" "}
                        <span className="text-charcoal-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+46 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className={labelStyles}>
                      How can we help?{" "}
                      <span className="text-copper-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%20stroke%3D%22%236d6d6d%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat pr-12 ${!formData.service ? "text-charcoal-400" : ""}`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelStyles}>
                      Message <span className="text-copper-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your goals, challenges, or how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputStyles} resize-y min-h-[140px]`}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="secondary" size="lg">
                    Send message
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* ── Right: Contact Info ── */}
            <AnimatedSection
              variants={slideInRight}
              className="lg:col-span-2"
            >
              <div className="space-y-10">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-copper-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-copper-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-heading-sm text-navy-900">Email</h3>
                  </div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-body-lg text-copper-600 hover:text-copper-700 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                  <p className="text-body-sm text-charcoal-500 mt-1">
                    We respond within one business day.
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-copper-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-copper-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-heading-sm text-navy-900">Phone</h3>
                  </div>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="text-body-lg text-copper-600 hover:text-copper-700 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-body-sm text-charcoal-500 mt-1">
                    Mon&ndash;Fri, 08:00&ndash;17:00 CET
                  </p>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-copper-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-copper-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-heading-sm text-navy-900">Office</h3>
                  </div>
                  <p className="text-body-lg text-charcoal-700">
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.zip} {COMPANY.address.city}
                    <br />
                    {COMPANY.address.country}
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-charcoal-200">
                  <div className="relative h-64 bg-navy-50 flex flex-col items-center justify-center">
                    {/* Map-like grid pattern */}
                    <div className="absolute inset-0 opacity-[0.07]">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #111a26 1px, transparent 1px), linear-gradient(to bottom, #111a26 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                    </div>

                    {/* Pin icon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-copper-500 flex items-center justify-center shadow-lg mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-body-sm font-medium text-navy-900">
                        {COMPANY.address.street}
                      </p>
                      <p className="text-body-sm text-charcoal-500">
                        {COMPANY.address.zip} {COMPANY.address.city}
                      </p>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-copper-200 opacity-40" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-copper-100 opacity-30" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────────── Office Section ───────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop"
                  alt="Modern Nordic office space in Helsingborg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Text */}
              <div>
                <SectionLabel>Visit us</SectionLabel>
                <h2 className="text-display-sm md:text-display-md text-navy-900 mt-4 mb-6 text-balance">
                  Come say hello at our Helsingborg office
                </h2>
                <p className="text-body-lg text-charcoal-600 mb-6 text-pretty">
                  We&rsquo;re based in the heart of Helsingborg, right on
                  Stortorget. Our doors are always open for a coffee and a
                  conversation about how we can help grow your business.
                </p>
                <p className="text-body-lg text-charcoal-600 mb-8 text-pretty">
                  Whether you prefer a face-to-face meeting or a video call,
                  we adapt to how you work best. Most of our client
                  relationships start with an informal chat &mdash; no
                  pressure, no commitment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    href={`mailto:${COMPANY.email}`}
                    variant="primary"
                    size="lg"
                  >
                    Book a meeting
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Button>
                  <Button
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}, ${COMPANY.address.country}`
                    )}`}
                    variant="outline"
                    size="lg"
                  >
                    Get directions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
