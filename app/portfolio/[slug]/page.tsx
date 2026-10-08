import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Phone, TrendingUp } from "lucide-react";
import {
	pageHeroes,
	portfolioContent,
	portfolioDetailsPage,
	portfolioSlug,
	serviceDetailsPage,
	siteData,
} from "@/app/data/site-data";

const projects = portfolioContent.items.map((project) => ({
	...project,
	slug: portfolioSlug(project.title),
}));

type Project = (typeof projects)[number];

export function generateStaticParams() {
	return projects.map(({ slug }) => ({ slug }));
}

export default async function PortfolioDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<PortfolioBanner project={project} />
			<main className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
				<div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.82fr)] lg:gap-12">
					<article className="min-w-0">
						<SectionEyebrow>{portfolioDetailsPage.overviewLabel}</SectionEyebrow>
						<h2 className="mt-3 text-[42px] font-bold text-[#101722] sm:text-4xl">{project.title}</h2>
						<p className="mt-4 text-[15px] leading-7 text-slate-600">{project.description}</p>
						<p className="mt-4 text-[15px] leading-7 text-slate-600">{portfolioDetailsPage.secondaryDescription}</p>

						<div className="relative mt-7 aspect-[1.75/1] overflow-hidden rounded-lg bg-slate-100">
							<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 66vw" priority />
						</div>

						<section className="mt-9" aria-labelledby="project-process-heading">
							<SectionEyebrow>{portfolioDetailsPage.processLabel}</SectionEyebrow>
							<h2 id="project-process-heading" className="mt-3 text-[42px] font-bold text-[#101722] sm:text-[42px]">{portfolioDetailsPage.processTitle}</h2>
							<p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{portfolioDetailsPage.processDescription}</p>
							<ol className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
								{portfolioDetailsPage.steps.map((step, index) => (
									<li key={step} className="relative rounded-md border border-slate-200 px-4 pb-4 pt-5">
										<span className="absolute -top-3 left-4 flex size-7 items-center justify-center rounded-full bg-[#f21f27] text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
										<h3 className="mt-2 text-sm font-bold leading-5 text-[#101722]">{step}</h3>
									</li>
								))}
							</ol>
						</section>

						<section className="mt-8 rounded-lg bg-slate-50 p-5 sm:p-7" aria-labelledby="project-results-heading">
							<SectionEyebrow>{portfolioDetailsPage.resultsLabel}</SectionEyebrow>
							<h2 id="project-results-heading" className="mt-3 text-[42px] font-bold text-[#101722]">{portfolioDetailsPage.resultsTitle}</h2>
							<div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
								{project.stats.map((stat) => (
									<div key={stat.label} className="flex gap-3">
										<span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f21f27] text-white"><TrendingUp size={21} aria-hidden="true" /></span>
										<span>
											<h3 className="text-2xl font-bold leading-tight text-[#101722]">{stat.value}</h3>
											<p className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</p>
										</span>
									</div>
								))}
							</div>
						</section>
					</article>

					<aside className="space-y-6">
						<div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
							<SectionEyebrow>{portfolioDetailsPage.exploreLabel}</SectionEyebrow>
							<h2 className="mt-3 text-[42px] font-bold text-[#101722]">{portfolioDetailsPage.projectsLabel}</h2>
							<nav className="mt-4" aria-label="All projects">
								<ul className="divide-y divide-slate-200">
									{projects.map((item) => (
										<li key={item.slug}>
											<Link href={`/portfolio/${item.slug}`} aria-current={item.slug === slug ? "page" : undefined} className={`flex min-h-12 items-center justify-between gap-3 px-3 text-sm font-medium transition ${item.slug === slug ? "rounded-md bg-[#f21f27] text-white" : "text-slate-700 hover:text-[#f21f27]"}`}>
												{item.title}<ChevronRight size={17} className="shrink-0" aria-hidden="true" />
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
								<span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#f21f27]"><Phone size={20} aria-hidden="true" /></span>
								<span className="min-w-0 leading-5">
									<span className="block">{siteData.footer.contact.phone}</span>
									<span className="mt-1 block text-xs font-normal text-slate-500">{siteData.footer.contact.hours}</span>
								</span>
							</a>
							<Link href="/getquote" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#f21f27] px-5 text-sm font-bold text-white transition hover:bg-[#d9151c]">
								{portfolioDetailsPage.quoteLabel} <ArrowRight size={17} aria-hidden="true" />
							</Link>
						</div>
					</aside>
				</div>
			</main>
		</>
	);
}

function PortfolioBanner({ project }: { project: Project }) {
	return (
		<section className="relative flex min-h-[280px] items-center overflow-hidden bg-[#101722] sm:min-h-[340px]">
			<Image src={pageHeroes.portfolio.image} alt={pageHeroes.portfolio.imageAlt} fill priority className="object-cover object-center" sizes="100vw" />
			<div className="absolute inset-0 bg-black/70" />
			<div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
				<h1 className="max-w-[820px] text-4xl font-bold leading-tight text-white sm:text-[42px] lg:text-6xl">{project.title}</h1>
				<nav className="mt-5 flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb">
					<Link href="/" className="text-[#ff4048] transition hover:text-white">{portfolioDetailsPage.homeLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<Link href="/portfolio" className="text-[#ff4048] transition hover:text-white">{portfolioDetailsPage.breadcrumbLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<span className="text-white" aria-current="page">{project.title}</span>
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
