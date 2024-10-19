import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@composable': path.resolve(__dirname, './src/composable'),
			'@interfaces': path.resolve(__dirname, './src/interfaces'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
	plugins: [vue()],
})
