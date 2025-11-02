export const addOperator = (
	result: string,
	operator: string,
	setOperation: (operator: string) => void,
	setFirstNum: (firstnum: string) => void,
	setResult: (result: string) => void
) => {
	if (
		result.endsWith('+') ||
		result.endsWith('-') ||
		result.endsWith('*') ||
		result.endsWith('/') ||
		result.endsWith('%')
	) {
		return
	}
	setOperation(operator)
	setFirstNum(result)
	setResult(result + operator)
}
