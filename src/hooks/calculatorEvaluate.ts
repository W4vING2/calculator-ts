import { compute, formatNumber, isOperator } from '../utils/calc'
import type { Context } from './calculatorTypes'
import { appendDigit, applyOperator, handleDelete, resetAll } from './calculatorCore'

export const evaluate = (ctx: Context) => {
	if (ctx.hasError) return resetAll(ctx)
	ctx.setActiveOperator(null)
	let parts = [...ctx.tokens]
	if (ctx.current !== '' && ctx.current !== '-') parts.push(ctx.current)
	if (parts.length === 0) return
	if (isOperator(parts[parts.length - 1])) parts = parts.slice(0, -1)
	if (parts.length === 0) return
	const expression = parts.join(' ')
	ctx.setLastExpression(expression)
	const value = compute(parts)
	if (value === null || Number.isNaN(value) || !Number.isFinite(value)) {
		ctx.setCurrent('Error')
		ctx.setHasError(true)
		ctx.setTokens([])
		ctx.setJustEvaluated(true)
		return
	}
	ctx.setCurrent(formatNumber(value))
	ctx.setTokens([])
	ctx.setJustEvaluated(true)
}

export const handleInput = (ctx: Context, value: string) => {
	if (value === 'C') return resetAll(ctx)
	if (value === 'DEL') return handleDelete(ctx)
	if (value === '=') return evaluate(ctx)
	if (isOperator(value)) return applyOperator(ctx, value)
	return appendDigit(ctx, value)
}
