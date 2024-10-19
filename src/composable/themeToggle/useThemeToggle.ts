import { useLocalStorage } from '@composable/localStorage/useLocalStorage'
import {
	APP_DARK_THEME_CLASS,
	DARK_THEME_LOCAL_STORAGE_VALUE,
	LIGHT_THEME_LOCAL_STORAGE_VALUE,
	THEME_LOCAL_STORAGE_KEY,
} from '@store/constants/constants_themes'
import { watch } from 'vue'

export function useThemeToggle() {
	const currentTheme = useLocalStorage<string>(THEME_LOCAL_STORAGE_KEY, {
		initialValue: LIGHT_THEME_LOCAL_STORAGE_VALUE,
	})

	if (currentTheme.value === DARK_THEME_LOCAL_STORAGE_VALUE) {
		document.documentElement.classList.add(APP_DARK_THEME_CLASS)
	}

	const toggleTheme = () => {
		currentTheme.value =
			currentTheme.value === LIGHT_THEME_LOCAL_STORAGE_VALUE
				? DARK_THEME_LOCAL_STORAGE_VALUE
				: LIGHT_THEME_LOCAL_STORAGE_VALUE
		document.documentElement.classList.toggle(
			APP_DARK_THEME_CLASS,
			currentTheme.value === DARK_THEME_LOCAL_STORAGE_VALUE
		)
	}

	watch(currentTheme, newTheme => {
		document.documentElement.classList.toggle(
			APP_DARK_THEME_CLASS,
			newTheme === DARK_THEME_LOCAL_STORAGE_VALUE
		)
	})

	return {
		currentTheme,
		toggleTheme,
	}
}
