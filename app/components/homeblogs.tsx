"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { articles, blogsSectionContent } from "@/app/data/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mb-8 max-w-[850px] text-center sm:mb-10"
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

            {blogsSectionContent.eyebrow}

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
            className="text-[34px] font-extrabold leading-[1.1] text-[#101722] sm:text-4xl lg:text-[42px]"
          >
            {blogsSectionContent.title}{" "}
            <span className="text-[#f21f27]">{blogsSectionContent.highlightTitle}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mx-auto mt-3 max-w-[760px] text-sm leading-6 text-slate-600 sm:text-base"
          >
            {blogsSectionContent.description}
          </motion.p>
        </motion.header>

        {/* ================= BLOG CARDS ================= */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {articles.map(
            (
              { id, slug, category, date, title, description, image, alt },
              index
            ) => (
              <motion.article
                key={id}
                id={id}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
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
                  delay: 0.15 + index * 0.15,
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
                <div className="relative aspect-[2.1/1] overflow-hidden bg-slate-100">
                  <motion.div
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2 + index * 0.15,
                      ease,
                    }}
                    className="h-full w-full"
                  >
                    <Image
                      src={image}
                      alt={alt}
                      width={900}
                      height={480}
                      className="size-full object-cover transition-transform duration-700"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Image overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.15,
                    }}
                    className="pointer-events-none absolute inset-0 bg-black/5"
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="px-5 pb-5 pt-4 sm:px-6">

                  {/* Category + Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + index * 0.15,
                      ease,
                    }}
                    className="mb-2 flex items-center justify-between gap-3"
                  >
                    {/* Category */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                        delay: 0.45 + index * 0.15,
                      }}
                      className="rounded bg-[#f21f27] px-2.5 py-1 text-[11px] font-bold text-white"
                    >
                      {category}
                    </motion.span>

                    {/* Date */}
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-slate-500">
                      <FaCalendarAlt
                        className="text-[#f21f27]"
                        aria-hidden="true"
                      />
                      <time>{date}</time>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.55 + index * 0.15,
                      ease,
                    }}
                    className="text-base font-bold leading-6 text-[#101722] sm:text-lg"
                  >
                    {title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.65 + index * 0.15,
                      ease,
                    }}
                    className="mt-1.5 min-h-[4.5rem] text-sm leading-[1.5] text-slate-600"
                  >
                    {description}
                  </motion.p>

                  {/* Read More */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.75 + index * 0.15,
                      ease,
                    }}
                  >
                    <Link
                      href={`/blogs/${slug}`}
                      className="group/link mt-3 inline-flex items-center gap-3 text-sm font-bold text-[#101722]"
                    >
                      {blogsSectionContent.readMoreLabel}

                      <motion.span
                        whileHover={{
                          x: 4,
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.9,
                        }}
                        className="flex size-8 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition group-hover/link:bg-[#f21f27] group-hover/link:text-white"
                      >
                        <FaArrowRight aria-hidden="true" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}