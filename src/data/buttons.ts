type ButtonKind = 'number' | 'operator' | 'equals' | 'clear'

type CalcButton = {
	id: string
	label: string
	value: string
	kind: ButtonKind
	span?: number
}

export const buttons: CalcButton[] = [
	{ id: 'c', label: 'C', value: 'C', kind: 'clear' },
	{ id: 'del', label: 'DEL', value: 'DEL', kind: 'clear' },
	{ id: 'div', label: '÷', value: '/', kind: 'operator' },
	{ id: 'mul', label: '×', value: '*', kind: 'operator' },
	{ id: '7', label: '7', value: '7', kind: 'number' },
	{ id: '8', label: '8', value: '8', kind: 'number' },
	{ id: '9', label: '9', value: '9', kind: 'number' },
	{ id: 'sub', label: '−', value: '-', kind: 'operator' },
	{ id: '4', label: '4', value: '4', kind: 'number' },
	{ id: '5', label: '5', value: '5', kind: 'number' },
	{ id: '6', label: '6', value: '6', kind: 'number' },
	{ id: 'add', label: '+', value: '+', kind: 'operator' },
	{ id: '1', label: '1', value: '1', kind: 'number' },
	{ id: '2', label: '2', value: '2', kind: 'number' },
	{ id: '3', label: '3', value: '3', kind: 'number' },
	{ id: 'eq', label: '=', value: '=', kind: 'equals' },
	{ id: '0', label: '0', value: '0', kind: 'number', span: 2 },
	{ id: 'dot', label: '.', value: '.', kind: 'number' },
]
