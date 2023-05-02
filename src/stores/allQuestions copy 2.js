//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useAllQuestionsStore = defineStore('allQuestions', {
  state: () => ({
    allQuestions: [],
    loading: false,
    error: false
  }),
  getters: {
    getAllQuestions(state) {
      return state.allQuestions
    }
  },
  actions: {
    async fetchAllQuestions() {
      this.allQuestions = []
      this.loading = true
      try {
        const data = await axios({
          method: 'get',
          url: `/questions?page=2&pagesize=15&order=desc&sort=votes&site=stackoverflow`
        })
        this.allQuestions = data.data
      } catch (error) {
        alert(error)
        this.error = error
      } finally {
        this.loading = false
      }
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['allQuestions']
  }
})
