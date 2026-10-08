import categoryData from "./category.json";
import type { SiteData } from "@/app/types/site";

const { common } = categoryData;
const sections = categoryData.categories.SEO.sections;
const { navLinks, ...headerUi } = sections.Header.variants.SEOHeader1;
const { blogs, ...blogsSection } = sections.Blogs.variants.SEOBlogs1;

export const siteData = {
	metadata: common.metadata,
	navigation: navLinks,
	header: sections.TopBar.variants.SEOTopBar1,
	footer: common.Footer,
	navigationUi: headerUi,
	hero: sections.Hero.variants.SEOHero1,
	pageHeroes: {
		about: common.aboutBreadcrumb,
		blogs: common.blogBreadcrumb,
		contact: common.contactBreadcrumb,
		quote: common.quoteBreadcrumb,
		portfolio: common.portfolioBreadcrumb,
		blogDetails: common.blogDetailBreadcrumb,
	},
	about: {
		home: sections.AboutUs.variants.SEOAboutUs1,
		page: sections.AboutUs.variants.SEOAboutUs2,
	},
	process: sections.Process.variants.SEOProcess1,
	homeServices: sections.Services.variants.SEOServices1,
	servicesPage: sections.Services.variants.SEOServices2,
	portfolio: sections.Portfolio.variants.SEOPortfolio1,
	testimonials: sections.Testimonials.variants.SEOTestimonials1,
	blogsSection,
	blogArticles: blogs,
	serviceDetails: Object.values(sections.ServiceDetail.variants),
	serviceDetailsPage: common.serviceDetailPage,
	portfolioDetailsPage: common.portfolioDetailPage,
	blogDetailsPage: common.blogDetailPage,
	contactPage: sections.Contact.variants.SEOContact1,
	quotePage: sections.Quote.variants.SEOQuote1,
	location: sections.Location.variants.SEOLocation1,
} as SiteData;

export const navigationItems = siteData.navigation;
export const navigationUi = siteData.navigationUi;
export const headerSocialLinks = siteData.header.social;
export const footerQuickLinks = siteData.footer.quickLinks;
export const footerServiceLinks = siteData.footer.serviceLinks;
export const footerSocialLinks = siteData.footer.socialLinks;
export const footerContact = siteData.footer.contact;
export const footerLegalLinks = siteData.footer.legalLinks;
export const heroBadge = siteData.hero.badge;
export const heroTitle = siteData.hero.title;
export const heroDescription = siteData.hero.description;
export const heroStats = siteData.hero.stats;
export const pageHeroes = siteData.pageHeroes;
export const aboutContent = siteData.about;
export const processContent = siteData.process;
export const homeServicesContent = siteData.homeServices;
export const servicesPageContent = siteData.servicesPage;
export const portfolioContent = siteData.portfolio;
export const portfolioSlug = (title: string) =>
	title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const testimonialsContent = siteData.testimonials;
export const blogsSectionContent = siteData.blogsSection;
export const articles = siteData.blogArticles;
export const serviceDetails = siteData.serviceDetails;
export const serviceDetailsPage = siteData.serviceDetailsPage;
export const portfolioDetailsPage = siteData.portfolioDetailsPage;
export const blogDetailsPage = siteData.blogDetailsPage;
export const contactPageContent = siteData.contactPage;
export const quotePageContent = siteData.quotePage;
export const locationContent = siteData.location;
