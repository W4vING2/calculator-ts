export type CalcState = {
	tokens: string[]
	current: string
	lastExpression: string
	activeOperator: string | null
	justEvaluated: boolean
	hasError: boolean
}

export type Setters = {
	setTokens: (value: string[] | ((prev: string[]) => string[])) => void
	setCurrent: (value: string | ((prev: string) => string)) => void
	setLastExpression: (value: string) => void
	setActiveOperator: (value: string | null) => void
	setJustEvaluated: (value: boolean) => void
	setHasError: (value: boolean) => void
}

export type Context = CalcState & Setters
