"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaChevronRight, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  footerContact,
  footerLegalLinks,
  footerQuickLinks,
  footerServiceLinks,
  footerSocialLinks,
  locationContent,
  siteData,
} from "@/app/data/site-data";


const socialIconMap = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0c1928] px-5 text-white sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.35fr_0.75fr_1.2fr_1.2fr] lg:gap-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.a
              href="#home"
              aria-label={siteData.footer.labels.homeAriaLabel}
              className="inline-flex"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={siteData.footer.logoSrc}
                alt={siteData.footer.labels.logoAlt}
                width={245}
                height={82}
                className="h-auto w-[235px] sm:w-[245px]"
              />
            </motion.a>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-5 max-w-[355px] text-[13px] leading-[1.75] text-slate-100 sm:text-sm"
            >
              {siteData.footer.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="mt-6 flex gap-3"
            >
              {footerSocialLinks.map(({ label, key, href }, index) => {
                const Icon = socialIconMap[key];

                return (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.4 + index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex size-11 items-center justify-center rounded-full bg-white/10 text-base text-white transition-colors duration-300 hover:bg-[#f21f27]"
                  >
                    <Icon aria-hidden="true" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <FooterLinkColumn title={siteData.footer.labels.quickLinks} links={footerQuickLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <FooterLinkColumn title={siteData.footer.labels.services} links={footerServiceLinks} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <FooterHeading>{siteData.footer.labels.contact}</FooterHeading>

            <div className="mt-5 space-y-5">
              <motion.a
                href={locationContent.directionsUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 text-[13px] leading-6 text-slate-100 transition-colors hover:text-white sm:text-sm"
              >
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <span>{footerContact.address}</span>
              </motion.a>

              <motion.a
                href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 text-[13px] leading-6 text-slate-100 transition-colors hover:text-white sm:text-sm"
              >
                <ContactIcon>
                  <FaPhoneAlt />
                </ContactIcon>
                <span>
                  {footerContact.phone}
                  <br />
                  <span className="text-xs text-slate-300">{footerContact.hours}</span>
                </span>
              </motion.a>

              <motion.a
                href={`mailto:${footerContact.email}`}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 text-[13px] leading-6 text-slate-100 transition-colors hover:text-white sm:text-sm"
              >
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <span>
                  {footerContact.email}
                  <br />
                  <span className="text-xs text-slate-300">{footerContact.replyText}</span>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-4 border-t border-white/15 py-5 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between sm:text-sm"
        >
          <p className="text-left">© {new Date().getFullYear()} {siteData.footer.labels.copyright}</p>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end" aria-label={siteData.footer.labels.legalAriaLabel}>
            {footerLegalLinks.map((link, index) => (
              <div key={link.label} className="contents">
                <motion.a
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>

                {index < footerLegalLinks.length - 1 && (
                  <span className="text-white/70" aria-hidden="true">
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>

      <ul className="mt-5 w-full max-w-[260px] space-y-2">
        {links.map(({ label, href }, index) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.06, ease }}
          >
            <a
              href={href}
              className="group grid w-full grid-cols-[minmax(0,1fr)_16px] items-center gap-3 text-[13px] text-slate-100 transition-colors hover:text-white sm:text-sm"
            >
              <span className="min-w-0">{label}</span>
              <FaChevronRight
                className="shrink-0 text-[10px] text-[#f21f27] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="text-lg font-bold text-white sm:text-xl"
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className="mt-2.5 block h-0.5 bg-[#f21f27]"
        aria-hidden="true"
      />
    </motion.h2>
  );
}

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
      className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#f21f27] text-lg text-[#f21f27]"
    >
      {children}
    </motion.span>
  );
}
