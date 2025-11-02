import Button from './components/Button'
import './index.css'
import { buttonRows } from './utils/data'

function App() {
	const onClick = () => {
		console.log('Button clicked')
	}
	return (
		<>
			<h1 className='text-white font-bold text-4xl text-end mr-1'>0</h1>
			{buttonRows.map((row, rowIndex) => (
				<div key={rowIndex} className='flex gap-x-2 p-1'>
					{row.map(({ title, type }) => (
						<Button key={title} title={title} type={type} onClick={onClick} />
					))}
				</div>
			))}
		</>
	)
}

export default App
