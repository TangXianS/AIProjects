import { defineStore } from 'pinia'

interface UserState {
  token: string
  userInfo: any
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userInfo: null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    logout() {
      this.token = ''
      this.userInfo = null
    }
  },
  persist: true
})