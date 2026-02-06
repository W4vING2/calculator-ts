import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import Keypad from './Keypad'

export default function Calculator() {
	const {
		displayChain,
		displayValue,
		activeOperator,
		justEvaluated,
		handleInput,
	} = useCalculator()

	return (
		<div className='min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 flex items-center justify-center p-4'>
			<div className='w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_40px_100px_-60px_rgba(0,0,0,0.9)] px-5 py-6'>
				<Display
					chain={displayChain}
					value={displayValue}
					pulse={justEvaluated}
				/>
				<Keypad activeOperator={activeOperator} onPress={handleInput} />
			</div>
		</div>
	)
}
