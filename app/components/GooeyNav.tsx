"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  initialActiveIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: string[];
}

export default function GooeyNav({
  items,
  initialActiveIndex = 0,
}: GooeyNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const currentIndex = items.findIndex((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }

      return pathname.startsWith(item.href);
    });

    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname, items]);

  const updateIndicator = (index: number) => {
    const item = itemRefs.current[index];
    const container = navRef.current;

    if (!item || !container) return;

    const itemRect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicatorStyle({
      width: itemRect.width,
      height: itemRect.height,
      transform: `translateX(${itemRect.left - containerRect.left}px)`,
    });
  };

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      updateIndicator(activeIndex);
    });

    const handleResize = () => {
      updateIndicator(activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, items]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div ref={navRef} className="relative flex items-center">
      <div
        className=" absolute left-0 top-0 z-0 rounded-full bg-[#f21f27] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={indicatorStyle}
      />

      <div className="relative z-10 flex items-center gap-1 rounded-full ">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={item.href}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              href={item.href}
              onClick={() => handleClick(index)}
              className={`relative z-10 flex min-h-11 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-300 xl:px-5 xl:text-base ${
                isActive
                  ? "text-white"
                  : "text-[#101722] hover:text-[#f21f27]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}