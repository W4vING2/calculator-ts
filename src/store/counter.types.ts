interface IInitialState {
	firstNum: string
	secondNum: string
	operation: string
	result: string
}

interface Functions {
	setFirstNum: (num: string) => void
	setSecondNum: (num: string) => void
	setOperation: (operation: string) => void
	setResult: (result: string) => void
	reset: () => void
}

export interface Store extends IInitialState, Functions {}
