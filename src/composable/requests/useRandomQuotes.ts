import { IQuote } from '@interfaces/composables/quote/IQuote'
import { useLoaderStore } from '@store/loaders/useLoaderStore'
import ky from 'ky'

export const useRandomQuotes = () => {
	const { setLoaderStatus } = useLoaderStore()

	const getRandomQuote = async (): Promise<IQuote | null> => {
		setLoaderStatus(true)
		try {
			const result = await ky.get<IQuote[]>(
				'https://api.quotable.io/quotes/random?limit=1&tags=life&maxLength=50'
			)

			if (!result.ok) {
				throw new Error('Error')
			}

			const data = await result.json()

			return data?.at(0) ?? null
		} catch (error) {
			return null
		} finally {
			setLoaderStatus(false)
		}
	}

	return {
		getRandomQuote,
	}
}
