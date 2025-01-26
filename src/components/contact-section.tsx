'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
	return (
		<section className="w-full py-20 bg-[#0F0F10] border-b border-[#1A1C1E]">
			<div className="mx-auto max-w-[1200px] text-center">
				<h2 className="text-5xl font-semibold text-white mb-2 leading-[57.6px] tracking-tight">
					Still Have Questions?
				</h2>
				<p className="text-[#80858F] leading-[27px] text-lg mb-10">
					We're here to help! Let us know what you need.
				</p>
				<Link
					href="mailto:support@lighting.dev"
					className="inline-flex items-center gap-2 bg-[#46B235] text-[#0F0F10] px-6 py-3 rounded-lg font-medium text-base hover:bg-[#46b235be] transition-colors group">
					Send us an email
					<div className="w-[34px] h-[34px] bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
						<ArrowUpRight className="w-5 h-5" />
					</div>
				</Link>
			</div>
		</section>
	)
}
