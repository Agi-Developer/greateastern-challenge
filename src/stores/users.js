//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useUserStore = defineStore('user', {
  state: () => ({
    users: []
  }),
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  actions: {
    async fetchUsers() {
      try {
        const data = await axios({
          method: 'get',
          url: `/questions/?pagesize=15&order=desc&sort=activity&site=stackoverflow`
        })
        this.users = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchAPI() {
      try {
        const data = await axios({
          method: 'get',
          url: `https://stackoverflow.com/oauth/dialog?client_id=26139&scope=no_expiry&redirect_uri=https://stackexchange.com/oauth/login_success`
        })
        console.log(data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
