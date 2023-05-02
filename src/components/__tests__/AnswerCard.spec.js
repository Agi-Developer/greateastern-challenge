import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import AnswerCard from '../AnswerCard.vue'

test('AnswerCard', async () => {
  expect(AnswerCard).toBeTruthy()

  const wrapper = mount(AnswerCard, {
    props: {
      loading: false,
      answer: {
        owner: {
          account_id: 13693871,
          reputation: 81,
          user_id: 9881043,
          user_type: 'registered',
          profile_image: 'https://i.stack.imgur.com/eO0VV.jpg?s=256&g=1',
          display_name: 'Mohammed AL MahmoOd',
          link: 'https://stackoverflow.com/users/9881043/mohammed-al-mahmood'
        },
        score: 0,
        creation_date: 1682873107,
        answer_id: 76142403,
        question_id: 927358
      }
    }
  })
  expect(wrapper.props('loading')).toBe(false)
  expect(wrapper.props('answer')).toBe({
    owner: {
      account_id: 13693871,
      reputation: 81,
      user_id: 9881043,
      user_type: 'registered',
      profile_image: 'https://i.stack.imgur.com/eO0VV.jpg?s=256&g=1',
      display_name: 'Mohammed AL MahmoOd',
      link: 'https://stackoverflow.com/users/9881043/mohammed-al-mahmood'
    },
    score: 0,
    creation_date: 1682873107,
    answer_id: 76142403,
    question_id: 927358
  })
})

const ab = {
  loading: false,
  answer: {
    owner: {
      account_id: 13693871,
      reputation: 81,
      user_id: 9881043,
      user_type: 'registered',
      profile_image: 'https://i.stack.imgur.com/eO0VV.jpg?s=256&g=1',
      display_name: 'Mohammed AL MahmoOd',
      link: 'https://stackoverflow.com/users/9881043/mohammed-al-mahmood'
    },
    score: 0,
    creation_date: 1682873107,
    answer_id: 76142403,
    question_id: 927358
  }
}

test('diff', () => {
  // const a = JSON.parse(ab)
  // const b = JSON.parse(ab)
  expect(ab).toEqual(ab)
})
