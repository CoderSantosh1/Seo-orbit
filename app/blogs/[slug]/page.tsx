import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight } from "lucide-react";
import PageBanner from "@/app/components/PageBanner";
import { articles, blogDetailsPage, pageHeroes } from "@/app/data/site-data";

const bodyTextClass = "text-base leading-8 text-slate-600";

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
			<PageBanner content={pageHeroes.blogDetails} />

			<main className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
				<article className="mx-auto max-w-[1060px]">
					<div className="mx-auto max-w-[760px]">
						<div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
							<Image src={article.image} alt={article.alt} fill priority className="object-cover" sizes="(max-width: 800px) 100vw, 760px" />
						</div>
						<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
							<span className="rounded bg-[#f21f27] px-2.5 py-1 text-xs font-bold text-white">{article.category}</span>
							<span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-[#f21f27]" aria-hidden="true" /><time>{article.date}</time></span>
						</div>
						<h2 className="mt-4 text-3xl font-bold leading-tight text-[#101722] sm:text-4xl">{article.title}</h2>
						<p className="mt-4 text-lg leading-8 text-slate-700">{article.description}</p>
						<p className={`mt-6 ${bodyTextClass}`}>{article.intro}</p>
						{article.sections.map((section) => (
							<section key={section.heading} className="mt-8">
								<h3 className="text-2xl font-bold leading-snug text-[#101722]">{section.heading}</h3>
								<p className={`mt-3 ${bodyTextClass}`}>{section.body}</p>
							</section>
						))}
					</div>
				</article>

				<section className="mx-auto mt-12 max-w-[1060px] border-t border-slate-200 pt-8 sm:mt-14" aria-labelledby="related-blogs-heading">
					<h2 id="related-blogs-heading" className="text-2xl font-bold text-[#101722] sm:text-3xl">{blogDetailsPage.relatedLabel}</h2>
					<div className="mt-5 grid gap-5 sm:grid-cols-2">
						{relatedArticles.map((related) => (
							<article key={related.slug} className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_6px_24px_rgba(16,23,35,0.07)]">
								<Link href={`/blogs/${related.slug}`} className="block">
									<div className="relative aspect-[2/1] bg-slate-100">
										<Image src={related.image} alt={related.alt} fill className="object-cover transition-transform duration-300 hover:scale-[1.02]" sizes="(max-width: 639px) 100vw, 50vw" />
									</div>
									<div className="p-4 sm:p-5">
										<span className="inline-flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={14} className="text-[#f21f27]" aria-hidden="true" />{related.date}</span>
										<h3 className="mt-2 text-base font-bold leading-6 text-[#101722]">{related.title}</h3>
										<span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#f21f27]">{blogDetailsPage.readMoreLabel} <ChevronRight size={16} aria-hidden="true" /></span>
									</div>
								</Link>
							</article>
						))}
					</div>
				</section>
			</main>
		</>
	);
}