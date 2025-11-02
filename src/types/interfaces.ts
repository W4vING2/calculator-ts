export interface ButtonProps {
	title: string
	onClick: (value: string) => void
	type?: string
}

export interface DoOperationParams {
	firstNum: string
	operation: string
	result: string
	setSecondNum: (num: string) => void
}
