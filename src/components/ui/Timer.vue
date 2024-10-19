<script setup lang="ts">
import { ITimerData } from '@interfaces/components/Timer/ITimer'
import Button from 'primevue/button'
import { computed, ComputedRef, onMounted, reactive } from 'vue'

const data: ITimerData = reactive({
	duration: 1500,
	remainingTime: 1500,
	timer: null as number | null,
	circumference: 2 * Math.PI * 180,
	isRunning: false,
})

onMounted(() => {
	data.remainingTime = data.duration
})

const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
		2,
		'0'
	)}`
}

const startTimer = (): void => {
	if (data.isRunning) return
	data.isRunning = true
	data.timer = window.setInterval(() => {
		if (data.remainingTime > 0) {
			data.remainingTime--
		}
		if (data.remainingTime <= 0) {
			clearInterval(data.timer!)
			data.timer = null
			data.isRunning = false
		}
	}, 1000)
}

const pauseTimer = (): void => {
	if (data.timer) {
		clearInterval(data.timer!)
		data.timer = null
		data.isRunning = false
	}
}

const toggleTimer = (): void => {
	if (data.isRunning) {
		pauseTimer()
		return
	}
	startTimer()
}

const offset: ComputedRef<number> = computed(() => {
	return (data.remainingTime / data.duration) * data.circumference
})
</script>

<template>
	<div
		class="app-timer-wrapper relative max-w-fit flex flex-col border-pink-100 border-2 px-8 py-4 rounded-3xl"
	>
		<svg class="circle" width="400" height="400">
			<circle
				cx="200"
				cy="200"
				r="180"
				stroke="lightgray"
				stroke-width="10"
				fill="none"
			/>
			<circle
				cx="200"
				cy="200"
				r="180"
				stroke="tomato"
				stroke-width="10"
				fill="none"
				:stroke-dasharray="data.circumference"
				:stroke-dashoffset="offset"
				transform="rotate(-90 200 200)"
			/>
		</svg>
		<div
			class="app-timer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-125%] text-4xl"
		>
			{{ formatTime(data.remainingTime) }}
		</div>
		<Button
			class="mx-auto !text-xl mt-4"
			@click="toggleTimer"
			:label="`${data.isRunning ? 'Pause' : 'Start'}`"
			severity="contrast"
			rounded
		/>
	</div>
</template>
