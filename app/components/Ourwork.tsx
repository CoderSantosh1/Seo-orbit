"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { portfolioContent } from "@/app/data/site-data";

const projects = portfolioContent.items;

const ease = [0.22, 1, 0.36, 1] as const;

export default function OurWork() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

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
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#fff8f8]"
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
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease,
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#fff8f8]"
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
          className="mb-10 text-center"
        >
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease,
            }}
            className="flex items-center justify-center gap-4"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease,
              }}
              className="h-[2px] bg-[#f21f27]"
            />

            <span className="text-sm font-bold tracking-[0.15em] text-[#f21f27]">
              {portfolioContent.eyebrow}
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease,
              }}
              className="h-[2px] bg-[#f21f27]"
            />
          </motion.div>

          {/* Heading */}

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
              delay: 0.2,
              ease,
            }}
            className="mt-3 text-[42px] font-bold text-[#101722] sm:text-[42px]"
          >
            {portfolioContent.title}{" "}
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
                delay: 0.35,
                ease,
              }}
              className="text-[#f21f27]"
            >
              {portfolioContent.highlightTitle}
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
              delay: 0.45,
              ease,
            }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#657186] sm:text-base"
          >
            {portfolioContent.description}
          </motion.p>
        </motion.div>

        {/* ================= PROJECT CARDS ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, projectIndex) => (
            <motion.article
              key={project.title}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.75,
                delay: projectIndex * 0.1,
                ease,
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease,
                },
              }}
              className="group overflow-hidden rounded-[10px] border border-[#e5e7eb] bg-white shadow-[0_5px_20px_rgba(16,23,35,0.05)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(16,23,35,0.12)]"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-[205px]">

                <div className="relative h-full w-full overflow-hidden rounded-t-[10px]">

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
                      delay: projectIndex * 0.1,
                      ease,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      delay: 0.15 + projectIndex * 0.1,
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

                {/* ================= WHITE DOT ================= */}

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                    delay: 0.25 + projectIndex * 0.1,
                  }}
                  className="absolute left-3 top-3 z-10 h-5 w-5 rounded-full bg-white shadow-sm"
                />

                {/* ================= CATEGORY BADGE ================= */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -30,
                    y: 15,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: "50%",
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.35 + projectIndex * 0.1,
                    ease,
                  }}
                  className="absolute bottom-0 left-5 z-20 -translate-y-0 rounded-full bg-[#f21f27] px-4 py-2 text-xs font-bold text-white shadow-[0_5px_15px_rgba(242,31,39,0.25)]"
                >
                  {project.category}
                </motion.span>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="px-5 pb-5 pt-8">

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
                    delay: 0.4 + projectIndex * 0.1,
                    ease,
                  }}
                  className="text-[20px] font-bold leading-7 text-[#102a4a]"
                >
                  {project.title}
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
                    delay: 0.48 + projectIndex * 0.1,
                    ease,
                  }}
                  className="mt-2 min-h-[66px] text-[15px] leading-6 text-[#657186]"
                >
                  {project.description}
                </motion.p>

                {/* ================= STATS ================= */}

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {project.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
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
                        duration: 0.5,
                        delay:
                          0.55 +
                          projectIndex * 0.1 +
                          statIndex * 0.1,
                        ease,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <motion.div
                          whileHover={{
                            x: 3,
                            y: -3,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <ArrowUpRight
                            size={22}
                            strokeWidth={3}
                            className="text-[#f21f27]"
                          />
                        </motion.div>

                        <span className="text-[20px] font-bold text-[#102a4a]">
                          {stat.value}
                        </span>
                      </div>

                      <p className="mt-0.5 pl-6 text-[11px] leading-4 text-[#657186]">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}