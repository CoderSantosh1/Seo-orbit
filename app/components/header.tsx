import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { headerSocialLinks, siteData } from "@/app/data/site-data";

const socialIconMap = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
} as const;

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-[1001] h-14 bg-[#101722] text-white sm:h-10">
      <div className="mx-auto flex h-full w-[calc(100%-2rem)] max-w-[1240px] items-center justify-between text-xs sm:w-[calc(100%-3rem)] sm:text-sm">
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-5">
          <a
            className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#ff5359]"
            href={siteData.header.phoneHref}
          >
            <span className="text-base text-[#f21f27]" aria-hidden="true">
              ☎
            </span>
            <span>{siteData.header.phone}</span>
          </a>

          <span
            className="hidden h-5 w-px bg-white/40 sm:block"
            aria-hidden="true"
          />

          <a
            className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#ff5359]"
            href={siteData.header.emailHref}
          >
            <span
              className="text-lg leading-none text-[#f21f27]"
              aria-hidden="true"
            >
              ✉
            </span>
            <span>{siteData.header.email}</span>
          </a>
        </div>

        <div
          className="hidden items-center gap-5 lg:flex"
          aria-label={siteData.footer.labels.socialAriaLabel}
        >
          {headerSocialLinks.map((network) => {
            const Icon = socialIconMap[network.key];

            return (
              <a
                key={network.name}
                href={network.href}
                aria-label={network.name}
                className="text-[17px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-[#ff5359]"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}