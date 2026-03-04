import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-cream-100">
      <div className="container-wide py-20 lg:py-26">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-heading-md font-semibold tracking-tight text-cream-50"
            >
              {COMPANY.name}
            </Link>
            <p className="mt-4 text-body-md text-navy-300 max-w-md">
              We help ambitious companies sell more. Through operative sales,
              training, and strategic advisory — we deliver measurable revenue
              growth.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-navy-400 hover:text-cream-50 hover:border-cream-50 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-caption uppercase tracking-widest font-medium text-navy-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-navy-300 hover:text-cream-50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-caption uppercase tracking-widest font-medium text-navy-400 mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-body-md text-navy-300">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-cream-50 transition-colors duration-200"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="hover:text-cream-50 transition-colors duration-200"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="pt-2">
                <p>{COMPANY.address.street}</p>
                <p>
                  {COMPANY.address.zip} {COMPANY.address.city}
                </p>
                <p>{COMPANY.address.country}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-body-sm text-navy-500">
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-body-sm text-navy-500">
            <Link
              href="/privacy"
              className="hover:text-navy-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-navy-300 transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
