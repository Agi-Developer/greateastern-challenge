import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AskQuestion from '../AskQuestion.vue'

describe('AskQuestion', () => {
  it('renders properly', () => {
    const wrapper = mount(AskQuestion, { props: { msg: 'Ask a Question' } })
    expect(wrapper.text()).toContain('Ask a Question')
  })
})
