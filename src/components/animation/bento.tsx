import { FileTextIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Marquee } from '@/components/ui/marquee'

const files = [
	{
		name: 'feedback.json',
		body: 'Collected user feedback and feature requests to drive our next iteration of improvements.',
	},
	{
		name: 'metrics.csv',
		body: 'Performance metrics and analytics data showing key areas for optimization and enhancement.',
	},
	{
		name: 'changelog.md',
		body: 'Detailed documentation of all improvements, bug fixes, and feature enhancements across iterations.',
	},
	{
		name: 'roadmap.yaml',
		body: 'Strategic planning document outlining upcoming improvements and feature developments.',
	},
	{
		name: 'tests.spec.ts',
		body: 'Comprehensive test suite ensuring quality and reliability with each iteration.',
	},
]

const features = [
	{
		Icon: FileTextIcon,
		name: 'Iterate & Improve',
		description:
			'Continuously evolve your product with data-driven improvements.',
		href: '#',
		cta: 'Learn more',
		className: 'col-span-3 lg:col-span-1',
		background: (
			<Marquee
				pauseOnHover
				className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] ">
				{files.map((f, idx) => (
					<figure
						key={idx}
						className={cn(
							'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
							'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
							'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
							'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
						)}>
						<div className="flex flex-row items-center gap-2">
							<div className="flex flex-col">
								<figcaption className="text-sm font-medium dark:text-white ">
									{f.name}
								</figcaption>
							</div>
						</div>
						<blockquote className="mt-2 text-xs">{f.body}</blockquote>
					</figure>
				))}
			</Marquee>
		),
	},
]

export function BentoDemo() {
	return (
		<BentoGrid className="w-full flex justify-center items-center h-full">
			{features.map((feature, idx) => (
				<BentoCard key={idx} {...feature} className="w-[80%] h-full" />
			))}
		</BentoGrid>
	)
}
