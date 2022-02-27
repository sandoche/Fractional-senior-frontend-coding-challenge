import api from '@/api'
import localStorageHelper from '@/utils/localStorageHelper'
import { COIN_ID_ } from '@/constants/storages-types'
import {
  COIN_SET_ID,
  COIN_SET_MARKET_INFO,
  COIN_SET_LOADING,
  COIN_SET_ERROR,
  COIN_SET_MARKET_DATA,
  COIN_RESET_MARKET_DATA
} from '@/constants/mutation-types'

export const state = () => ({
  coinId: null,
  marketInfo: {},
  loading: false,
  error: false,
  marketData: []
})

export const getters = {
  basicInfo: (state, getters, rootState) => {
    const coins = rootState.list && rootState.list.coins && rootState.list.coins.length > 0 && rootState.list.coins
    const coin = coins && coins.find(coin => coin.id === state.coinId)

    return coin || {}
  },
  marketInfo: (state) => state.marketInfo,
  loading: (state) => state.loading,
  error: (state) => state.error,
  marketData: (state) => state.marketData
}

export const actions = {
  initState({ commit, state }, coinId) {
    const marketInfoFromStorage = localStorageHelper.retrieve(COIN_ID_ + coinId, {})
    commit(COIN_SET_MARKET_INFO, marketInfoFromStorage)
    commit(COIN_SET_MARKET_DATA, marketInfoFromStorage)
  },
  async fetchCoin({ commit }, coinId) {
    try {
      commit(COIN_RESET_MARKET_DATA)
      commit(COIN_SET_ID, coinId)
      commit(COIN_SET_ERROR, false)
      commit(COIN_SET_LOADING, true)
      const marketInfo = await api.coin.fetchCoin(this.$axios, coinId)
      commit(COIN_SET_MARKET_INFO, marketInfo)
      commit(COIN_SET_MARKET_DATA, marketInfo)
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
    localStorageHelper.store(COIN_ID_ + value.id, value)
  },
  [COIN_SET_LOADING](state, value) {
    state.loading = value
  },
  [COIN_SET_ERROR](state, value) {
    state.error = value
  },
  [COIN_SET_MARKET_DATA](state, value) {
    state.marketData = []

    if (value.market_data) {

      state.marketData.push({
        name: 'coin.market.evolution24',
        value: value.market_data.price_change_percentage_24h
      })
      state.marketData.push({
        name: 'coin.market.evolution7d',
        value: value.market_data.price_change_percentage_7d
      })
      state.marketData.push({
        name: 'coin.market.evolution14d',
        value: value.market_data.price_change_percentage_14d
      })
      state.marketData.push({
        name: 'coin.market.evolution30d',
        value: value.market_data.price_change_percentage_30d
      })
    }
  },
  [COIN_RESET_MARKET_DATA](state) {
    state.marketData = []
  }
}
