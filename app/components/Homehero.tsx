"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaFileAlt,
  FaPlay,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { siteData } from "@/app/data/site-data";

const hero = siteData.hero;

const iconMap = {
  users: FaUsers,
  file: FaFileAlt,
  trophy: FaTrophy,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <main
      id="home"
      className="grid overflow-hidden bg-white lg:min-h-[560px] lg:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease }}
        className="flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:py-12 xl:px-[max(4rem,calc((100vw-1240px)/2))]"
      >
        <div className="mx-auto w-full max-w-[620px] lg:mr-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mb-5 inline-flex items-center gap-3 rounded-full bg-red-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#101722] sm:mb-6 sm:text-xs"
          >
            <span className="size-2.5 rounded-full bg-[#f21f27]" aria-hidden="true" />
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease }}
            className="max-w-[640px] text-[28px] font-extrabold leading-[1.04] text-[#101722] min-[380px]:text-[32px] sm:text-[42px] lg:text-[36px] xl:text-[42px]"
          >
            <span className="block">{hero.title[0]}</span>
            <span className="block">{hero.title[1]}</span>

            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="block text-[#f21f27]"
            >
              {hero.title[2]}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-4 max-w-[570px] text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4"
          >
            <motion.a
              href={hero.quoteHref}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f21f27] px-6 text-sm font-bold text-white shadow-[0_8px_18px_rgba(242,31,39,0.18)] transition-colors hover:bg-[#d9151c]"
            >
              {hero.quoteLabel}
              <FaArrowRight aria-hidden="true" />
            </motion.a>

            <motion.a
              href={hero.videoHref}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-red-50 px-5 text-sm font-semibold text-[#101722] transition-colors hover:bg-red-100"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#f21f27] shadow-sm">
                <FaPlay className="ml-0.5 size-3" aria-hidden="true" />
              </span>
              {hero.videoLabel}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-8 grid grid-cols-1 gap-3 min-[520px]:grid-cols-3 sm:mt-10 sm:gap-0"
          >
            {hero.stats.map(({ amount, label, key }, index) => {
              const Icon = iconMap[key];

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 1.05 + index * 0.12, ease }}
                  whileHover={{ y: -4 }}
                  className={`flex items-center gap-3 min-[520px]:px-4 first:min-[520px]:pl-0 last:min-[520px]:pr-0 ${
                    index < hero.stats.length - 1 ? "min-[520px]:border-r min-[520px]:border-slate-300" : ""
                  }`}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-lg text-[#f21f27]">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="flex flex-col">
                    <strong className="text-base font-extrabold leading-5 text-[#101722]">{amount}</strong>
                    <span className="text-xs leading-5 text-slate-700">{label}</span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.1, ease }}
        className="relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[420px] lg:min-h-[560px]"
      >
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease }}
          className="absolute inset-0"
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            priority
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </motion.div>

        {/* White reveal */}
        <motion.div
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease,
          }}
          className="pointer-events-none absolute inset-0 bg-white"
        />
      </motion.div>
    </main>
  );
}