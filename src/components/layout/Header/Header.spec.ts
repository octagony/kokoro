import { mount } from '@vue/test-utils'
import Header from './Header.vue'

it('Find title in Header', async () => {
	const header = mount(Header, {})
	expect(header.find('header').text()).toContain('Kokoro')
})
