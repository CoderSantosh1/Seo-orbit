import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, ChevronRight, Phone } from "lucide-react";
import { articles, blogDetailsPage, pageHeroes, serviceDetailsPage, siteData } from "@/app/data/site-data";

type Article = (typeof articles)[number];

const bodyTextClass = "text-[15px] leading-7 text-slate-600";

export function generateStaticParams() {
	return articles.map(({ slug }) => ({ slug }));
}

export default async function BlogDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = articles.find((item) => item.slug === slug);

	if (!article) {
		notFound();
	}

	const relatedArticles = articles.filter((item) => item.slug !== article.slug);

	return (
		<>
			<BlogBanner article={article} />
			<main className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
				<div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.82fr)] lg:gap-12">
					<article className="min-w-0">
						<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
							<SectionEyebrow>{article.category}</SectionEyebrow>
							<span className="inline-flex items-center gap-2 text-sm text-slate-500"><CalendarDays size={16} className="text-[#f21f27]" aria-hidden="true" /><time>{article.date}</time></span>
						</div>
						<h2 className="mt-3 text-[42px] font-bold leading-tight text-[#101722] sm:text-4xl">{article.title}</h2>
						<p className={`mt-4 ${bodyTextClass}`}>{article.description}</p>

						<div className="relative mt-7 aspect-[1.75/1] overflow-hidden rounded-lg bg-slate-100">
							<Image src={article.image} alt={article.alt} fill priority className="object-cover" sizes="(max-width: 1023px) 100vw, 66vw" />
						</div>

						<p className={`mt-7 ${bodyTextClass}`}>{article.intro}</p>
						{article.sections.map((section) => (
							<section key={section.heading} className="mt-8">
								<h3 className="text-2xl font-bold leading-snug text-[#101722]">{section.heading}</h3>
								<p className={`mt-3 ${bodyTextClass}`}>{section.body}</p>
							</section>
						))}
					</article>

					<aside className="space-y-6">
						<div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
							<SectionEyebrow>{blogDetailsPage.exploreLabel}</SectionEyebrow>
							<h2 className="mt-3 text-[42px] font-bold text-[#101722]">{blogDetailsPage.relatedLabel}</h2>
							<ul className="mt-4 divide-y divide-slate-200">
								{relatedArticles.map((related) => (
									<li key={related.slug}>
										<Link href={`/blogs/${related.slug}`} className="group flex items-center gap-3 py-3">
											<span className="relative size-[72px] shrink-0 overflow-hidden rounded-md bg-slate-100">
												<Image src={related.image} alt={related.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="72px" />
											</span>
											<span className="min-w-0">
												<span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><CalendarDays size={13} className="text-[#f21f27]" aria-hidden="true" />{related.date}</span>
												<span className="mt-1 block text-sm font-bold leading-5 text-[#101722] transition group-hover:text-[#f21f27]">{related.title}</span>
											</span>
										</Link>
									</li>
								))}
							</ul>
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
								{serviceDetailsPage.quoteLabel} <ArrowRight size={17} aria-hidden="true" />
							</Link>
						</div>
					</aside>
				</div>
			</main>
		</>
	);
}

function BlogBanner({ article }: { article: Article }) {
	return (
		<section className="relative flex min-h-[280px] items-center overflow-hidden bg-[#101722] sm:min-h-[340px]">
			<Image src={pageHeroes.blogDetails.image} alt={pageHeroes.blogDetails.imageAlt} fill priority className="object-cover object-center" sizes="100vw" />
			<div className="absolute inset-0 bg-black/70" />
			<div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
				<h1 className="max-w-[820px] text-4xl font-bold leading-tight text-white sm:text-[42px] lg:text-6xl">{article.title}</h1>
				<nav className="mt-5 flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb">
					<Link href="/" className="text-[#ff4048] transition hover:text-white">{blogDetailsPage.homeLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<Link href="/blogs" className="text-[#ff4048] transition hover:text-white">{blogDetailsPage.parentLabel}</Link>
					<ChevronRight size={16} className="text-white" aria-hidden="true" />
					<span className="text-white" aria-current="page">{article.title}</span>
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
