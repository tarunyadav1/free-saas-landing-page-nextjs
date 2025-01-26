'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {
	return (
		<header className="fixed top-2 z-50 w-full">
			<div className="mx-auto flex h-[72px] max-w-[1200px] bg-[#0F0F10] border max-h-[60px] border-[#2C2D30]  items-center justify-between px-2 lg:px-3 rounded-md">
				<Link href="/" className="flex items-center justify-center gap-2">
					<Image
						src="/images/logo.svg"
						alt="Logo"
						width={46}
						height={16}
						className="w-10 h-10"
					/>
					<span className="text-md font-medium text-[#EBECED] ">LIGHTING</span>
				</Link>
				<nav className="hidden md:block">
					<ul className="flex items-center gap-6">
						<li>
							<Link
								href="#benefits"
								className="text-base font-medium text-[#EBECED] hover:text-[#EBECED]/80">
								Benefits
							</Link>
						</li>
						<li>
							<Link
								href="#how-it-works"
								className="text-base font-medium text-[#EBECED] hover:text-[#EBECED]/80">
								How it works
							</Link>
						</li>
						<li>
							<Link
								href="#faq"
								className="text-base font-medium text-[#EBECED] hover:text-[#EBECED]/80">
								FAQ
							</Link>
						</li>
						<li>
							<Link
								href="#pricing"
								className="text-base font-medium text-[#EBECED] hover:text-[#EBECED]/80">
								Pricing
							</Link>
						</li>
					</ul>
				</nav>
				<Button className="hidden w-[217.94px] h-11 rounded-lg bg-[#46B235] px-4 text-sm font-medium text-[#0F0F10] hover:bg-[#46b235a4] md:inline-flex items-center justify-center group  transition-transform duration-300">
					<Link
						className="text-[#0F0F10] text-sm font-medium leading-5"
						href="/template">
						Get template for FREE
					</Link>
					<div className="w-[30px] h-[30px] font-bold bg-[#68CC58] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-1">
						<ArrowUpRight className="w-full h-full" />
					</div>
				</Button>
				<Button variant="outline" size="icon" className="md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-6 w-6">
						<line x1="4" x2="20" y1="12" y2="12" />
						<line x1="4" x2="20" y1="6" y2="6" />
						<line x1="4" x2="20" y1="18" y2="18" />
					</svg>
					<span className="sr-only">Toggle menu</span>
				</Button>
			</div>
		</header>
	)
}
