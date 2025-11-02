import { useCounterStore } from '../store/counterStore'

export default function Heading() {
	const { result } = useCounterStore()
	return (
		<h1 className='text-white font-bold text-4xl mb-4 select-none text-end overflow-hidden overflow-x-auto whitespace-nowrap mt-2'>
			{result}
		</h1>
	)
}
