"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent, testimonialsContent } from "@/app/data/site-data";
import type { AboutUsProps } from "@/app/types/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutUs(props: AboutUsProps) {
  const content = aboutContent.page;
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
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">

      {/* Decorative Background Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease }}
        className="absolute left-[-100px] top-10 h-[500px] w-[500px] rounded-full bg-[#fff6f6]"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-0">

        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -120,
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
            duration: 1,
            ease,
          }}
          className="relative"
        >

          {/* Decorative Circle */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
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
            className="absolute -left-8 top-[-50px] -z-0 h-[500px] w-[500px] rounded-full bg-[#fff8f8]"
          />

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="relative z-10 overflow-hidden rounded-[16px]"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                width={900}
                height={650}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Client Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease,
            }}
            whileHover={{
              y: -5,
            }}
            className="absolute bottom-8 left-5 z-20 flex items-center gap-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.15)] sm:bottom-10 sm:left-8 sm:px-6"
          >

            {/* Avatars */}

            <div className="flex -space-x-3">
              {testimonialsContent.items.slice(0, content.avatarCount).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
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
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                    ease,
                  }}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-300 sm:h-11 sm:w-11"
                >
                  <Image src={testimonial.image} alt="" fill sizes="44px" className="object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Count */}

            <div>
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
                  duration: 0.5,
                  delay: 0.8,
                  ease,
                }}
                className="text-[42px] font-bold leading-none text-[#f21f27] sm:text-4xl"
              >
                {clientCount}
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
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
                  delay: 0.9,
                  ease,
                }}
                className="mt-1 text-sm font-semibold text-[#101722] sm:text-base"
              >
                {content.clientLabel}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <motion.div initial={{
            opacity: 0,
            x: 120,
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
            duration: 1,
            ease,
          }}
        >

          {/* Eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              delay: 0.15,
              ease,
            }}
            className="flex items-center gap-5"
          >
            <span className="text-sm font-bold tracking-[0.18em] text-[#f21f27]">
              {eyebrow}
            </span>

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

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#101722] sm:text-[42px] lg:text-[42px]"
          >
            {title}{" "}

            <motion.span
              initial={{
                opacity: 0,
                x: 40,
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
                delay: 0.45,
                ease,
              }}
              className="block text-[#f21f27]"
            >
              {highlightTitle}
            </motion.span>
          </motion.h2>

          {/* Description */}

          <div className="mt-6 space-y-5">
            {description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.45 + index * 0.12,
                  ease,
                }}
                className="max-w-[590px] text-[15px] leading-[1.55] text-[#596579] sm:text-[16px]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* CTA */}

          
        </motion.div>
      </div>
    </section>
  );
}