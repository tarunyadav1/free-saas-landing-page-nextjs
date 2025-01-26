import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

interface CustomButtonProps {
	href: string
	children: React.ReactNode
	className?: string
	variant?: 'default' | 'wide'
}

export function CustomButton({
	href,
	children,
	className = '',
	variant = 'default',
}: CustomButtonProps) {
	const baseStyles =
		'h-11 rounded-lg bg-[#46B235] px-4 text-sm font-medium text-[#0F0F10] hover:bg-[#46b235a4] inline-flex items-center justify-center group transition-transform duration-300'
	const widthStyles = variant === 'wide' ? 'w-[217.94px]' : 'w-[140px]'

	return (
		<Button className={`${baseStyles} ${widthStyles} ${className}`}>
			<Link
				className="text-[#0F0F10] text-sm font-medium leading-5"
				href={href}>
				{children}
			</Link>
			<div className="ml-2 w-[30px] h-[30px] font-bold bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
				<ArrowUpRight className="w-5 h-5" />
			</div>
		</Button>
	)
}
