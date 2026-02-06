import { AnimatePresence, motion } from 'framer-motion'

type DisplayProps = {
	chain: string
	value: string
	pulse: boolean
}

export default function Display({ chain, value, pulse }: DisplayProps) {
	return (
		<div className='mb-6 rounded-2xl border border-white/20 bg-black/30 px-4 py-5 shadow-inner'>
			<p className='text-xs uppercase tracking-[0.3em] text-slate-300/80'>
				Calculator
			</p>
			<p className='mt-3 min-h-5 text-right text-sm text-slate-300/90'>
				{chain}
			</p>
			<motion.div
				className='mt-2 flex min-h-12 items-end justify-end text-right text-3xl font-semibold text-white'
				animate={pulse ? { scale: [1, 1.05, 1] } : { scale: 1 }}
				transition={{ duration: 0.35 }}
			>
				<AnimatePresence mode='popLayout'>
					<motion.span
						key={value}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2 }}
					>
						{value}
					</motion.span>
				</AnimatePresence>
			</motion.div>
		</div>
	)
}
