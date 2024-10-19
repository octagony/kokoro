<script setup lang="ts">
import { useLoaderStore } from '@store/loaders/useLoaderStore'
import ProgressSpinner from 'primevue/progressspinner'
import { computed } from 'vue'

const getLoaderStatus = computed(() => useLoaderStore().getLoaderStatus)
</script>

<template>
	<div
		v-if="getLoaderStatus"
		className="fixed left-0 top-0 z-50 block h-full w-full bg-slate-900 opacity-75"
	>
		<ProgressSpinner
			class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
	</div>
</template>
