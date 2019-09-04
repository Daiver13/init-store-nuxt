import axios from 'axios'

export default {
  async FETCH_PROFILE({ commit }) {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res)

      commit('SET_PROFILE', res)
    } catch (err) {

      /* eslint-disable */
      console.group('FETCH_NEWS_SLUG')
      console.error('ERROR FETCH_NEWS_SLUG', err)
      console.groupEnd()
      /* eslint-enable */
    }
  },
}
