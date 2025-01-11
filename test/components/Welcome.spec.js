import { mount } from '@vue/test-utils'
import Welcome from '~/components/main/Welcome.vue'

describe('Welcome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageWelcome)
    expect(wrapper.vm).toBeTruthy()
  })
})
