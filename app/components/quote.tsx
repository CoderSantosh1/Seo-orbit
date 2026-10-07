import Image from "next/image";
import {
	ChevronDown,
	ChevronRight,
	Clock3,
	FileText,
	MessageSquareText,
} from "lucide-react";
import { quotePageContent } from "@/app/data/site-data";

const benefitsIconMap = {
	message: MessageSquareText,
	file: FileText,
	clock: Clock3,
} as const;

const fieldClassName = "mt-2 h-[48px] w-full rounded-md border border-slate-200 bg-white px-3.5 text-sm text-[#101722] outline-none transition placeholder:text-slate-400 focus:border-[#f21f27] focus:ring-1 focus:ring-[#f21f27] sm:h-[50px] sm:px-4";

function SelectField({
	id,
	label,
	children,
	required = false,
}: {
	id: string;
	label: string;
	children: React.ReactNode;
	required?: boolean;
}) {
	return (
		<div>
			<label htmlFor={id} className="block text-sm font-semibold text-[#101722]">
				{label}{required && <span className="text-[#f21f27]"> *</span>}
			</label>
			<div className="relative mt-2">
				<select id={id} name={id} required={required} defaultValue="" className={`${fieldClassName} appearance-none pr-10`}>
					{children}
				</select>
				<ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#101722]" aria-hidden="true" />
			</div>
		</div>
	);
}

export default function QuoteRequest() {
	return (
		<section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
			<div className="mx-auto max-w-[1240px]">
				<div className="grid items-stretch gap-4 lg:grid-cols-[1.8fr_1fr]">
					<div className="rounded-md border border-slate-200 bg-white px-5 py-6 shadow-[0_2px_10px_rgba(16,23,35,0.04)] sm:px-7 sm:py-8 lg:px-7">
						<div className="h-[3px] w-12 bg-[#f21f27]" />
						<h2 className="mt-3 text-[28px] font-bold tracking-tight text-[#101722] sm:text-[32px]">{quotePageContent.form.title}</h2>
						<p className="mt-2 max-w-[660px] text-sm leading-6 text-[#536176] sm:text-[15px]">
							  {quotePageContent.form.description}
						</p>

						<form className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
							{quotePageContent.form.fields.map((field) => (
								<div key={field.id}>
									<label htmlFor={field.id} className="block text-sm font-semibold text-[#101722]">
										{field.label}{field.required && <span className="text-[#f21f27]"> *</span>}
									</label>
									<input className={fieldClassName} id={field.id} name={field.name} type={field.type} autoComplete={field.name} placeholder={field.placeholder} required={field.required} />
								</div>
							))}
							<SelectField id="quote-service" label={quotePageContent.form.serviceLabel} required>
								<option value="" disabled>{quotePageContent.form.servicePlaceholder}</option>
								{quotePageContent.form.services.map((service) => (
									<option key={service.value} value={service.value}>{service.label}</option>
								))}
							</SelectField>
							<div className="sm:col-span-2">
								<SelectField id="quote-budget" label={quotePageContent.form.budgetLabel}>
									<option value="" disabled>{quotePageContent.form.budgetPlaceholder}</option>
									{quotePageContent.form.budgets.map((budget) => (
										<option key={budget.value} value={budget.value}>{budget.label}</option>
									))}
								</SelectField>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="quote-details" className="block text-sm font-semibold text-[#101722]">{quotePageContent.form.detailsLabel} <span className="text-[#f21f27]">*</span></label>
								<textarea id="quote-details" name="details" rows={4} placeholder={quotePageContent.form.detailsPlaceholder} required className="mt-2 min-h-[100px] w-full resize-y rounded-md border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#101722] outline-none transition placeholder:text-slate-400 focus:border-[#f21f27] focus:ring-1 focus:ring-[#f21f27] sm:px-4" />
							</div>
							<button type="submit" className="inline-flex min-h-12 w-fit min-w-[220px] items-center justify-center gap-5 rounded-full bg-[#f21f27] px-7 text-sm font-bold text-white shadow-[0_8px_20px_rgba(242,31,39,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d9151c]">
								{quotePageContent.form.submitLabel} <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
							</button>
						</form>
					</div>

					<aside className="relative flex min-h-[610px] flex-col overflow-hidden rounded-md bg-[#062033] px-6 pt-7 text-white sm:px-8">
						<div className="relative z-10">
							<div className="h-[3px] w-12 bg-[#f21f27]" />
							<h2 className="mt-3 text-[26px] font-bold leading-tight sm:text-[30px]">{quotePageContent.form.asideTitle}</h2>
							<p className="mt-4 text-sm leading-6 text-slate-200 sm:text-[15px]">
								{quotePageContent.form.asideDescription}
							</p>
							<div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">
								{quotePageContent.form.benefits.map(({ title, description, icon }) => {
									const Icon = benefitsIconMap[icon];

									return (
									<div key={title} className="flex items-center gap-4">
										<span className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-[#f21f27] text-white">
											<Icon size={23} aria-hidden="true" />
										</span>
										<span>
											<strong className="block text-base font-bold">{title}</strong>
											<span className="mt-1 block text-sm leading-5 text-slate-200">{description}</span>
										</span>
									</div>
									);
								})}
							</div>
						</div>

						<div className="relative mt-auto h-[175px] pt-9 sm:h-[205px]">
							<span className="absolute inset-x-[-10%] top-5 z-10 h-12 -rotate-2 rounded-[50%] border-t-[10px] border-[#f21f27]" aria-hidden="true" />
							<span className="absolute inset-x-[-10%] top-8 z-10 h-12 -rotate-2 rounded-[50%] border-t-[8px] border-white" aria-hidden="true" />
							  <Image src={quotePageContent.form.asideImage} alt="A business owner planning a digital growth strategy" fill className="object-cover object-center" sizes="(max-width: 1023px) 100vw, 35vw" />
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}