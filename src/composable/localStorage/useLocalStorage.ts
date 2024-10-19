import { Ref, ref, watch } from 'vue'

interface UseLocalStorageOptions<T> {
	initialValue: T
}

export function useLocalStorage<T>(
	key: string,
	options?: UseLocalStorageOptions<T>
): Ref<T> {
	const storedValue = localStorage.getItem(key)

	if (!storedValue) {
		localStorage.setItem(key, JSON.stringify(options?.initialValue))
	}

	const data = ref<T>(
		storedValue ? JSON.parse(storedValue) : options?.initialValue
	)

	watch(data, newValue => {
		localStorage.setItem(key, JSON.stringify(newValue))
	})

	return data as Ref<T>
}
