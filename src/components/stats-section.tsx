import { cn } from '@/lib/utils'
import { Users, Globe, SmilePlus, TrendingUp } from 'lucide-react'
import Image from 'next/image'

interface StatItemProps {
	icon: React.ReactNode
	value: string
	label: string
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
	<div className="relative border border-[#2C2D30] w-[279px] h-[250px] flex flex-col  items-start justify-between overflow-hidden rounded-2xl bg-[#131316] p-6 transition-all shadow-[0px_0px_42px_0px_rgba(0,0,0,0.63)]">
		<div className="mb-4 rounded-full">{icon}</div>
		<div>
			<h3 className="mb-1 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#fff]">
				{value}
			</h3>
			<p className="text-sm text-[#B9BBC1]">{label}</p>
		</div>
	</div>
)

export default function StatsSection() {
	const stats = [
		{
			icon: (
				<Image
					src="/images/monthly-active-user.svg"
					alt="Users"
					width={48}
					height={48}
				/>
			),
			value: '2.5M',
			label: 'Monthly Active Users',
		},
		{
			icon: (
				<Image
					src="/images/country.svg"
					alt="Countries Available"
					width={48}
					height={48}
				/>
			),
			value: '190',
			label: 'Countries Available',
		},
		{
			icon: (
				<Image
					src="/images/customer-sat.svg"
					alt="Customer Satisfaction"
					width={48}
					height={48}
				/>
			),
			value: '98%',
			label: 'Customer Satisfaction Rate',
		},
		{
			icon: (
				<Image
					src="/images/growth.svg"
					alt="YOY Growth"
					width={48}
					height={48}
				/>
			),
			value: '150%',
			label: 'YOY Growth',
		},
	]

	return (
		<section className="relative max-w-[1200px] mx-auto  py-20">
			<div className="mx-auto max-w-7xl">
				<div className="mb-20 text-center">
					<h2 className="mb-3 text-5xl font-semibold tracking-tight leading-[57.6px] text-[#fff]">
						How Companies Succeed
						<br />
						Using Our Product
					</h2>
					<p className="mx-auto opacity-80 max-w-2xl text-lg leading-[27px] text-[#EBECED]">
						The path to success starts here. See how companies are winning with
						<br />
						our product.
					</p>
				</div>
				<div className="flex flex-wrap justify-between px-5">
					{stats.map((stat, index) => (
						<StatItem key={index} {...stat} />
					))}
				</div>
			</div>
		</section>
	)
}
