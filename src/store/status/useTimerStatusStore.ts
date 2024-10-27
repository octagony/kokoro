import {
	IStatusTypes,
	ITimerStatus,
} from '@interfaces/store/status/ITimerStatus'
import { TIMER_STATUS_STUDY } from '@store/constants/constants_status'
import { defineStore } from 'pinia'

export const useTimerStatusStore = defineStore('timer-status-store', {
	state: (): ITimerStatus => ({
		status: TIMER_STATUS_STUDY,
		currentTime: {
			study: 1500,
			longBreak: 900,
			shortBreak: 300,
		},
	}),

	getters: {
		getCurrentTime: (state: ITimerStatus) => {
			switch (state.status) {
				case 'Study':
					return state.currentTime.study
				case 'Short break':
					return state.currentTime.shortBreak
				case 'Long break':
					return state.currentTime.longBreak
				default:
					return state.currentTime.study
			}
		},
	},
	actions: {
		setCurrentStatus(status: IStatusTypes) {
			this.status = status
		},
	},
})
