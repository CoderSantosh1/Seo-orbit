"use client";

import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBullhorn,
  FaChartLine,
  FaMousePointer,
  FaPenNib,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { homeServicesContent } from "@/app/data/site-data";

const ease = [0.22, 1, 0.36, 1] as const;
const services = homeServicesContent.items;
const iconMap = {
  chart: FaChartLine,
  megaphone: FaBullhorn,
  pointer: FaMousePointer,
  pen: FaPenNib,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mb-9 max-w-[850px] text-center sm:mb-11"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-3 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27] sm:gap-5 sm:text-sm"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="h-px bg-[#f21f27] max-sm:w-10"
              aria-hidden="true"
            />

            {homeServicesContent.eyebrow}

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="h-px bg-[#f21f27] max-sm:w-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-[32px] font-extrabold leading-[1.12] text-[#101722] sm:text-4xl lg:text-[42px]"
          >
            {homeServicesContent.title}{" "}
            <span className="text-[#f21f27]">
                    {homeServicesContent.readMoreLabel}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mx-auto mt-3 max-w-[680px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-6"
          >
            {homeServicesContent.description}
          </motion.p>
        </motion.header>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {services.map(
            ({ id, title, description, more, image, alt, icon }, index) => {
              const Icon = iconMap[icon];

              return (
              <motion.article
                key={id}
                id={id}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.12,
                  ease,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="scroll-mt-8 overflow-hidden rounded-lg bg-white shadow-[0_8px_28px_rgba(16,23,35,0.08)]"
              >
                {/* ================= IMAGE ================= */}
				<div className="relative aspect-[1.75/1] bg-slate-100">                  
				<motion.div
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.12,
                      ease,
                    }}
                    className="h-full w-full"
                  >
                    <Image
                      src={image}
                      alt={alt}
                      width={800}
                      height={460}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 519px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    />
                  </motion.div>

                  {/* Image overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="pointer-events-none absolute inset-0 bg-black/10"
                  />

                  {/* Service Icon */}
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -45,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 14,
                      delay: 0.45 + index * 0.12,
                    }}
                    className="absolute -bottom-7 left-1/2 flex size-[58px] -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-white bg-[#f21f27] text-xl text-white shadow-[0_6px_18px_rgba(242,31,39,0.25)]"
                  >
                    <Icon aria-hidden="true" />
                  </motion.span>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="px-5 pb-5 pt-10">

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.12,
                      ease,
                    }}
                    className="text-base font-bold leading-6 text-[#101722]"
                  >
                    {title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.12,
                      ease,
                    }}
                    className="mt-1.5 min-h-[4.5rem] text-sm leading-[1.5] text-slate-600"
                  >
                    {description}
                  </motion.p>

                  {/* Read More */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + index * 0.12,
                      ease,
                    }}
                  >
                    <details className="group mt-2">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-3 text-sm font-bold text-[#101722] [&::-webkit-details-marker]:hidden">
                        {homeServicesContent.readMoreLabel}

                        <span className="flex size-8 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition duration-300 group-open:rotate-45">
                          <FaArrowRight aria-hidden="true" />
                        </span>
                      </summary>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-sm leading-6 text-slate-600"
                      >
                        {more}
                      </motion.p>
                    </details>
                  </motion.div>
                </div>
              </motion.article>
              );
            }
          )}
        </div>

        {/* ================= NAVIGATION ================= */}
        <motion.nav
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease,
          }}
          className="mt-7 flex items-center justify-center gap-3"
          aria-label={homeServicesContent.jumpLabel}
        >
          {/* Previous */}
          <motion.a
            href={`#${services[0]?.id}`}
            aria-label={homeServicesContent.previousLabel}
            whileHover={{
              scale: 1.1,
              x: -3,
            }}
            whileTap={{ scale: 0.9 }}
            className="flex size-9 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition hover:bg-red-100"
          >
            <FaArrowLeft aria-hidden="true" />
          </motion.a>

          {/* Dots */}
          {services.map(({ id, title }, index) => (
            <motion.a
              key={id}
              href={`#${id}`}
              aria-label={`Go to ${title}`}
              aria-current={index === 0 ? "location" : undefined}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
                delay: 0.65 + index * 0.08,
              }}
              whileHover={{
                scale: 1.4,
              }}
              className={`size-3 rounded-full transition-colors ${
                index === 0
                  ? "bg-[#f21f27]"
                  : "bg-red-100 hover:bg-red-300"
              }`}
            />
          ))}

          {/* Next */}
          <motion.a
            href={`#${services[services.length - 1]?.id}`}
            aria-label={homeServicesContent.nextLabel}
            whileHover={{
              scale: 1.1,
              x: 3,
            }}
            whileTap={{ scale: 0.9 }}
            className="flex size-9 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition hover:bg-red-100"
          >
            <FaArrowRight aria-hidden="true" />
          </motion.a>
        </motion.nav>
      </div>
    </section>
  );
}