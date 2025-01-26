import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InteractiveGridPattern } from './ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'

export default function CTASection() {
	return (
		<section className="mx-auto relative overflow-hidden flex max-w-[1200px] min-h-[307.59px] items-center justify-center bg-[#0F0F10] px-4 mt-12 border-b border-[#1A1C1E] mb-36">
			<div className=" z-10 mx-auto max-w-[1200px] text-center">
				<h2 className="mb-10 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#fff]">
					Ready to Rock and Roll?
				</h2>

				<Button className="h-14 rounded-lg bg-[#46B235] px-6 text-lg font-medium text-[#0F0F10] hover:bg-[#46b235be] inline-flex items-center justify-center group transition-transform duration-300">
					<Link href="#" className="text-[#0F0F10]  font-medium leading-5 mr-2">
						Try Lighting for Free
					</Link>
					<div className="w-[34px] h-[34px] font-bold bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
						<ArrowUpRight className="w-6 h-6" />
					</div>
				</Button>
			</div>
			<InteractiveGridPattern
				className={cn(
					'[mask-image:radial-gradient(500px_circle_at_center,#0F0F10,transparent)]',
					'inset-x-72 inset-y-[-30%] h-[200%] skew-y-12'
				)}
			/>
		</section>
	)
}
