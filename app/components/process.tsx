"use client";

import Image from "next/image";
import { Fragment } from "react";
import { FaChartLine, FaComments, FaCog, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { processContent } from "@/app/data/site-data";

const ease = [0.22, 1, 0.36, 1] as const;
const iconMap = {
  comments: FaComments,
  settings: FaCog,
  chart: FaChartLine,
  trophy: FaTrophy,
} as const;

export default function Process() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* ================= SECTION HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mb-10 max-w-[820px] text-center sm:mb-12"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-3 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27] sm:gap-5 sm:text-sm"
          >
            <span
              className="h-px w-10 bg-[#f21f27] sm:w-16"
              aria-hidden="true"
            />

            {processContent.eyebrow}

            <span
              className="h-px w-10 bg-[#f21f27] sm:w-16"
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
            {processContent.title}{" "}
            <span className="text-[#f21f27]">{processContent.highlightTitle}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mx-auto mt-3 max-w-[660px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-6"
          >
            {processContent.description}
          </motion.p>
        </motion.div>

        {/* ================= PROCESS STEPS ================= */}
        <div className="grid grid-cols-1 gap-x-3 gap-y-10 min-[520px]:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_42px_minmax(0,1fr)_42px_minmax(0,1fr)_42px_minmax(0,1fr)] lg:gap-y-0">

          {processContent.steps.map(
            ({ title, description, image, alt, icon }, index) => {
              const Icon = iconMap[icon];

              return (
              <Fragment key={title}>

                {/* ================= STEP CARD ================= */}
                <motion.article
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -70 : 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.15,
                    ease,
                  }}
                  className="relative flex flex-col items-center px-2 text-center lg:col-span-1 lg:px-0"
                >

                  {/* Image + Number + Icon */}
                  <div className="relative mb-4 flex size-[174px] items-center justify-center sm:size-[190px]">

                    {/* Number */}
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.15,
                        ease,
                      }}
                      className="absolute -left-2 -top-4 text-[48px] font-extrabold leading-none text-red-100 sm:-left-3 sm:-top-4 sm:text-[42px]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>

                    {/* Main Image */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.75,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + index * 0.15,
                        ease,
                      }}
                      className="relative size-[150px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_8px_25px_rgba(16,23,35,0.12)] sm:size-[164px]"
                    >
                      <Image
                        src={image}
                        alt={alt}
                        width={600}
                        height={600}
                        className="size-full object-cover transition-transform duration-700 hover:scale-110"
                        sizes="190px"
                      />
                    </motion.div>

                    {/* Icon */}
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
                        delay: 0.55 + index * 0.15,
                      }}
                      className="absolute bottom-0 right-0 flex size-[52px] items-center justify-center rounded-full border-[5px] border-white bg-[#f21f27] text-lg text-white shadow-[0_6px_15px_rgba(242,31,39,0.25)] sm:size-[42px]"
                    >
                      <Icon aria-hidden="true" />
                    </motion.span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.55 + index * 0.15,
                      ease,
                    }}
                    className="text-base font-bold leading-6 text-[#101722] sm:text-lg"
                  >
                    {title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.65 + index * 0.15,
                      ease,
                    }}
                    className="mt-1 max-w-[250px] text-sm leading-[1.5] text-slate-600"
                  >
                    {description}
                  </motion.p>
                </motion.article>

                {/* ================= FORWARD ARROW ================= */}
                {index < processContent.steps.length - 1 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6 + index * 0.15,
                      ease,
                    }}
                    className="relative hidden lg:block"
                    aria-hidden="true"
                  >
                    <Image
                      src={processContent.arrowImage}
                      alt=""
                      width={1024}
                      height={683}
                      className="absolute left-1/2 top-[95px] h-[88px] w-[132px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
                      sizes="132px"
                    />
                  </motion.div>
                )}
              </Fragment>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}