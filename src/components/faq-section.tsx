'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
	question: string
	answer: string
	isOpen: boolean
	onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
	<div className="border border-[#2C2D30] rounded-xl overflow-hidden bg-[#131316] transition-all duration-300 ease-in-out">
		<button
			onClick={onToggle}
			className="w-full px-6 py-4 flex items-center justify-between text-left">
			<span className="text-[#B9BBC1] text-base font-medium leading-6">
				{question}
			</span>
			<div
				className={cn(
					'transform transition-transform duration-300',
					isOpen ? 'rotate-180' : ''
				)}>
				{isOpen ? (
					<X className="w-5 h-5 text-[#404245]" />
				) : (
					<Plus className="w-5 h-5 text-[#404245]" />
				)}
			</div>
		</button>
		<div
			className={cn(
				'grid transition-all duration-300 ease-in-out',
				isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
			)}>
			<div className="overflow-hidden">
				<div className="px-6 pb-4">
					<p className="text-[#B9BBC1] text-base">{answer}</p>
				</div>
			</div>
		</div>
	</div>
)

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number>(0)

	const faqs = [
		{
			question: 'What is Lighting?',
			answer: 'Cut Through the Confusion: Explore Lighting FAQs',
		},
		{
			question: 'Who is Lightingfor?',
			answer:
				'Lighting is ideal for product teams of all sizes, from startups to established organizations.',
		},
		{
			question: 'Can I import my projects from another tool?',
			answer:
				'Currently, Linear does not offer direct import functionality from other tools. However, you can manually migrate your projects by creating tasks and issues in Linear.',
		},
		{
			question: 'What are projects and issues in Lighting?',
			answer:
				'Projects are used to organize your work at a high level, while issues represent individual tasks or bugs within a project.',
		},
		{
			question: 'Can I integrate Lightingwith other tools?',
			answer:
				'Yes, Lighting offers robust integration capabilities with popular development and productivity tools.',
		},
		{
			question: 'Is my data secure in Lighting?',
			answer:
				'We implement industry-standard security measures to protect your data, including encryption and regular security audits.',
		},
		{
			question: 'How do I upgrade my plan?',
			answer:
				'You can easily upgrade your plan through your account settings. Choose from our flexible pricing options that scale with your needs.',
		},
	]

	return (
		<section className="w-full py-24 bg-[#0F0F10]">
			<div className="mx-auto max-w-[1200px]">
				<h1 className="text-7xl font-semibold text-center text-white mb-4">
					FAQ
				</h1>
				<p className="text-2xl text-center text-[#EBECED] mb-16">
					Everything You Need to Know About Lighting.
				</p>
				<div className="space-y-4 w-[600px] mx-auto">
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={index === openIndex}
							onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
