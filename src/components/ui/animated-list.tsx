'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, {
	ComponentPropsWithoutRef,
	useEffect,
	useMemo,
	useState,
} from 'react'

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1, originY: 0 },
		exit: { scale: 0, opacity: 0 },
		transition: { type: 'spring', stiffness: 350, damping: 40 },
	}

	return (
		<motion.div {...animations} layout className="mx-auto w-full">
			{children}
		</motion.div>
	)
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode
	delay?: number
	infinite?: boolean
}

export const AnimatedList = React.memo(
	({
		children,
		className,
		delay = 1000,
		infinite = false,
		...props
	}: AnimatedListProps) => {
		const [index, setIndex] = useState(0)
		const childrenArray = useMemo(
			() => React.Children.toArray(children),
			[children]
		)

		useEffect(() => {
			const timeout = setTimeout(() => {
				if (index < childrenArray.length - 1) {
					setIndex((prevIndex) => prevIndex + 1)
				} else if (infinite) {
					setIndex(0)
				}
			}, delay)

			return () => clearTimeout(timeout)
		}, [index, delay, childrenArray.length, infinite])

		const itemsToShow = useMemo(() => {
			const result = childrenArray.slice(0, index + 1).reverse()
			return result
		}, [index, childrenArray])

		return (
			<div
				className={`flex flex-col items-center gap-4 ${className}`}
				{...props}>
				<AnimatePresence>
					{itemsToShow.map((item) => (
						<AnimatedListItem key={(item as React.ReactElement).key}>
							{item}
						</AnimatedListItem>
					))}
				</AnimatePresence>
			</div>
		)
	}
)

AnimatedList.displayName = 'AnimatedList'
