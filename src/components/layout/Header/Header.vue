<script setup lang="ts">
import ThemeSwitcher from '@components/ui/ThemeSwitcher.vue'
import Divider from 'primevue/divider'
</script>

<template>
	<header class="app-header w-full flex justify-between items-center">
		<div class="app-header__left-container flex gap-4">
			<img class="object-contain w-6" src="../../../assets/logo.png" />
			<h1 class="text-4xl">Kokoro</h1>
		</div>
		<div class="app-header-center-container">
			<!-- <Quot /> -->
		</div>
		<div class="app-header__right-container">
			<ThemeSwitcher />
		</div>
	</header>
	<Divider type="solid" />
</template>
