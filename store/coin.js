import api from '@/api'


import {
  COIN_SET_ID,
  COIN_SET_MARKET_INFO,
  COIN_SET_LOADING,
  COIN_SET_ERROR
} from '@/constants/mutation-types'

export const state = () => ({
  coinId: null,
  marketInfo: {},
  loading: false,
  error: false
})

export const getters = {
  basicInfo: (state, getters, rootState) => {
    const coins = rootState.list && rootState.list.coins && rootState.list.coins.length > 0 && rootState.list.coins
    const coin = coins && coins.find(coin => coin.id === state.coinId)

    return coin || {}
  },
  marketInfo: (state) => state.marketInfo,
  loading: (state) => state.loading,
  error: (state) => state.error
}

export const actions = {
  async fetchCoin({ commit }, coinId) {
    try {
      commit(COIN_SET_ID, coinId)
      commit(COIN_SET_ERROR, false)
      commit(COIN_SET_LOADING, true)
      const marketInfo = await api.coin.fetchCoin(this.$axios, coinId)
      commit(COIN_SET_MARKET_INFO, marketInfo)
    } catch (error) {
      commit(COIN_SET_ERROR, true)
    } finally {
      commit(COIN_SET_LOADING, false)
    }
  },
}

export const mutations = {
  [COIN_SET_ID](state, coinId) {
    state.coinId = coinId
  },
  [COIN_SET_MARKET_INFO](state, value) {
    state.marketInfo = value
  },
  [COIN_SET_LOADING](state, value) {
    state.loading = value
  },
  [COIN_SET_ERROR](state, value) {
    state.error = value
  }
}
