"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

/* =========================================================
   ORIGINAL SERVICES
========================================================= */

const baseServices = homeServicesContent.items;

/* =========================================================
   DUPLICATE SERVICES
   4 ORIGINAL + 4 COPY = 8 CARDS
========================================================= */

const services = [
  ...baseServices,
  ...baseServices.map((service, index) => ({
    ...service,
    id: `${service.id}-copy-${index}`,
  })),
];

/* =========================================================
   ICON MAP
========================================================= */

const iconMap = {
  chart: FaChartLine,
  megaphone: FaBullhorn,
  pointer: FaMousePointer,
  pen: FaPenNib,
} as const;

/* =========================================================
   COMPONENT
========================================================= */

export default function Services() {
  /*
    Desktop:
    4 cards visible
    8 total cards

    Maximum slider position:
    8 - 4 = 4
  */

  const [activeSlide, setActiveSlide] = useState(0);

  const maxDesktopSlide = Math.max(
    services.length - 4,
    0
  );

  /* =========================================================
     NEXT
  ========================================================= */

  const nextSlide = () => {
    setActiveSlide((current) => {
      if (current >= maxDesktopSlide) {
        return 0;
      }

      return current + 1;
    });
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const previousSlide = () => {
    setActiveSlide((current) => {
      if (current <= 0) {
        return maxDesktopSlide;
      }

      return current - 1;
    });
  };

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        if (current >= maxDesktopSlide) {
          return 0;
        }

        return current + 1;
      });
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [maxDesktopSlide]);

  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mx-auto mb-9 max-w-[850px] text-center sm:mb-11"
        >
          {/* Eyebrow */}

          <motion.div
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
              delay: 0.1,
              ease,
            }}
            className="mb-3 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27] sm:gap-5 sm:text-sm"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "4rem",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="h-px bg-[#f21f27] max-sm:w-10"
            />

            {homeServicesContent.eyebrow}

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "4rem",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="h-px bg-[#f21f27] max-sm:w-10"
            />
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
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
            className="text-[32px] font-extrabold leading-[1.12] text-[#101722] sm:text-4xl lg:text-[42px]"
          >
            {homeServicesContent.title}{" "}
            <span className="text-[#f21f27]">
              {homeServicesContent.readMoreLabel}
            </span>
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
              duration: 0.8,
              delay: 0.35,
              ease,
            }}
            className="mx-auto mt-3 max-w-[680px] text-sm leading-6 text-slate-600 sm:text-base"
          >
            {homeServicesContent.description}
          </motion.p>
        </motion.header>

        {/* =====================================================
            SLIDER
        ===================================================== */}

        <div className="relative">

          {/* Slider viewport */}

          <div className="overflow-hidden">

            <motion.div
              className="flex"
              animate={{
                x: `-${activeSlide * 25}%`,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              {services.map(
                (
                  {
                    id,
                    title,
                    description,
                    more,
                    image,
                    alt,
                    icon,
                  },
                  index
                ) => {
                  const Icon = iconMap[icon];

                  return (
                    <div
                      key={id}
                      className="w-full shrink-0 px-2 min-[520px]:w-1/2 lg:w-1/4"
                    >
                      {/* =================================================
                          ORIGINAL CARD
                      ================================================= */}

                      <motion.article
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
                          delay:
                            0.15 +
                            (index % 4) * 0.12,
                          ease,
                        }}
                        whileHover={{
                          y: -8,
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }}
                        className="group overflow-hidden rounded-lg bg-white shadow-[0_8px_28px_rgba(16,23,35,0.08)]"
                      >

                        {/* =================================================
                            IMAGE
                        ================================================= */}

                        <div className="relative aspect-[1.75/1] bg-slate-100">

                          <motion.div
                            initial={{
                              scale: 1.12,
                            }}
                            whileInView={{
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                              delay:
                                0.2 +
                                (index % 4) *
                                  0.12,
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

                          {/* Overlay */}

                          <motion.div
                            initial={{
                              opacity: 0,
                            }}
                            whileInView={{
                              opacity: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay:
                                0.3 +
                                (index % 4) *
                                  0.12,
                            }}
                            className="pointer-events-none absolute inset-0 bg-black/10"
                          />

                          {/* =================================================
                              ROUND ICON
                          ================================================= */}

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
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 220,
                              damping: 14,
                              delay:
                                0.45 +
                                (index % 4) *
                                  0.12,
                            }}
                            className="absolute -bottom-7 left-1/2 flex size-[58px] -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-white bg-[#f21f27] text-xl text-white shadow-[0_6px_18px_rgba(242,31,39,0.25)]"
                          >
                            <Icon aria-hidden="true" />
                          </motion.span>
                        </div>

                        {/* =================================================
                            CONTENT
                        ================================================= */}

                        <div className="px-5 pb-5 pt-10">

                          {/* Title */}

                          <motion.h3
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
                            }}
                            transition={{
                              duration: 0.6,
                              delay:
                                0.5 +
                                (index % 4) *
                                  0.12,
                              ease,
                            }}
                            className="text-base font-bold leading-6 text-[#101722]"
                          >
                            {title}
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
                              delay:
                                0.6 +
                                (index % 4) *
                                  0.12,
                              ease,
                            }}
                            className="mt-1.5 min-h-[4.5rem] text-sm leading-[1.5] text-slate-600"
                          >
                            {description}
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
                              delay:
                                0.7 +
                                (index % 4) *
                                  0.12,
                              ease,
                            }}
                          >
                            
                          </motion.div>
                        </div>
                      </motion.article>
                    </div>
                  );
                }
              )}
            </motion.div>
          </div>

          {/* =====================================================
              SLIDER CONTROLS
          ===================================================== */}

          <motion.nav
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
            className="mt-7 flex items-center justify-center gap-3"
            aria-label="Services slider controls"
          >

            {/* PREVIOUS */}

            <motion.button
              type="button"
              onClick={previousSlide}
              whileHover={{
                scale: 1.1,
                x: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="flex size-9 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition-colors duration-300 hover:bg-red-100"
              aria-label="Previous services"
            >
              <FaArrowLeft />
            </motion.button>

            {/* =================================================
                DOTS
            ================================================= */}

            <div className="flex items-center gap-2">
              {Array.from({
                length: maxDesktopSlide + 1,
              }).map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() =>
                    setActiveSlide(index)
                  }
                  whileHover={{
                    scale: 1.25,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "h-3 w-6 bg-[#f21f27]"
                      : "size-3 bg-red-100 hover:bg-red-300"
                  }`}
                  aria-label={`Go to service slide ${
                    index + 1
                  }`}
                  aria-current={
                    activeSlide === index
                      ? "true"
                      : undefined
                  }
                />
              ))}
            </div>

            {/* NEXT */}

            <motion.button
              type="button"
              onClick={nextSlide}
              whileHover={{
                scale: 1.1,
                x: 3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="flex size-9 items-center justify-center rounded-full bg-red-50 text-[#f21f27] transition-colors duration-300 hover:bg-red-100"
              aria-label="Next services"
            >
              <FaArrowRight />
            </motion.button>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}