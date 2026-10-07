import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import PageBanner from "@/app/components/PageBanner";
import { pageHeroes, portfolioContent, portfolioSlug } from "@/app/data/site-data";

const projects = portfolioContent.items;

export function generateStaticParams() {
	return projects.map((project) => ({ slug: portfolioSlug(project.title) }));
}

export default async function PortfolioDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = projects.find((item) => portfolioSlug(item.title) === slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<PageBanner
				content={{
					...pageHeroes.portfolio,
					title: project.title,
					breadcrumb: project.title,
					parentLabel: pageHeroes.portfolio.breadcrumb,
					parentHref: "/portfolio",
				}}
			/>
			<main className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
				<div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.82fr)] lg:gap-12">
					<article className="min-w-0">
						<p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27]">{project.category}</p>
						<h2 className="mt-3 text-3xl font-bold leading-tight text-[#101722] sm:text-4xl">{project.title}</h2>
						<p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>

						<div className="relative mt-7 aspect-[1.75/1] overflow-hidden rounded-lg bg-slate-100">
							<Image src={project.image} alt={project.title} fill priority className="object-cover" sizes="(max-width: 1023px) 100vw, 66vw" />
						</div>

						<section className="mt-9" aria-labelledby="project-results-heading">
							<div className="flex items-center gap-3">
								<span className="h-[3px] w-10 bg-[#f21f27]" aria-hidden="true" />
								<span className="text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27]">Project Results</span>
							</div>
							<h2 id="project-results-heading" className="mt-3 text-2xl font-bold text-[#101722]">A measurable difference</h2>
							<dl className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
								{project.stats.map((stat) => (
									<div key={stat.label} className="border-t border-slate-200 pt-4">
										<dt className="text-sm text-slate-600">{stat.label}</dt>
										<dd className="mt-1 text-2xl font-bold text-[#101722]">{stat.value}</dd>
									</div>
								))}
							</dl>
						</section>
					</article>

					<aside>
						<div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
							<div className="flex items-center gap-3">
								<span className="h-[3px] w-10 bg-[#f21f27]" aria-hidden="true" />
								<span className="text-xs font-bold uppercase tracking-[0.12em] text-[#f21f27]">Project Snapshot</span>
							</div>
							<h2 className="mt-3 text-2xl font-bold text-[#101722]">{project.category}</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
							<Link href="/getquote" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#f21f27] px-5 text-sm font-bold text-white transition hover:bg-[#d9151c]">
								Discuss a similar project <ArrowRight size={17} aria-hidden="true" />
							</Link>
						</div>
						<Link href="/portfolio" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#101722] transition hover:text-[#f21f27]">
							<ChevronRight size={16} className="rotate-180" aria-hidden="true" /> Back to Portfolio
						</Link>
					</aside>
				</div>
			</main>
		</>
	);
}