import { ILoader } from '@interfaces/store/loader/ILoader'
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader-store', {
	state: (): ILoader => ({ isLoading: false, currentColor: '' }),
	getters: {
		getLoaderStatus: (state: ILoader) => state.isLoading,
		getLoaderColor: (state: ILoader) => state.currentColor,
	},
	actions: {
		setLoaderStatus(status: boolean) {
			this.isLoading = status
		},
		setLoaderColor(color: string) {
			this.currentColor = color
		},
	},
})
