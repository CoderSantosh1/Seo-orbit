import { ArrowUpRight, MapPin } from "lucide-react";
import { locationContent } from "@/app/data/site-data";

export default function ContactLocation() {
	return (
		<section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
			<div className="mx-auto max-w-[1240px]">
				<div className="relative h-[190px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-[210px]">
					<iframe
						title={locationContent.mapTitle}
						src={locationContent.mapUrl}
						loading="lazy"
						referrerPolicy="no-referrer"
						className="absolute inset-0 size-full border-0"
					/>
					<div className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-lg bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:max-w-[340px] sm:px-5">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#f21f27]">
							<MapPin size={21} aria-hidden="true" />
						</span>
						<div className="min-w-0">
							<strong className="block truncate text-sm font-bold text-[#101722]">{locationContent.businessName}</strong>
							<p className="mt-0.5 text-xs text-slate-600">{locationContent.address}</p>
							<a href={locationContent.directionsUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#f21f27] hover:underline">
								{locationContent.directionsLabel} <ArrowUpRight size={13} aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}