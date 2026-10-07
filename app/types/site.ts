export type SocialKey = "facebook" | "x" | "linkedin" | "instagram" | "youtube";
export type HeroStatKey = "users" | "file" | "trophy";
export type ContentIconKey =
  | "users"
  | "support"
  | "comments"
  | "settings"
  | "chart"
  | "trophy"
  | "megaphone"
  | "pointer"
  | "pen"
  | "search"
  | "file"
   | "link"
  | "target"
  | "gauge"
  | "trending"
  | "check"
  | "message"
  | "clock"
  | "car"
  | "coffee";
export type ServiceDetailIconKey =
  | "users"
  | "pointer"
  | "chart"
  | "pen"
  | "search"
  | "file"
  | "link"
  | "settings"
  | "target"
  | "gauge"
  | "trending"
  | "check";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderSocialItem {
  name: string;
  key: SocialKey;
  href: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterSocialItem {
  label: string;
  key: SocialKey;
  href: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  hours: string;
  replyText: string;
}

export interface HeroStat {
  amount: string;
  label: string;
  key: HeroStatKey;
}

export interface ImageContent {
  image: string;
  imageAlt: string;
}

export interface AboutUsProps {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  title?: string;
  highlightTitle?: string;
  description?: string[];
  clientCount?: string;
}

export interface AboutContent extends ImageContent {
  eyebrow: string;
  title: string;
  highlightTitle: string;
  description: string[];
  clientCount: string;
  clientLabel: string;
  avatarCount: number;
  ctaLabel: string;
  ctaHref: string;
  features?: { title: string; description: string; icon: "users" | "support" }[];
}

export interface PageHeroContent {
  title: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  parentLabel?: string;
  parentHref?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: "comments" | "settings" | "chart" | "trophy";
}

export interface ServiceCard {
  id?: string;
  title: string;
  description: string;
  more?: string;
  image: string;
  alt: string;
  icon: "chart" | "megaphone" | "pointer" | "pen";
  href: string;
}

export interface PortfolioProject {
  category: string;
  title: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  icon: "search" | "users" | "pointer" | "pen";
  description: string;
  secondary: string;
  processTitle: string;
  processDescription: string;
  steps: string[];
  features: { title: string; description: string; icon: ServiceDetailIconKey }[];
}

export interface FormFieldContent {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SiteData {
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  header: {
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    social: HeaderSocialItem[];
  };
  footer: {
    logoSrc: string;
    description: string;
    quickLinks: FooterLinkItem[];
    serviceLinks: FooterLinkItem[];
    socialLinks: FooterSocialItem[];
    contact: ContactDetails;
    legalLinks: FooterLinkItem[];
    labels: {
      quickLinks: string;
      services: string;
      contact: string;
      homeAriaLabel: string;
      logoAlt: string;
      socialAriaLabel: string;
      legalAriaLabel: string;
      copyright: string;
    };
  };
  navigationUi: {
    logoSrc: string;
    logoAlt: string;
    homeAriaLabel: string;
    mainAriaLabel: string;
    breadcrumbAriaLabel: string;
    mobileMenuAriaLabel: string;
    mobileLabel: string;
    quoteLabel: string;
    quoteHref: string;
  };
  hero: {
    badge: string;
    title: string[];
    image: string;
    imageAlt: string;
    description: string;
    quoteLabel: string;
    quoteHref: string;
    videoLabel: string;
    videoHref: string;
    stats: HeroStat[];
  };
  pageHeroes: Record<string, PageHeroContent>;
  about: {
    page: AboutContent;
    home: AboutContent;
  };
  process: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    arrowImage: string;
    steps: ProcessStep[];
  };
  homeServices: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    items: ServiceCard[];
    readMoreLabel: string;
    previousLabel: string;
    nextLabel: string;
    jumpLabel: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    readMoreLabel: string;
    items: ServiceCard[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    items: PortfolioProject[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    items: Testimonial[];
  };
  blogsSection: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    readMoreLabel: string;
  };
  blogArticles: BlogArticle[];
  serviceDetails: ServiceDetail[];
  serviceDetailsPage: {
    overviewLabel: string;
    processLabel: string;
    featuresLabel: string;
    exploreLabel: string;
    servicesLabel: string;
    needHelpLabel: string;
    helpDescription: string;
    quoteLabel: string;
    homeLabel: string;
    breadcrumbLabel: string;
    featureHeadingPrefix: string;
    featureHeadingSuffix: string;
    bannerImageAlt: string;
    bannerImage: string;
  };
  blogDetailsPage: {
    breadcrumbLabel: string;
    relatedLabel: string;
    readMoreLabel: string;
  };
  contactPage: {
    form: {
      title: string;
      description: string;
      fields: FormFieldContent[];
      subjectLabel: string;
      subjectPlaceholder: string;
      subjects: SelectOption[];
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
    };
    information: {
      title: string;
      description: string;
      officeLabel: string;
      phoneLabel: string;
      emailLabel: string;
      followLabel: string;
    };
  };
  quotePage: {
    form: {
      title: string;
      description: string;
      fields: FormFieldContent[];
      serviceLabel: string;
      servicePlaceholder: string;
      services: SelectOption[];
      budgetLabel: string;
      budgetPlaceholder: string;
      budgets: SelectOption[];
      detailsLabel: string;
      detailsPlaceholder: string;
      submitLabel: string;
      asideImage: string;
      asideTitle: string;
      asideDescription: string;
      benefits: { title: string; description: string; icon: "message" | "file" | "clock" }[];
    };
  };
  location: {
    mapUrl: string;
    directionsUrl: string;
    mapTitle: string;
    businessName: string;
    address: string;
    directionsLabel: string;
    officeTitle: string;
    officeImage: string;
    officeImageAlt: string;
    description: string;
    amenities: { title: string; description: string; icon: "car" | "coffee" }[];
  };
}
