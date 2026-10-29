import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function ServiceHero() {
  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[380px] lg:h-[400px]">
      {/* Background Image */}
      <Image
        src="/blogs/blogsheroImages.png"
        alt="Services"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="pt-8">
          {/* Heading */}
          <h1 className="text-[48px] font-bold leading-none tracking-tight text-white sm:text-[58px] lg:text-[64px]">
            Services
          </h1>

          {/* Breadcrumb */}
          <div className="mt-7 flex items-center gap-3 text-sm sm:text-base">
            <Link
              href="/"
              className="font-medium text-[#f21f27] transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>

            <FaChevronRight
              className="text-[11px] text-white sm:text-xs"
              aria-hidden="true"
            />

            <span className="font-medium text-white">
              Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}