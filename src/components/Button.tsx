import type { ButtonProps } from '../types/interfaces'

export default function Button({ title, onClick, type }: ButtonProps) {
	return (
		<button
			onClick={() => onClick(title)}
			className='border rounded-full p-3 text-white w-13 h-13 flex items-center justify-center transition-colors duration-600 hover:text-black'
			style={{
				borderColor:
					type === 'orange'
						? '#f5913e'
						: type === 'gray'
						? '#a5a5a5'
						: '#333333',
				backgroundColor:
					type === 'orange'
						? '#f5913e'
						: type === 'gray'
						? '#a5a5a5'
						: '#333333',
			}}
		>
			{title}
		</button>
	)
}
