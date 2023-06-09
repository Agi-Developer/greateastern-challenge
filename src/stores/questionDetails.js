//stores/questionDetails.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useQuestionDetailsStore = defineStore('questionDetails', {
  state: () => ({
    questionDetails: [],
    loading: false,
    error: false
  }),
  getters: {
    getQuestionDetails(state) {
      return state.questionDetails
    }
  },
  actions: {
    async fetchQuestionDetails(id) {
      this.questionDetails = []
      this.loading = true
      try {
        const data = await axios({
          method: 'get',
          url: `/questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
        })
        this.questionDetails = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['questionDetails']
  }
})
