"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GooeyNav from "@/app/components/GooeyNav";
import { navigationItems, navigationUi } from "@/app/data/site-data";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <nav
        className="fixed inset-x-0 top-14 z-[1000] w-full border-b border-slate-100 bg-white shadow-[0_5px_22px_rgba(16,23,35,0.07)] sm:top-10"
        aria-label={navigationUi.mainAriaLabel}
      >
        <div className="mx-auto flex min-h-[72px] w-[calc(100%-1.5rem)] max-w-[1400px] items-center justify-between gap-3 sm:min-h-[72px] sm:w-[calc(100%-3rem)] lg:min-h-[80px] lg:gap-5 xl:w-[calc(100%-5rem)]">
          
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label={navigationUi.homeAriaLabel}
          >
            <Image
              src={navigationUi.logoSrc}
              alt={navigationUi.logoAlt}
              width={2048}
              height={630}
              priority
              className="h-auto w-[125px] transition-transform duration-300 group-hover:scale-[1.02] sm:w-[170px] md:w-[195px] lg:w-[225px] xl:w-[230px]"
            />
          </Link>

          {/* ================= DESKTOP GOOEY NAV ================= */}
          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <GooeyNav
              items={navigationItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[
                "#f21f27",
                "#d9151c",
                "#ff4b52",
                "#f21f27",
                "#d9151c",
                "#ff4b52",
              ]}
            />
          </div>

          {/* ================= DESKTOP GET A QUOTE ================= */}
          <Link
            href={navigationUi.quoteHref}
            className="
              hidden shrink-0 items-center justify-center
              gap-3 rounded-full
              bg-[#f21f27]
              px-5 py-3
              text-sm font-bold text-white
              shadow-[0_8px_18px_rgba(242,31,39,0.19)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#d9151c]
              hover:shadow-[0_12px_25px_rgba(242,31,39,0.28)]
              lg:flex
              lg:min-h-12
              lg:min-w-[155px]
              xl:min-h-14
              xl:min-w-[174px]
              xl:px-6
            "
          >
            <span>{navigationUi.quoteLabel}</span>

            <span
              className="text-xl font-normal leading-none transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          {/* ================= MOBILE RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* MOBILE GET QUOTE */}
            <Link
              href={navigationUi.quoteHref}
              className="
                flex min-h-10 items-center justify-center
                rounded-full bg-[#f21f27]
                px-3 text-xs font-bold text-white
                shadow-[0_6px_15px_rgba(242,31,39,0.18)]
                transition-all duration-300
                hover:bg-[#d9151c]
                sm:min-h-11
                sm:px-4
                sm:text-sm
              "
            >
              {navigationUi.quoteLabel}
            </Link>

            {/* ================= MOBILE MENU ================= */}
            <details className="group relative">
              <summary
                className="
                  flex size-10 cursor-pointer list-none
                  flex-col items-center justify-center
                  gap-[5px] rounded-lg
                  border border-slate-200
                  bg-white
                  transition-all duration-300
                  hover:border-[#f21f27]
                  hover:bg-slate-50
                  [&::-webkit-details-marker]:hidden
                  sm:size-11
                "
                aria-label={navigationUi.mobileMenuAriaLabel}
              >
                <span
                  className="
                    h-0.5 w-[18px] rounded-full
                    bg-[#101722]
                    transition-all duration-300
                    group-open:translate-y-[7px]
                    group-open:rotate-45
                  "
                />

                <span
                  className="
                    h-0.5 w-[18px] rounded-full
                    bg-[#101722]
                    transition-all duration-300
                    group-open:opacity-0
                  "
                />

                <span
                  className="
                    h-0.5 w-[18px] rounded-full
                    bg-[#101722]
                    transition-all duration-300
                    group-open:-translate-y-[7px]
                    group-open:-rotate-45
                  "
                />
              </summary>

              {/* MOBILE DROPDOWN */}
              <div
                className="
                  absolute right-0 top-[calc(100%+10px)]
                  w-[min(300px,calc(100vw-1.5rem))]
                  overflow-hidden rounded-[42px]
                  border border-slate-100
                  bg-white
                  shadow-[0_18px_45px_rgba(16,23,35,0.14)]
                "
              >
                <div className="border-b border-slate-100 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {navigationUi.mobileLabel}
                  </p>
                </div>

                <ul className="flex flex-col px-3 py-2">
                  {navigationItems.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`
                            group flex items-center justify-between
                            rounded-xl px-4 py-3.5
                            text-sm font-semibold
                            transition-all duration-300
                            ${
                              active
                                ? "bg-[#f21f27] text-white shadow-[0_6px_15px_rgba(242,31,39,0.18)]"
                                : "text-[#101722] hover:bg-red-50 hover:text-[#f21f27]"
                            }
                          `}
                        >
                          <span>{item.label}</span>

                          <span
                            className={`
                              text-lg leading-none transition-transform duration-300
                              ${
                                active
                                  ? "translate-x-0 text-white"
                                  : "text-[#f21f27] group-hover:translate-x-1"
                              }
                            `}
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* MOBILE QUOTE */}
                <div className="border-t border-slate-100 p-3">
                  <Link
                    href={navigationUi.quoteHref}
                    className="
                      flex w-full items-center justify-center
                      rounded-xl bg-[#f21f27]
                      px-4 py-3.5
                      text-sm font-bold text-white
                      transition-all duration-300
                      hover:bg-[#d9151c]
                      hover:shadow-[0_8px_18px_rgba(242,31,39,0.2)]
                    "
                  >
                    {navigationUi.quoteLabel}
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* 
        SPACE FOR FIXED NAVBAR
        This prevents page content from going underneath navbar.
      */}
     
    </>
  );
}