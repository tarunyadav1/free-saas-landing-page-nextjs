'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

interface FolderSuccessProps {
	className?: string
}

const FolderSuccess: FC<FolderSuccessProps> = ({ className }) => {
	return (
		<motion.div
			className={`relative rounded-2xl bg-[#1C1C1C] p-8 ${className}`}>
			<div className="flex flex-col items-center justify-center gap-4">
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.8,
					}}
					className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2A2A]">
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'linear',
						}}
						className="h-6 w-6">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="text-white">
							<path
								d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</motion.div>
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="text-center text-sm font-medium text-white/90">
					Sync Across All Devices
				</motion.p>
			</div>
		</motion.div>
	)
}

export default FolderSuccess
