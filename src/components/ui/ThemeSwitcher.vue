<script setup lang="ts">
import { useThemeToggle } from '@composable/themeToggle/useThemeToggle'
import {
	DARK_THEME_LOCAL_STORAGE_VALUE,
	LIGHT_THEME_LOCAL_STORAGE_VALUE,
} from '@store/constants/constants_themes'

const { currentTheme, toggleTheme } = useThemeToggle()
</script>

<template>
	<div class="px-8 app-theme-switcher cursor-pointer" @click="toggleTheme">
		<i
			v-if="currentTheme === LIGHT_THEME_LOCAL_STORAGE_VALUE"
			class="pi pi-sun"
			style="font-size: 1.5rem"
		></i>
		<i
			v-if="currentTheme === DARK_THEME_LOCAL_STORAGE_VALUE"
			class="pi pi-moon"
			style="font-size: 1.5rem"
		></i>
	</div>
</template>
