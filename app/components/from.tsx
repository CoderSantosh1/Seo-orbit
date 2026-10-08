import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerContact, footerSocialLinks, contactPageContent } from "@/app/data/site-data";

const socialIconMap = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
} as const;

export default function ContactUsForm() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.8fr_1fr]">

          {/* =====================================================
              LEFT - CONTACT FORM
          ====================================================== */}
          <div className="rounded-md border border-[#e5e7eb] bg-white px-6 py-7 shadow-[0_2px_10px_rgba(16,23,35,0.04)] sm:px-8 sm:py-8 lg:px-7">

            {/* Heading */}
            <div>
              <div className="h-[3px] w-12 bg-[#f21f27]" />

              <h2 className="mt-3 text-[42px] font-bold tracking-tight text-[#101722] sm:text-[32px]">
                {contactPageContent.form.title}
              </h2>

              <p className="mt-2 text-sm text-[#536176] sm:text-[15px]">
                {contactPageContent.form.description}
              </p>
            </div>

            {/* Form */}
            <form className="mt-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {contactPageContent.form.fields.map((field) => (
                  <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-semibold text-[#101722]"
                  >
                    {field.label}{field.required && <span className="text-[#f21f27]"> *</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="mt-2 h-[50px] w-full rounded-md border border-[#dfe4ea] bg-white px-4 text-sm text-[#101722] outline-none placeholder:text-[#a8b1bf] transition-all focus:border-[#f21f27] focus:ring-1 focus:ring-[#f21f27]"
                  />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div className="mt-5 max-w-[335px]">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#101722]"
                >
                    {contactPageContent.form.subjectLabel} <span className="text-[#f21f27]">*</span>
                </label>

                <div className="relative mt-2">
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="h-[50px] w-full appearance-none rounded-md border border-[#dfe4ea] bg-white px-4 pr-10 text-sm text-[#a8b1bf] outline-none transition-all focus:border-[#f21f27] focus:ring-1 focus:ring-[#f21f27]"
                  >
                    <option value="" disabled>
                      {contactPageContent.form.subjectPlaceholder}
                    </option>
                    {contactPageContent.form.subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>{subject.label}</option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#101722]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#101722]"
                >
                  {contactPageContent.form.messageLabel} <span className="text-[#f21f27]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={contactPageContent.form.messagePlaceholder}
                  className="mt-2 min-h-[100px] w-full resize-none rounded-md border border-[#dfe4ea] bg-white px-4 py-3 text-sm text-[#101722] outline-none placeholder:text-[#a8b1bf] transition-all focus:border-[#f21f27] focus:ring-1 focus:ring-[#f21f27]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 inline-flex h-[55px] min-w-[240px] items-center justify-center gap-5 rounded-full bg-[#f21f27] px-7 text-base font-bold text-white shadow-[0_8px_20px_rgba(242,31,39,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9151c]"
              >
                <span>{contactPageContent.form.submitLabel}</span>

                <ChevronRight size={21} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* =====================================================
              RIGHT - CONTACT INFORMATION
          ====================================================== */}
          <div className="relative overflow-hidden rounded-md bg-[#062033] px-6 py-7 text-white sm:px-7">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -bottom-24 -right-28 h-[360px] w-[360px] rounded-full border-[25px] border-[#f21f27]/10" />

            <div className="pointer-events-none absolute -bottom-16 -right-20 h-[270px] w-[270px] rounded-full border-[18px] border-[#f21f27]/10" />

            <div className="relative z-10">

              {/* Heading */}
              <div className="h-[3px] w-12 bg-[#f21f27]" />

              <h2 className="mt-3 text-2xl font-bold sm:text-[26px]">
                {contactPageContent.information.title}
              </h2>

              <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#e2e8ef]">
                {contactPageContent.information.description}
              </p>

              {/* Contact items */}
              <div className="mt-6 space-y-5">

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f21f27]">
                    <MapPin size={22} strokeWidth={2.5} />
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-bold">
                      {contactPageContent.information.officeLabel}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#e2e8ef]">
                      {footerContact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f21f27]">
                    <Phone size={20} fill="white" strokeWidth={2} />
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-bold">
                      {contactPageContent.information.phoneLabel}
                    </h3>

                    <a
                      href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-[#e2e8ef] transition-colors hover:text-white"
                    >
                      {footerContact.phone}
                    </a>

                    <p className="mt-0.5 text-sm text-[#e2e8ef]">
                      {footerContact.hours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f21f27]">
                    <Mail size={21} strokeWidth={2.5} />
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-bold">
                      {contactPageContent.information.emailLabel}
                    </h3>

                    <a
                      href={`mailto:${footerContact.email}`}
                      className="mt-1 block text-sm text-[#e2e8ef] transition-colors hover:text-white"
                    >
                      {footerContact.email}
                    </a>

                    <p className="mt-0.5 text-sm text-[#e2e8ef]">
                      {footerContact.replyText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-white/15" />

              {/* Social */}
              <div>
                <h3 className="text-base font-bold">
                  {contactPageContent.information.followLabel}
                </h3>

                <div className="mt-3 flex gap-3">
                  {footerSocialLinks.map((social) => {
                    const Icon = socialIconMap[social.key];

                    return (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#f21f27]"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}