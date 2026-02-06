export const isOperator = (value: string) => ['+', '-', '*', '/'].includes(value)

export const formatNumber = (value: number) => {
	if (!Number.isFinite(value)) return 'Error'
	const text = value.toString()
	return text.length > 14 ? value.toPrecision(12).replace(/\.0+$/, '') : text
}

export const compute = (parts: string[]) => {
	let acc = parseFloat(parts[0])
	if (Number.isNaN(acc)) return null
	for (let i = 1; i < parts.length; i += 2) {
		const op = parts[i]
		const next = parseFloat(parts[i + 1])
		if (Number.isNaN(next)) return null
		switch (op) {
			case '+':
				acc += next
				break
			case '-':
				acc -= next
				break
			case '*':
				acc *= next
				break
			case '/':
				acc = next === 0 ? Number.NaN : acc / next
				break
			default:
				return null
		}
	}
	return acc
}
