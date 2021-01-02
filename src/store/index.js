import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bitcoinStore: null,

  },
  mutations: {
    setBitcoin: (state, bitcoinStore) => (state.bitcoinStore = bitcoinStore),
  },
  actions: {
    async fetchBitcoin({ commit }) {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      console.log('store response is', response.data.bpi)
      commit('setBitcoin', response.data.bpi)
    },
  },
  modules: {
  }
})
