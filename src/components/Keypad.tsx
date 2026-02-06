import { motion } from 'framer-motion'
import { buttons } from '../data/buttons'

type KeypadProps = {
	activeOperator: string | null
	onPress: (value: string) => void
}

export default function Keypad({ activeOperator, onPress }: KeypadProps) {
	return (
		<div className='grid grid-cols-4 gap-3'>
			{buttons.map(button => {
				const isActive =
					button.kind === 'operator' && activeOperator === button.value
				const base =
					'rounded-2xl px-4 py-4 text-base font-semibold shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
				const colorClass =
					button.kind === 'number'
						? 'bg-white/10 text-white hover:bg-white/20'
						: button.kind === 'operator'
							? 'bg-sky-500/20 text-sky-100 hover:bg-sky-500/30'
							: button.kind === 'equals'
								? 'bg-emerald-500/80 text-white hover:bg-emerald-500/90'
								: 'bg-rose-500/80 text-white hover:bg-rose-500/90'
				return (
					<motion.button
						key={button.id}
						onClick={() => onPress(button.value)}
						whileHover={{
							y: -2,
							boxShadow: '0 12px 24px -18px rgba(0,0,0,0.7)',
						}}
						whileTap={{
							scale: 0.95,
							boxShadow: '0 8px 16px -12px rgba(0,0,0,0.6)',
						}}
						animate={
							button.kind === 'operator'
								? {
										backgroundColor: isActive
											? 'rgba(56, 189, 248, 0.5)'
											: 'rgba(14, 116, 144, 0.2)',
										boxShadow: isActive
											? '0 12px 24px -18px rgba(56, 189, 248, 0.7)'
											: '0 8px 18px -14px rgba(0,0,0,0.6)',
									}
								: { boxShadow: '0 8px 18px -14px rgba(0,0,0,0.6)' }
						}
						transition={{ duration: 0.2 }}
						className={`${base} ${colorClass} ${button.span ? 'col-span-2' : ''}`}
					>
						{button.label}
					</motion.button>
				)
			})}
		</div>
	)
}
