"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  MousePointerClick,
  PenTool,
} from "lucide-react";
import { motion } from "framer-motion";
import { servicesPageContent } from "@/app/data/site-data";

const ease = [0.22, 1, 0.36, 1] as const;
const iconMap = {
  chart: BarChart3,
  megaphone: Megaphone,
  pointer: MousePointerClick,
  pen: PenTool,
} as const;

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#fff7f7]"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease,
        }}
        className="pointer-events-none absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-[#fff7f7]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1240px] sm:w-[calc(100%-3rem)]">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          {/* Small heading */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
            className="flex items-center justify-center gap-5"
          >
            {/* Left line */}

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 64,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease,
              }}
              className="h-[2px] bg-[#f21f27]"
            />

            <span className="text-sm font-bold tracking-[0.15em] text-[#f21f27]">
              {servicesPageContent.eyebrow}
            </span>

            {/* Right line */}

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 64,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="h-[2px] bg-[#f21f27]"
            />
          </motion.div>

          {/* Main heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="mt-4 text-[42px] font-bold leading-tight tracking-tight text-[#101722] sm:text-[42px] lg:text-[42px]"
          >
            {servicesPageContent.title}{" "}
            <motion.span
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease,
              }}
              className="text-[#f21f27]"
            >
              {servicesPageContent.highlightTitle}
            </motion.span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease,
            }}
            className="mx-auto mt-3 max-w-[760px] text-[15px] leading-6 text-[#596579] sm:text-base"
          >
            {servicesPageContent.description}
          </motion.p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesPageContent.items.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.12,
                  ease,
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className="group overflow-hidden rounded-[16px] bg-white shadow-[0_8px_30px_rgba(16,23,35,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(16,23,35,0.14)]"
              >
                {/* ================= IMAGE ================= */}

                <div className="relative h-[170px] overflow-hidden">
                  <motion.div
                    initial={{
                      scale: 1.12,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.12,
                      ease,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Image Overlay */}

                  <motion.div
                    initial={{
                      opacity: 0.35,
                    }}
                    whileInView={{
                      opacity: 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="absolute inset-0 bg-black"
                  />

                  {/* Image Shine */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-full
                      w-1/2
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:left-[140%]
                    "
                  />
                </div>

                {/* ================= ROUND ICON ================= */}

                <div className="flex justify-center pt-3">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 14,
                      delay: 0.4 + index * 0.12,
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[4px] border-white bg-[#f21f27] shadow-[0_5px_15px_rgba(242,31,39,0.25)]"
                  >
                    <Icon
                      size={27}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </motion.div>
                </div>

                {/* ================= CARD CONTENT ================= */}

                <div className="px-7 pb-6 pt-3">

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
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.12,
                      ease,
                    }}
                    className="min-h-[48px] text-center text-[17px] font-bold leading-6 text-[#102a4a]"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.58 + index * 0.12,
                      ease,
                    }}
                    className="mt-2 min-h-[72px] text-[14px] leading-[1.55] text-[#68758a]"
                  >
                    {service.description}
                  </motion.p>

                  {/* Read More */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.65 + index * 0.12,
                      ease,
                    }}
                  >
                    <Link
                      href={service.href}
                      className="group/link mt-4 inline-flex items-center gap-3 text-[14px] font-bold text-[#102a4a]"
                    >
                      <span className="transition-colors duration-300 group-hover/link:text-[#f21f27]">
                        {servicesPageContent.readMoreLabel}
                      </span>

                      <motion.span
                        whileHover={{
                          scale: 1.12,
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f0] text-[#f21f27] transition-all duration-300 group-hover/link:bg-[#f21f27] group-hover/link:text-white"
                      >
                        <ArrowRight
                          size={17}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}