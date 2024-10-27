<script setup lang="ts">
import Button from 'primevue/button'

import {
	TIMER_STATUS_LONG_BREAK,
	TIMER_STATUS_SHORT_BREAK,
	TIMER_STATUS_STUDY,
} from '@store/constants/constants_status'
import { useTimerStatusStore } from '@store/status/useTimerStatusStore'

const { setCurrentStatus } = useTimerStatusStore()
</script>

<template>
	<div class="flex items-center justify-center gap-4">
		<Button
			:data-type="TIMER_STATUS_STUDY"
			class="!text-xl"
			severity="contrast"
			rounded
			label="Study"
			@click="setCurrentStatus(TIMER_STATUS_STUDY)"
		/>
		<Button
			:data-type="TIMER_STATUS_SHORT_BREAK"
			class="!text-xl"
			severity="contrast"
			rounded
			label="Short Break"
			@click="setCurrentStatus(TIMER_STATUS_SHORT_BREAK)"
		/>
		<Button
			:data-type="TIMER_STATUS_LONG_BREAK"
			class="!text-xl"
			severity="contrast"
			rounded
			label="Long Break"
			@click="setCurrentStatus(TIMER_STATUS_LONG_BREAK)"
		/>
	</div>
</template>
