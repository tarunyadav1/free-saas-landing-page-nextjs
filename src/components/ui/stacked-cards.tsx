import Image from 'next/image'
import { cn } from '@/lib/utils'

export function StackedCards() {
	return (
		<div className="relative w-[400px] h-[400px]">
			{[0, 1, 2].map((index) => (
				<div
					key={index}
					className={cn(
						'absolute inset-0 transition-all duration-4000 ease-in-out',
						'hover:translate-y-[-8px] border-2 border-red-500',
						index === 0 && 'transform translate-y-4 rotate-[-12deg]',
						index === 1 && 'transform translate-y-8 rotate-[-3deg]',
						index === 2 && 'transform translate-y-0 rotate-[0deg]'
					)}
					style={{
						animation: `float ${
							2 + index * 0.5
						}s ease-in-out infinite alternate`,
					}}>
					<Image
						src="/images/modern-teams.svg"
						alt={`Circuit Card ${index + 1}`}
						width={400}
						height={400}
						className="object-contain drop-shadow-2xl"
					/>
				</div>
			))}
		</div>
	)
}
