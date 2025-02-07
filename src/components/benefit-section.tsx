'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { OrbitingCirclesDemo } from './orbitin-circle'
import { Globe } from '@/components/ui/globe'
import { FileTreeDemo } from './File-tree'

const tabs = [
	{
		id: 'compliance',
		label: 'Compliance First',
	},
	{
		id: 'security',
		label: 'Safe & Secure',
	},
	{
		id: 'analytics',
		label: 'Dashboards & Analytics',
	},
]

export default function BenefitSection() {
	const [activeTab, setActiveTab] = useState('compliance')

	return (
		<section className="w-full py-24 bg-[#0F0F10]">
			<div className="mx-auto max-w-[1200px] ">
				<div className="text-center mb-12">
					<h2
						className="text-5xl font-semibold text-[#fff] leading-[57.6px] tracking-tight
 mb-6">
						Empower Your Product
						<br />
						Team
					</h2>
					<p className="text-lg text-[#EBECED] font-medium max-w-[800px] mx-auto leading-7">
						Focus. Speed. Quality. Elevate your product development with the
						<br />
						streamlined tools and proven practices of world-class teams.
					</p>
				</div>

				<div className="flex flex-col items-center mb-6">
					<div className="flex space-x-4 p-2 mb-12 w-[1200px] justify-center items-start gap-[16px] flex-shrink-0 rounded-[13px] bg-[#131316]">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									'px-6 py-3 rounded-lg text-base font-medium transition-all',
									activeTab === tab.id
										? 'bg-[#0F0F10] text-[#fff] shadow-lg'
										: 'text-[#5A616E]/60  hover:bg-[#242427]'
								)}>
								{tab.label}
							</button>
						))}
					</div>

					<div className="w-[1200px] relative h-[460px]">
						<div
							className={`w-full transition-all duration-500 ease-in-out absolute inset-0 ${
								activeTab === 'compliance'
									? 'opacity-100 translate-y-0 z-10'
									: 'opacity-0 translate-y-4 pointer-events-none z-0'
							}`}>
							<ComplianceTab />
						</div>
						<div
							className={`w-full transition-all duration-500 ease-in-out absolute inset-0 ${
								activeTab === 'security'
									? 'opacity-100 translate-y-0 z-10'
									: 'opacity-0 translate-y-4 pointer-events-none z-0'
							}`}>
							<SecurityTab />
						</div>
						<div
							className={`w-full transition-all duration-500 ease-in-out absolute inset-0 ${
								activeTab === 'analytics'
									? 'opacity-100 translate-y-0 z-10'
									: 'opacity-0 translate-y-4 pointer-events-none z-0'
							}`}>
							<AnalyticsTab />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const ComplianceTab = () => {
	return (
		<div className="relative flex justify-center items-center w-full py-4 max-w-[1200px] h-[460px] aspect-square rounded-[13px] bg-[#1A1C1E]">
			<OrbitingCirclesDemo />
		</div>
	)
}

const SecurityTab = () => {
	return (
		<div className="dark w-[1200px] flex justify-center items-center h-[460px] rounded-[13px] bg-[#1A1C1E] py-4">
			<div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl border-2 border-[#404245] shadow-[0px_0px_8px_0px_rgba(255,255,255,0.09)_inset]">
				<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
					Globe
				</span>
				<Globe className="top-28" />
				<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
			</div>
		</div>
	)
}

const AnalyticsTab = () => {
	return (
		<div className=" w-[1200px] flex justify-center items-center h-[380px] rounded-[13px] bg-[#1A1C1E]">
			<FileTreeDemo />
		</div>
	)
}
