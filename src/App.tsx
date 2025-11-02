import Button from './components/Button'
import Heading from './components/Heading'
import './index.css'
import { useCounterStore } from './store/counterStore'
import { addOperator } from './utils/addOperator'
import { buttonRows } from './utils/data'
import { doOperation } from './utils/doOperation'

export default function App() {
	const {
		result,
		reset,
		setResult,
		setOperation,
		setFirstNum,
		firstNum,
		setSecondNum,
		operation,
	} = useCounterStore()
	const onClick = (value: string) => {
		switch (value) {
			case 'C':
				reset()
				break
			case 'DEL':
				setResult(result.slice(0, -1) || '0')
				break
			case '+':
				addOperator(result, '+', setOperation, setFirstNum, setResult)
				break
			case '-':
				addOperator(result, '-', setOperation, setFirstNum, setResult)
				break
			case '*':
				addOperator(result, '*', setOperation, setFirstNum, setResult)
				break
			case '/':
				addOperator(result, '/', setOperation, setFirstNum, setResult)
				break
			case '%':
				addOperator(result, '%', setOperation, setFirstNum, setResult)
				break
			case '=':
				setResult(doOperation({ firstNum, operation, setSecondNum, result }))
				break
			default:
				if (result === '0') {
					setResult(value)
				} else {
					setResult(result + value)
				}
				break
		}
	}
	return (
		<>
			<Heading />
			{buttonRows.map((row, rowIndex) => (
				<div key={rowIndex} className='flex gap-x-2 p-1'>
					{row.map(({ title, type }) => (
						<Button
							key={title}
							title={title}
							type={type}
							onClick={value => onClick(value)}
						/>
					))}
				</div>
			))}
		</>
	)
}
