import Image from 'next/image'

interface TestimonialCardProps {
	content: string
	author: {
		name: string
		username: string
		avatar: string
	}
}

const TestimonialCard = ({ content, author }: TestimonialCardProps) => (
	<div className="relative border border-[#2C2D30] flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0F0F10] p-6">
		<p className="text-[#B9BBC1] text-base leading-[24px] mb-6">{content}</p>
		<div className="flex items-center gap-3">
			<div className="relative w-10 h-10 rounded-[1000px] overflow-hidden">
				<Image
					src={author.avatar}
					alt={author.name}
					fill
					className="object-cover object-center"
					unoptimized
				/>
			</div>
			<div className="flex flex-col">
				<p className="text-[#EBECED] text-lg font-medium">{author.name}</p>
				<p className="text-[#5A616E] text-base">@{author.username}</p>
			</div>
		</div>
	</div>
)

export default function TestimonialsSection() {
	const testimonials = [
		{
			content:
				"The 'EchoBass' headphones are so immersive, I missed a surprise party in my honor. Found out about it the next day",
			author: {
				name: 'Caroline Smith',
				username: 'carolinesmith',
				avatar: 'https://avatar.iran.liara.run/public/1',
			},
		},
		{
			content:
				"After using the 'GreenThumb' gardening kit, my plants are so healthy, they've started giving me life advice.",
			author: {
				name: 'Joshua Kim',
				username: 'joshuakim',
				avatar: 'https://avatar.iran.liara.run/public/2',
			},
		},
		{
			content:
				"I tried 'BrightSmile' toothpaste, and now my smile is so dazzling, it's been mistaken for a new light source.",
			author: {
				name: 'Laura Wilson',
				username: 'laurawilson',
				avatar: 'https://avatar.iran.liara.run/public/3',
			},
		},
		{
			content:
				"After getting the EasyNav GPS, I was so well-guided, I found myself at a long-lost sense of purpose. Turns out it was just the new cafe downtown, but I'm not complaining!",
			author: {
				name: 'Emily Robinson',
				username: 'emilyrobinson',
				avatar: 'https://avatar.iran.liara.run/public/4',
			},
		},
		{
			content:
				"I recently purchased a 'self-help' book from this store, and it's so motivating that even my furniture has started pursuing its dreams. My couch is currently applying for a degree in interior design, and the lamp is considering a career in enlightening people literally.",
			author: {
				name: 'Michael Thompson',
				username: 'michaelthompson',
				avatar: 'https://avatar.iran.liara.run/public/5',
			},
		},
		{
			content:
				"Ever since I tried Bob's Self-Tying Shoelaces, I've been tripping less in life and striding more into spontaneous dance-offs!",
			author: {
				name: 'Lisa Jackson',
				username: 'lisajackson',
				avatar: 'https://avatar.iran.liara.run/public/6',
			},
		},
		{
			content:
				"The 'SpeedyChef' food processor is so fast, I accidentally made dinner for the next three weeks.",
			author: {
				name: 'Kevin Brown',
				username: 'kevinbrown',
				avatar: 'https://avatar.iran.liara.run/public/7',
			},
		},
		{
			content:
				"Ever since I got the UltraClean vacuum, my cat thinks it's a new pet. She's named it 'Whirry.'",
			author: {
				name: 'Sarah Jenkins',
				username: 'sarahjenkins',
				avatar: 'https://avatar.iran.liara.run/public/8',
			},
		},
		{
			content:
				"The 'EchoBass' headphones are so immersive, I missed a surprise party in my honor. Found out about it the next day",
			author: {
				name: 'Caroline Smith',
				username: 'carolinesmith',
				avatar: 'https://avatar.iran.liara.run/public/1',
			},
		},
	]

	return (
		<section className="w-full py-24 bg-[#0F0F10]">
			<div className="mx-auto max-w-[1200px]">
				<h2 className="text-5xl font-semibold text-center text-white leading-[57.6px] tracking-tight mb-20">
					Our Users Love Us
				</h2>
				<div className="relative grid grid-cols-3 gap-6">
					{/* Left Column */}
					<div className="space-y-6 md:mt-32">
						<TestimonialCard {...testimonials[0]} />
						<TestimonialCard {...testimonials[3]} />
						<TestimonialCard {...testimonials[6]} />
					</div>
					{/* Middle Column - Starts lower */}
					<div className="space-y-6 md:mt-0">
						<TestimonialCard {...testimonials[1]} />
						<TestimonialCard {...testimonials[4]} />
						<TestimonialCard {...testimonials[7]} />
					</div>
					{/* Right Column */}
					<div className="space-y-6 mt-32">
						<TestimonialCard {...testimonials[2]} />
						<TestimonialCard {...testimonials[5]} />
						<TestimonialCard {...testimonials[8]} />
					</div>
				</div>
			</div>
		</section>
	)
}
