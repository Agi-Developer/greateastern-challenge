//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useAllQuestionsStore = defineStore('allQuestions', {
  state: () => ({
    allQuestions: []
  }),
  getters: {
    getAllQuestions(state) {
      return state.allQuestions
    }
  },
  actions: {
    async fetchAllQuestions() {
      try {
        const data = await axios({
          method: 'get',
          url: `/questions/?pagesize=15&order=desc&sort=activity&site=stackoverflow`
        })
        this.allQuestions = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
