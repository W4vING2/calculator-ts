import type { DoOperationParams } from '../types/interfaces'

export const doOperation = ({
	firstNum,
	operation,
	setSecondNum,
	result,
}: DoOperationParams) => {
	const indexOfOperator = result.indexOf(operation)
	setSecondNum(result.slice(indexOfOperator + 1))
	const secondNumber: number = Number(result.slice(indexOfOperator + 1))
	switch (operation) {
		case '+':
			return String(Number(firstNum) + secondNumber)
		case '-':
			return String(Number(firstNum) - secondNumber)
		case '*':
			return String(Number(firstNum) * secondNumber)
		case '/':
			return String(Number(firstNum) / secondNumber)
		case '%':
			return String(Number(firstNum) % secondNumber)
		default:
			return '0'
	}
}
