import api from '@/api'


import {
  COIN_SET_BASIC_INFO,
  COIN_SET_MARKET_INFO,
  COIN_SET_LOADING,
  COIN_SET_ERROR
} from '@/constants/mutation-types'

export const state = () => ({
  basicInfo: {},
  marketInfo: {},
  loading: false,
  error: false
})

export const getters = {
  basicInfo: (state) => state.basicInfo,
  marketInfo: (state) => state.marketInfo,
  loading: (state) => state.loading,
  error: (state) => state.error
}

export const actions = {
  async fetchCoin({ commit }, coinId) {
    try {
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
  setBasicInfos({ commit }, infos) {
    commit(COIN_SET_BASIC_INFO, infos)
  }
}

export const mutations = {
  [COIN_SET_BASIC_INFO](state, value) {
    state.basicInfo = value
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
