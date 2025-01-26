'use client'

import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

const plans = [
	{
		name: 'Basic',
		yearlyPrice: 'Free',
		monthlyPrice: 'Free',
		description: 'Perfect for small teams or individuals starting out',
		features: ['Unlimited members', '50 public issues', 'Basic Kanban board'],
		buttonText: 'Get Started For Free',
		buttonVariant: 'ghost',
		buttonLink: '#',
	},
	{
		name: 'Pro',
		yearlyPrice: '$24.99',
		monthlyPrice: '$29.99',
		description: 'Ideal for growing teams and startups',
		features: [
			'All Basic Plan features, plus:',
			'250 private issues',
			'Customizable workflows',
			'Advanced search and filtering',
			'GitHub integration',
		],
		buttonText: 'Get Started',
		buttonVariant: 'default',
		buttonLink: '#',
		highlight: true,
	},
	{
		name: 'Enterprise',
		yearlyPrice: '$49.99',
		monthlyPrice: '$59.99',
		description: 'Designed for large organizations and complex projects',
		features: [
			'All Pro Plan features, plus:',
			'SSO (SAML)',
			'Priority support',
		],
		buttonText: 'Get Started',
		buttonVariant: 'ghost',
		buttonLink: '#',
	},
]

export default function PricingSection() {
	const [billingPeriod, setBillingPeriod] = useState<'yearly' | 'monthly'>(
		'yearly'
	)

	return (
		<section className="relative flex flex-col items-center justify-center bg-[#0F0F10] px-4 py-10 mb-10">
			<div className="mx-auto max-w-[1200px] text-center">
				<h2 className="mb-2 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#EBECED]">
					Plans for Every Team
				</h2>
				<p className="mb-8 text-lg leading-[27px] text-[#EBECED]">
					Scale with ease, emphasizes the ability to grow with Lighting.
				</p>

				<div className="mb-12 inline-flex items-center gap-2 rounded-lg bg-[#131316] p-1">
					<button
						onClick={() => setBillingPeriod('yearly')}
						className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
							billingPeriod === 'yearly'
								? 'bg-[#2C2D30] text-[#fff]'
								: 'text-[#5A616E] hover:text-[#fff]'
						}`}>
						Yearly Billing
					</button>
					<button
						onClick={() => setBillingPeriod('monthly')}
						className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
							billingPeriod === 'monthly'
								? 'bg-[#2C2D30] text-[#fff]'
								: 'text-[#5A616E] hover:text-[#fff]'
						}`}>
						Monthly Billing
					</button>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`relative flex flex-col rounded-2xl border border-[#2C2D30] bg-[#131316] p-8 ${
								plan.highlight ? 'h-[500px]' : 'h-[450px]'
							}`}>
							<div className="mb-8">
								<h3 className="mb-2 text-sm font-medium text-[#5A616E]">
									{plan.name}
								</h3>
								<div className="mb-2">
									<span className="text-4xl font-semibold text-[#fff]">
										{billingPeriod === 'yearly'
											? plan.yearlyPrice
											: plan.monthlyPrice}
									</span>
									{billingPeriod === 'yearly' &&
										plan.yearlyPrice !== 'Free' && (
											<span className="ml-2 text-sm text-[#46B235]">
												Save 20%
											</span>
										)}
								</div>
								<p className="text-[12px] leading-[18px] text-[#B9BBC1]">
									{plan.description}
								</p>
							</div>

							<ul className="mb-8 space-y-4">
								{plan.features.map((feature, index) => (
									<li key={index} className="flex items-center gap-2">
										<svg
											className={`h-6 w-6 ${
												plan.highlight ? 'text-[#46B235]' : 'text-[#404245]'
											}`}
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-lg leading-[27px] text-[#B9BBC1]">
											{feature}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-auto">
								<Button
									className={`group h-14 w-full rounded-lg text-base font-medium transition-all duration-300 ${
										plan.highlight
											? 'bg-[#46B235] text-[#0F0F10] hover:bg-[#46b235be]'
											: 'border border-[#2C2D30] bg-transparent text-[#fff] hover:bg-[#2C2D30]'
									}`}>
									<Link
										href={plan.buttonLink}
										className="flex items-center justify-center gap-2">
										{plan.buttonText}
										{plan.highlight && (
											<div className="flex h-[34px] w-[34px] items-center justify-center rounded-md bg-[#68CC58] transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
												<ArrowUpRight className="h-6 w-6" />
											</div>
										)}
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
