import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
	return (
		<section className="relative flex flex-col min-h-screen items-center justify-center bg-[#0F0F10] px-4 mb-20">
			<div className="relative z-10 mx-auto max-w-[1200px] text-center">
				<div className="mb-7 inline-flex items-center">
					<span className="mr-2 h-[8px] w-[14px] rounded-full bg-[#46B235]"></span>
					<span className="text-base text-[#FFF]">BETA 1.5 AVAILABLE NOW</span>
				</div>

				<h1 className="mb-2 text-7xl font-semibold  tracking-tight leading-[86.4px] text-[#EBECED] md:text-7xl">
					Build Better Products
					<br />
					10x Faster
				</h1>

				<p className="mb-8 text-xl text-[#B9BBC1]">
					Faster Iterations, Better Products: Simplify your workflow and get
					shipping quickly.
				</p>

				<Button className="h-14 rounded-lg bg-[#46B235] px-6 text-lg font-medium text-[#0F0F10] hover:bg-[#46b235be] inline-flex items-center justify-center group transition-transform duration-300">
					<Link href="#" className="text-[#0F0F10] font-medium leading-5 mr-2">
						Get Started
					</Link>
					<div className="w-[34px] h-[34px] font-bold bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
						<ArrowUpRight className="w-6 h-6" />
					</div>
				</Button>

				<div className="absolute -bottom-60 -left-48 -z-10">
					<img
						src="/images/dotted-pattern.png"
						alt="Dotted Pattern"
						width={600}
						height={600}
						className="w-full h-full"
					/>
				</div>
			</div>

			<div className="mt-10 z-10">
				<Image
					src="/images/image.png"
					alt="Hero Image"
					width={765 + 165}
					height={644}
					className="w-full h-full"
				/>
			</div>
		</section>
	)
}
