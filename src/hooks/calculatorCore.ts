import { isOperator } from '../utils/calc'
import type { Context } from './calculatorTypes'

export const resetAll = ({
	setTokens,
	setCurrent,
	setLastExpression,
	setActiveOperator,
	setJustEvaluated,
	setHasError,
}: Context) => {
	setTokens([])
	setCurrent('0')
	setLastExpression('')
	setActiveOperator(null)
	setJustEvaluated(false)
	setHasError(false)
}

export const appendDigit = (ctx: Context, digit: string) => {
	if (ctx.hasError) resetAll(ctx)
	ctx.setActiveOperator(null)
	if (ctx.justEvaluated) {
		ctx.setTokens([])
		ctx.setLastExpression('')
		ctx.setJustEvaluated(false)
		ctx.setCurrent(digit === '.' ? '0.' : digit)
		return
	}
	ctx.setCurrent(prev => {
		if (digit === '.' && prev.includes('.')) return prev
		if (prev === '' && digit === '.') return '0.'
		if (prev === '0' && digit !== '.') return digit
		if (prev === '-' && digit === '.') return '-0.'
		return prev === '0' && digit === '.' ? '0.' : prev + digit
	})
}

export const applyOperator = (ctx: Context, op: string) => {
	if (ctx.hasError) resetAll(ctx)
	ctx.setActiveOperator(op)
	if (ctx.justEvaluated) {
		ctx.setTokens([ctx.current, op])
		ctx.setCurrent('')
		ctx.setLastExpression('')
		ctx.setJustEvaluated(false)
		return
	}
	if (ctx.current === '' || ctx.current === '-') {
		if (ctx.tokens.length === 0) {
			if (op === '-' && ctx.current === '') ctx.setCurrent('-')
			return
		}
		if (isOperator(ctx.tokens[ctx.tokens.length - 1])) {
			ctx.setTokens(prev => [...prev.slice(0, -1), op])
			return
		}
		ctx.setTokens(prev => [...prev, op])
		return
	}
	ctx.setTokens(prev => [...prev, ctx.current, op])
	ctx.setCurrent('')
}

export const handleDelete = (ctx: Context) => {
	if (ctx.hasError) return resetAll(ctx)
	if (ctx.justEvaluated) {
		ctx.setTokens([])
		ctx.setLastExpression('')
		ctx.setJustEvaluated(false)
		ctx.setCurrent('0')
		return
	}
	if (ctx.current && ctx.current !== '') {
		const next = ctx.current.slice(0, -1)
		if (next === '' || next === '-') ctx.setCurrent(next === '-' ? '-' : '0')
		else ctx.setCurrent(next)
		return
	}
	if (ctx.tokens.length === 0) return
	const last = ctx.tokens[ctx.tokens.length - 1]
	if (isOperator(last)) {
		ctx.setTokens(prev => prev.slice(0, -1))
		return
	}
	const trimmed = last.slice(0, -1)
	ctx.setTokens(prev => prev.slice(0, -1))
	ctx.setCurrent(trimmed === '' ? '0' : trimmed)
}
