<script setup lang="ts">
import { useRandomQuotes } from '@composable/requests/useRandomQuotes'
import { onMounted, reactive } from 'vue'

import { IQuote } from '@interfaces/composables/quote/IQuote'

const { getRandomQuote } = useRandomQuotes()

const data = reactive({
	currentQuoteData: <IQuote | null>null,
})

onMounted(async () => {
	const result = await getRandomQuote()

	if (!result) return

	data.currentQuoteData = result
})
</script>

<template>
	<div v-if="data.currentQuoteData" class="app-quot flex flex-col items-center">
		<span class="font-mono font-bold">{{ data.currentQuoteData.content }}</span>
		<div class="text-sm">
			<span>&#8220;</span>
			<span>{{ data.currentQuoteData.author }}</span>
		</div>
	</div>
</template>
