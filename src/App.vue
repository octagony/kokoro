<script setup lang="ts">
import Container from '@components/layout/Container.vue'
import Header from '@components/layout/Header/Header.vue'
import PageLoader from '@components/ui/PageLoader.vue'
import Timer from '@components/ui/Timer.vue'
</script>

<template>
	<PageLoader />
	<Container>
		<Header />
		<div class="main-container mt-8">
			<Timer />
		</div>
	</Container>
</template>
