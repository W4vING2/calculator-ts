import { create } from 'zustand'
import type { Store } from './counter.types'

export const useCounterStore = create<Store>()(set => ({
	firstNum: '0',
	secondNum: '0',
	operation: '0',
	result: '0',
	setFirstNum: (num: string) => set({ firstNum: num }),
	setSecondNum: (num: string) => set({ secondNum: num }),
	setOperation: (operation: string) => set({ operation: operation }),
	setResult: (result: string) => set({ result: result }),
	reset: () =>
		set({ firstNum: '0', secondNum: '0', operation: '', result: '0' }),
}))
