import Image from "next/image";
import { ArrowUpRight, CarFront, Coffee, MapPin } from "lucide-react";
import { locationContent } from "@/app/data/site-data";

const amenityIconMap = {
	car: CarFront,
	coffee: Coffee,
} as const;

export default function ContactLocation() {
	return (
		<section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
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

				<div className="mt-6 grid items-stretch gap-5 lg:grid-cols-[1.2fr_0.8fr]">
					<div className="relative min-h-[230px] overflow-hidden rounded-xl bg-slate-100 sm:min-h-[280px]">
						<Image
							src={locationContent.officeImage}
							alt={locationContent.officeImageAlt}
							width={1200}
							height={700}
							className="absolute inset-0 size-full object-cover"
							sizes="(max-width: 1023px) 100vw, 60vw"
						/>
					</div>

					<div className="flex flex-col justify-center rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
						<h2 className="text-[42px] font-bold text-[#101722] sm:text-[28px]">{locationContent.officeTitle}</h2>
						<p className="mt-2 text-sm font-medium leading-6 text-slate-700">
							{locationContent.address}
						</p>
						<p className="mt-2 text-sm leading-6 text-slate-600">
							{locationContent.description}
						</p>
						<div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5">
							{locationContent.amenities.map(({ title, description, icon }) => {
								const Icon = amenityIconMap[icon];

								return (
									<div key={title} className="flex items-start gap-3">
										<Icon className="mt-0.5 size-6 shrink-0 text-[#f21f27]" aria-hidden="true" />
										<span>
											<strong className="block text-sm font-bold text-[#101722]">{title}</strong>
											<span className="mt-1 block text-xs leading-5 text-slate-600">{description}</span>
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}