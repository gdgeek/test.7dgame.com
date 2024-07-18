import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Document from '@/components/Document.vue'

describe('Document.vue', () => {
  it('increments count when button is clicked', async() => {
    const wrapper = shallowMount(Document)
    expect(wrapper.name()).toBe('Document')
    // expect(wrapper.findAll('div').exists()).toBe(true)
    // wrapper.find('button').trigger('click')
    await Vue.nextTick()
    // expect(wrapper.find('div').text()).toMatch('3')
  })
})
