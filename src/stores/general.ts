import { defineStore } from 'pinia'
type CARDSTYLE = {
	variant: NonNullable<'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'>
	color: string
}
export const useGeneralStore = defineStore('general', () => {
	const cardStyle: CARDSTYLE = {
		variant: 'outlined',
		color: 'var(--gray-200)'
	}

	return { cardStyle }
})
