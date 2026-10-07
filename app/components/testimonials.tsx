"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { testimonialsContent } from "@/app/data/site-data";

const testimonials = testimonialsContent.items;

const ease = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const orderedTestimonials = [
    ...testimonials.slice(activeIndex),
    ...testimonials.slice(0, activeIndex),
  ];

  function showPrevious() {
    setActiveIndex(
      (current) =>
        (current + testimonials.length - 1) % testimonials.length
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#ff373b] via-[#ff292f] to-[#f71f29] px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
    >
      {/* Decorative background circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -150 }}
        whileInView={{ opacity: 0.15, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute -left-40 top-10 size-[420px] rounded-full border-[2px] border-white"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 150 }}
        whileInView={{ opacity: 0.12, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
        className="absolute -right-40 bottom-0 size-[480px] rounded-full border-[2px] border-white"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mb-7 max-w-[850px] text-center sm:mb-9"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-3 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-white sm:gap-5 sm:text-sm"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="h-px bg-white max-sm:w-10"
            />

            {testimonialsContent.eyebrow}

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="h-px bg-white max-sm:w-10"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-[34px] font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-[48px]"
          >
            {testimonialsContent.title}{" "}
            <span className="text-[#101722]">{testimonialsContent.highlightTitle}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mx-auto mt-3 max-w-[760px] text-sm leading-6 text-white sm:text-base"
          >
            {testimonialsContent.description}
          </motion.p>
        </motion.header>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {orderedTestimonials.map(
              ({ quote, name, role, image, alt }, position) => (
                <motion.article
                  key={`${name}-${activeIndex}`}
                  initial={{
                    opacity: 0,
                    y: 70,
                    scale: 0.94,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: position * 0.1,
                    ease,
                  }}
                  whileHover={{
                    y: -7,
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  className={`relative flex min-h-[270px] flex-col rounded-lg bg-gradient-to-br from-white to-rose-50 p-5 text-[#101722] shadow-[0_10px_28px_rgba(110,20,25,0.14)] sm:p-6 ${
                    position === 2
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + position * 0.1,
                      ease,
                    }}
                  >
                    <FaQuoteRight
                      className="absolute right-5 top-4 text-[36px] text-rose-100 sm:right-6 sm:top-5 sm:text-[42px]"
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Stars */}
                  <div
                    className="mb-3 flex gap-1 text-lg text-amber-500"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          y: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 12,
                          delay: 0.25 + position * 0.1 + index * 0.06,
                        }}
                      >
                        <FaStar aria-hidden="true" />
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.45 + position * 0.1,
                      ease,
                    }}
                    className="relative z-10 flex-1 text-sm leading-[1.55] sm:text-[15px]"
                  >
                    “{quote}”
                  </motion.blockquote>

                  {/* Client */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.55 + position * 0.1,
                      ease,
                    }}
                    className="mt-4 flex items-center gap-4"
                  >
                    {/* Profile image */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                        delay: 0.6 + position * 0.1,
                      }}
                    >
                      <Image
                        src={image}
                        alt={alt}
                        width={72}
                        height={72}
                        className="size-[64px] shrink-0 rounded-full object-cover sm:size-[72px]"
                        sizes="72px"
                      />
                    </motion.div>

                    <div>
                      <motion.h3
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.65 + position * 0.1,
                          ease,
                        }}
                        className="text-base font-bold leading-5"
                      >
                        {name}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + position * 0.1,
                          ease,
                        }}
                        className="mt-1 text-sm text-slate-600"
                      >
                        {role}
                      </motion.p>

                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "2rem" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75 + position * 0.1,
                          ease,
                        }}
                        className="mt-2 block h-0.5 bg-[#f21f27]"
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                </motion.article>
              )
            )}
          </AnimatePresence>
        </div>

        {/* ================= CONTROLS ================= */}
        <motion.nav
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease,
          }}
          className="mt-6 flex items-center justify-center gap-4"
          aria-label="Testimonials carousel"
        >
          {/* Previous */}
          <motion.button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            whileHover={{
              scale: 1.12,
              x: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="flex size-10 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white hover:text-[#f21f27]"
          >
            <FaArrowLeft aria-hidden="true" />
          </motion.button>

          {/* Dots */}
          <div
            className="flex items-center gap-2"
            aria-label={`Testimonial set ${
              activeIndex + 1
            } of ${testimonials.length}`}
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial set ${index + 1}`}
                aria-pressed={activeIndex === index}
                whileHover={{
                  scale: 1.4,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                className={`size-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            whileHover={{
              scale: 1.12,
              x: 3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="flex size-10 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white hover:text-[#f21f27]"
          >
            <FaArrowRight aria-hidden="true" />
          </motion.button>
        </motion.nav>
      </div>
    </section>
  );
}