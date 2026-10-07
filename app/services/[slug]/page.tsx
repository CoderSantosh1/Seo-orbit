import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	ArrowRight,
	BarChart3,
	Check,
	ChevronRight,
	FileText,
	Gauge,
	Link2,
	MousePointerClick,
	PenTool,
	Search,
	Settings2,
	Target,
	TrendingUp,
	Users,
} from "lucide-react";
import { serviceDetails, serviceDetailsPage, siteData } from "@/app/data/site-data";
import type { ServiceDetailIconKey } from "@/app/types/site";

const iconMap = {
	users: Users,
	pointer: MousePointerClick,
	chart: BarChart3,
	pen: PenTool,
	search: Search,
	file: FileText,
	link: Link2,
	settings: Settings2,
	target: Target,
	gauge: Gauge,
	trending: TrendingUp,
	check: Check,
} satisfies Record<ServiceDetailIconKey, typeof Search>;

const services = serviceDetails.map((service) => ({
	...service,
	icon: iconMap[service.icon],
	features: service.features.map((feature) => ({
		...feature,
		icon: iconMap[feature.icon],
	})),
}));

type Service = (typeof services)[number];

const serviceNavigation = services.map(({ slug, title }) => ({ slug, title }));

export function generateStaticParams() {
	return services.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<>
			<ServiceBanner service={service} />
			<main className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
				<div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.82fr)] lg:gap-12">
					<article className="min-w-0">
						<SectionEyebrow>{serviceDetailsPage.overviewLabel}</SectionEyebrow>
						<h2 className="mt-3 text-[42px] font-bold text-[#101722] sm:text-4xl">{service.title}</h2>
						<p className="mt-4 text-[15px] leading-7 text-slate-600">{service.description}</p>
						<p className="mt-4 text-[15px] leading-7 text-slate-600">{service.secondary}</p>

						<div className="relative mt-7 aspect-[1.75/1] overflow-hidden rounded-lg bg-slate-100">
							<Image src={service.image} alt={`${service.title} strategy and analytics`} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 66vw" priority />
						</div>

						<section className="mt-9" aria-labelledby="service-process-heading">
							<SectionEyebrow>{serviceDetailsPage.processLabel}</SectionEyebrow>
							<h2 id="service-process-heading" className="mt-3 text-[42px] font-bold text-[#101722] sm:text-[42px]">{service.processTitle}</h2>
							<p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{service.processDescription}</p>
							<ol className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
								{service.steps.map((step, index) => (
									<li key={step} className="relative rounded-md border border-slate-200 px-4 pb-4 pt-5">
										<span className="absolute -top-3 left-4 flex size-7 items-center justify-center rounded-full bg-[#f21f27] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
										<h3 className="mt-2 text-sm font-bold leading-5 text-[#101722]">{step}</h3>
									</li>
								))}
							</ol>
						</section>

						<section className="mt-8 rounded-lg bg-slate-50 p-5 sm:p-7" aria-labelledby="service-features-heading">
							<SectionEyebrow>{serviceDetailsPage.featuresLabel}</SectionEyebrow>
							<h2 id="service-features-heading" className="mt-3 text-[42px] font-bold text-[#101722]">{serviceDetailsPage.featureHeadingPrefix} {service.shortTitle} {serviceDetailsPage.featureHeadingSuffix}</h2>
							<div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
								{service.features.map(({ title, description, icon: Icon }) => (
									<div key={title} className="flex gap-3">
										<span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f21f27] text-white"><Icon size={21} aria-hidden="true" /></span>
										<span>
											<h3 className="text-sm font-bold text-[#101722]">{title}</h3>
											<p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>
										</span>
									</div>
								))}
							</div>
						</section>
					</article>

					<aside className="space-y-6">
						<div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
							<SectionEyebrow>{serviceDetailsPage.exploreLabel}</SectionEyebrow>
							<h2 className="mt-3 text-[42px] font-bold text-[#101722]">{serviceDetailsPage.servicesLabel}</h2>
							<nav className="mt-4" aria-label="All services">
								<ul className="divide-y divide-slate-200">
									{serviceNavigation.map((item) => (
										<li key={item.slug}>
											<Link href={`/services/${item.slug}`} aria-current={item.slug === slug ? "page" : undefined} className={`flex min-h-12 items-center justify-between gap-3 px-3 text-sm font-medium transition ${item.slug === slug ? "rounded-md bg-[#f21f27] text-white" : "text-slate-700 hover:text-[#f21f27]"}`}>
												{item.title}<ChevronRight size={17} aria-hidden="true" />
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>

						<div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
							<SectionEyebrow>{serviceDetailsPage.needHelpLabel}</SectionEyebrow>
							<h2 className="mt-3 text-[42px] font-bold text-[#101722]">{serviceDetailsPage.needHelpLabel}</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">{serviceDetailsPage.helpDescription}</p>
							<a href={`tel:${siteData.footer.contact.phone.replace(/\s/g, "")}`} className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#101722] hover:text-[#f21f27]">
								<span className="flex size-11 items-center justify-center rounded-full bg-red-50 text-[#f21f27]"><service.icon size={20} aria-hidden="true" /></span>
								<span>{siteData.footer.contact.phone}<span className="mt-1 block text-xs font-normal text-slate-500">{siteData.footer.contact.hours}</span></span>
							</a>
							<Link href="/getquote" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#f21f27] px-5 text-sm font-bold text-white transition hover:bg-[#d9151c]">
								{serviceDetailsPage.quoteLabel} <ArrowRight size={17} aria-hidden="true" />
							</Link>
						</div>
					</aside>
				</div>
			</main>
		</>
	);
}

function ServiceBanner({ service }: { service: Service }) {
	return (
		<section className="relative flex min-h-[280px] items-center overflow-hidden bg-[#101722] sm:min-h-[340px]">
			<Image src={serviceDetailsPage.bannerImage} alt={serviceDetailsPage.bannerImageAlt} fill priority className="object-cover object-center" sizes="100vw" />
			<div className="absolute inset-0 bg-black/70" />
			<div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
				<h1 className="max-w-[820px] text-4xl font-bold leading-tight text-white sm:text-[42px] lg:text-6xl">{service.title}</h1>
				<nav className="mt-5 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
					<Link href="/" className="text-[#ff4048] transition hover:text-white">{serviceDetailsPage.homeLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<Link href="/servicess" className="text-[#ff4048] transition hover:text-white">{serviceDetailsPage.breadcrumbLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<span className="text-white" aria-current="page">{service.title}</span>
				</nav>
			</div>
		</section>
	);
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-3">
			<span className="h-[3px] w-10 bg-[#f21f27]" aria-hidden="true" />
			<span className="text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27]">{children}</span>
		</div>
	);
}