'use client'

import Image from 'next/image'

export default function UsedCompanies() {
	return (
		<section className="w-full bg-[#0F0F10] py-10 mt-16">
			<div className="max-w-[1200px] mx-auto px-4">
				<h2 className="text-center text-white text-xl mb-5">
					Powering the world&apos;s best teams
				</h2>

				<div className="relative overflow-hidden">
					<div className="flex animate-scroll gap-8 items-center">
						{/* First set of logos */}
						<div className="flex min-w-full gap-8 items-center justify-around">
							<Image
								src="/images/acme.svg"
								alt="Acme Inc"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/haven.svg"
								alt="Haven"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/terra.svg"
								alt="Terra"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/vital.svg"
								alt="Vital"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/elastic.png"
								alt="Elastic.ai"
								width={140}
								height={50}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/echo.svg"
								alt="Echo"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
						</div>
						{/* Duplicate set for seamless scrolling */}
						<div className="flex min-w-full gap-8 items-center justify-around">
							<Image
								src="/images/haven.svg"
								alt="Haven"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/terra.svg"
								alt="Terra"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/vital.svg"
								alt="Vital"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/elastic.png"
								alt="Elastic.ai"
								width={160}
								height={60}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
							<Image
								src="/images/echo.svg"
								alt="Echo"
								width={102}
								height={47}
								className="opacity-50 hover:opacity-100 transition-opacity"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
