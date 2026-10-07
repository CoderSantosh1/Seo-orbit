import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { navigationItems, navigationUi } from "@/app/data/site-data";
import type { PageHeroContent } from "@/app/types/site";

export default function PageBanner({ content }: { content: PageHeroContent }) {
  const homeLink = navigationItems.find((item) => item.href === "/");

  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1240px] flex-col justify-center px-6 sm:px-10 lg:px-0">
        <h1 className="text-[42px] font-bold text-white sm:text-6xl">
          {content.title}
        </h1>
        <nav className="mt-5 flex items-center gap-2 text-sm" aria-label={navigationUi.breadcrumbAriaLabel}>
          <Link
            href={homeLink?.href ?? "/"}
            className="text-[#f21f27] transition-colors hover:text-white"
          >
            {homeLink?.label}
          </Link>
          <ChevronRight size={18} className="text-white" aria-hidden="true" />
          {content.parentLabel && content.parentHref && (
            <>
              <Link
                href={content.parentHref}
                className="text-[#f21f27] transition-colors hover:text-white"
              >
                {content.parentLabel}
              </Link>
              <ChevronRight size={18} className="text-white" aria-hidden="true" />
            </>
          )}
          <span className="text-white" aria-current="page">
            {content.breadcrumb}
          </span>
        </nav>
      </div>
    </section>
  );
}
