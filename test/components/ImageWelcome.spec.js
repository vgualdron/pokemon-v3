import { mount } from '@vue/test-utils'
import ImageWelcome from '@/components/ImageWelcome.vue'

describe('ImageWelcome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageWelcome)
    expect(wrapper.vm).toBeTruthy()
  })
})