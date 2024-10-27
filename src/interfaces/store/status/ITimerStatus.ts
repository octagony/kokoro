import {
	TIMER_STATUS_LONG_BREAK,
	TIMER_STATUS_SHORT_BREAK,
	TIMER_STATUS_STUDY,
} from '@store/constants/constants_status'

export interface ITimerStatus {
	status: IStatusTypes
	currentTime: ITimerTypes
}

export interface ITimerTypes {
	study: number | null
	shortBreak: number | null
	longBreak: number | null
}

export type IStatusTypes =
	| typeof TIMER_STATUS_STUDY
	| typeof TIMER_STATUS_SHORT_BREAK
	| typeof TIMER_STATUS_LONG_BREAK
