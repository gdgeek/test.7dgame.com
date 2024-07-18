import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/test/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', async() => {
    const wrapper = shallowMount(Counter)

    expect(wrapper.findAll('div').exists()).toBe(true)
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('div').text()).toMatch('3')
  })
})
