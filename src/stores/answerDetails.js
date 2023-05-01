//stores/answerDetails.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useAnswerDetailsStore = defineStore('answerDetails', {
  state: () => ({
    answerDetails: []
  }),
  getters: {
    getAnswerDetails(state) {
      return state.answerDetails
    }
  },
  actions: {
    async fetchAnswerDetails(id) {
      try {
        const data = await axios({
          method: 'get',
          url: `/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`
        })
        this.answerDetails = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
