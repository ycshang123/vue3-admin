import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      console.log(md5(password))
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            resolve(data)
            console.log(data)
            this.commit('user/setToken', data.token)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 增加
    async getUserInfo (context) {
      const res = await getUserInfo()
      console.log('请求用户信息')
      console.log(res)
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
