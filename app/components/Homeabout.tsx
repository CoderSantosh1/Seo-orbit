"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headset, Users } from "lucide-react";
import { motion } from "framer-motion";
import { aboutContent } from "@/app/data/site-data";
import type { AboutUsProps } from "@/app/types/site";

const ease = [0.22, 1, 0.36, 1] as const;
const featureIconMap = {
  users: Users,
  support: Headset,
} as const;

export default function AboutUs(props: AboutUsProps) {
  const content = aboutContent.home;
  const {
    image = content.image,
    imageAlt = content.imageAlt,
    eyebrow = content.eyebrow,
    title = content.title,
    highlightTitle = content.highlightTitle,
    description = content.description,
    clientCount = content.clientCount,
  } = props;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Decorative Background Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease }}
        className="absolute left-[-100px] top-10 h-[500px] w-[500px] rounded-full bg-[#fff6f6]"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-0">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease }}
          className="relative"
        >

          {/* Decorative Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 0.15, ease }}
            className="absolute -left-8 top-[-50px] -z-0 h-[500px] w-[500px] rounded-full bg-[#fff8f8]"
          />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="relative z-10 overflow-hidden rounded-[16px]"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={650}
              className="h-auto w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Client Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="absolute bottom-8 left-5 z-20 flex items-center gap-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.15)] sm:bottom-10 sm:left-8 sm:px-6"
          >

            {/* Avatars */}
            <div className="flex -space-x-3">
              {Array.from({ length: content.avatarCount }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.65 + index * 0.1,
                    ease,
                  }}
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-300 sm:h-11 sm:w-11"
                >
                  <div className="h-full w-full bg-gradient-to-br from-slate-400 to-slate-700" />
                </motion.div>
              ))}
            </div>

            {/* Count */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="text-[42px] font-bold leading-none text-[#f21f27] sm:text-4xl"
              >
                {clientCount}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9, ease }}
                className="mt-1 text-sm font-semibold text-[#101722] sm:text-base"
              >
                {content.clientLabel}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease }}
        >

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="flex items-center gap-5"
          >
            <span className="text-sm font-bold tracking-[0.18em] text-[#f21f27]">
              {eyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#f21f27]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#101722] sm:text-[42px] lg:text-[42px]"
          >
            {title}{" "}
            <span className="block text-[#f21f27]">
              {highlightTitle}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-6 space-y-5"
          >
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[590px] text-[15px] leading-[1.55] text-[#596579] sm:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-7 grid gap-5 min-[520px]:grid-cols-2 min-[520px]:gap-0 sm:mt-8"
          >

            {content.features?.map(({ title: featureTitle, description: featureDescription, icon }, index) => {
              const Icon = featureIconMap[icon];

              return <motion.div
              key={featureTitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 + index * 0.1, ease }}
              className={`flex gap-4 ${index === 0 ? "min-[520px]:border-r min-[520px]:border-slate-300 min-[520px]:pr-5" : "min-[520px]:pl-6"}`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#f21f27]">
                <Icon size={24} aria-hidden="true" />
              </span>

              <span>
                <strong className="block text-sm font-bold text-[#101722] sm:text-base">
                  {featureTitle}
                </strong>

                <span className="mt-1 block text-xs leading-[1.55] text-slate-600 sm:text-[13px]">
                  {featureDescription}
                </span>
              </span>
            </motion.div>
              ;
            })}
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
          >
            <Link
              href={content.ctaHref}
              className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f21f27] px-7 text-sm font-bold text-white shadow-[0_8px_18px_rgba(242,31,39,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d9151c] sm:mt-8"
            >
              {content.ctaLabel}

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}