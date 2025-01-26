import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
	return (
		<footer className="w-full bg-[#0F0F10] border-t border-[#1A1C1E] max-w-[1200px] mx-auto">
			<div className="mx-auto max-w-[1200px] px-2 lg:px-3 py-8">
				<div className="flex flex-col gap-4 py-8">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Image
								src="/images/logo.svg"
								alt="Logo"
								width={46}
								height={16}
								className="w-10 h-10"
							/>
							<span className="text-md font-medium text-[#EBECED]">
								LIGHTING
							</span>
						</div>
						<nav className="hidden md:block">
							<ul className="flex items-center gap-6">
								<li>
									<Link
										href="#benefits"
										className="text-base font-medium text-[#fff] hover:text-[#fff]/80">
										Benefits
									</Link>
								</li>
								<li>
									<Link
										href="#how-it-works"
										className="text-base font-medium text-[#fff] hover:text-[#fff]/80">
										How it works
									</Link>
								</li>
								<li>
									<Link
										href="#faq"
										className="text-base font-medium text-[#fff] hover:text-[#fff]/80">
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="#pricing"
										className="text-base font-medium text-[#fff] hover:text-[#fff]/80">
										Pricing
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex flex-col gap-2 ">
						<p className="text-[#CFD1D5] text-base leading-6 ">
							Modern product development. Simplified. Explore Lighting.
						</p>
						<p className="text-[#fff] text-base leading-6">
							Build with ❤️ by
							<a
								href="https://www.rocketmvp.io/"
								target="_blank"
								className="ml-1 text-[#46B235]">
								Rocket MVP
							</a>
						</p>
					</div>
				</div>
				<div className="mt-8 flex justify-between border-t border-[#1A1C1E] pt-8">
					<p className="text-base text-[#CFD1D5]">
						Copyright © 2025. All Rights Reserved
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="https://x.com/tarunyadav9761"
							target="_blank"
							className="text-sm text-[#EBECED] hover:text-[#EBECED]/80">
							<Image
								src="/images/twitter.svg"
								alt="Twitter"
								width={16}
								height={16}
								className="w-4 h-4 text-[#fff] "
							/>
						</Link>
						<Link
							href="https://cal.com/tarunyadav/15min"
							target="_blank"
							className="text-sm text-[#EBECED] hover:text-[#EBECED]/80">
							Cal.com
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
