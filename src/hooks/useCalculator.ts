import { useCallback, useEffect, useMemo, useState } from 'react'
import { compute, formatNumber, isOperator } from '../utils/calc'
import { handleInput } from './calculatorEvaluate'
import type { Context } from './calculatorTypes'

export const useCalculator = () => {
	const [tokens, setTokens] = useState<string[]>([])
	const [current, setCurrent] = useState('0')
	const [lastExpression, setLastExpression] = useState('')
	const [activeOperator, setActiveOperator] = useState<string | null>(null)
	const [justEvaluated, setJustEvaluated] = useState(false)
	const [hasError, setHasError] = useState(false)

	const displayChain = useMemo(() => {
		if (justEvaluated && lastExpression) return `${lastExpression} =`
		const parts = [...tokens]
		if (current && current !== '') parts.push(current)
		return parts.length === 0 ? '0' : parts.join(' ')
	}, [tokens, current, justEvaluated, lastExpression])

	const previewValue = useMemo(() => {
		if (hasError || justEvaluated) return null
		const parts = [...tokens]
		if (current !== '' && current !== '-') parts.push(current)
		if (parts.length < 3 || isOperator(parts[parts.length - 1])) return null
		const value = compute(parts)
		if (value === null || Number.isNaN(value) || !Number.isFinite(value))
			return 'Error'
		return formatNumber(value)
	}, [tokens, current, hasError, justEvaluated])

	const displayValue = previewValue ?? (current || '0')

	const context: Context = {
		tokens,
		current,
		lastExpression,
		activeOperator,
		justEvaluated,
		hasError,
		setTokens,
		setCurrent,
		setLastExpression,
		setActiveOperator,
		setJustEvaluated,
		setHasError,
	}

	const onInput = useCallback(
		(value: string) => handleInput(context, value),
		[context],
	)

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			const { key } = event
			if (/^[0-9]$/.test(key)) return onInput(key)
			if (key === '.') return onInput('.')
			if (['+', '-', '*', '/'].includes(key)) return onInput(key)
			if (key === 'Enter' || key === '=') return onInput('=')
			if (key === 'Backspace') return onInput('DEL')
			if (key === 'Escape') return onInput('C')
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [
		tokens,
		current,
		lastExpression,
		activeOperator,
		justEvaluated,
		hasError,
		onInput,
	])

	return {
		displayChain,
		displayValue,
		activeOperator,
		justEvaluated,
		handleInput: onInput,
	}
}
