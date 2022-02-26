import api from '@/api'

import {
  LIST_SET_COINS,
  LIST_APPLY_SORTING,
  LIST_SET_LOADING,
  LIST_SET_ERROR
} from '@/constants/mutation-types'

export const state = () => ({
  coins: [],
  sorting: {
    field: 'market_cap_rank',
    direction: 'asc'
  },
  loading: false,
  error: false
})

export const getters = {
  coins: (state) => state.coins,
  sorting: (state) => state.sorting
}

export const actions = {
  async fetchCoins({ commit }) {
    try {
      commit(LIST_SET_ERROR, false)
      commit(LIST_SET_LOADING, true)
      const coins = await api.list.fetchCoins(this.$axios)
      commit(LIST_SET_COINS, coins)
    } catch (error) {
      commit(LIST_SET_ERROR, true)
    } finally {
      commit(LIST_SET_LOADING, false)
    }
  }
}

export const mutations = {
  [LIST_SET_COINS](state, value) {
    state.coins = value
  },
  [LIST_APPLY_SORTING](state, value) {
    state.sorting = value
  },
  [LIST_SET_LOADING](state, value) {
    state.loading = value
  },
  [LIST_SET_ERROR](state, value) {
    state.error = value
  }
}
