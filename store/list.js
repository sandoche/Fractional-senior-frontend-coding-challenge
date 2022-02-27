import api from '@/api'

import {
  LIST_SET_COINS,
  LIST_APPLY_SORTING,
  LIST_SET_LOADING,
  LIST_SET_ERROR,
  LIST_TOGGLE_FAVORITE
} from '@/constants/mutation-types'

export const state = () => ({
  coins: [],
  sorting: {
    field: 'market_cap_rank',
    direction: 'asc'
  },
  loading: false,
  error: false,
  favourites: []
})

export const getters = {
  coins: (state) => state.coins,
  sorting: (state) => state.sorting,
  loading: (state) => state.loading,
  error: (state) => state.error,
  favourites: (state) => {
    return state.coins.filter((coin) => {
      return state.favourites.includes(coin.id)
    })
  },
  favouritesIds: (state) => state.favourites
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
  },
  toggleFavorite({ commit }, id) {
    commit(LIST_TOGGLE_FAVORITE, id)
  },
  applySorting({ commit }, { field, direction }) {
    commit(LIST_APPLY_SORTING, { field, direction })
  }
}

export const mutations = {
  [LIST_SET_COINS](state, value) {
    state.coins = value
  },
  [LIST_APPLY_SORTING](state, { field, direction }) {
    state.sorting = { field, direction }
    state.coins = state.coins.sort((a, b) => {
      console.log(a.rank)

      if (direction === 'asc') {
        return a[field] >= b[field] ? 1 : -1
      } else {
        return a[field] < b[field] ? 1 : -1
      }
    })
    console.log(state.coins[0].id)
  },
  [LIST_SET_LOADING](state, value) {
    state.loading = value
  },
  [LIST_SET_ERROR](state, value) {
    state.error = value
  },
  [LIST_TOGGLE_FAVORITE](state, id) {
    const index = state.favourites.indexOf(id)
    if (index === -1) {
      state.favourites.push(id)
    } else {
      state.favourites.splice(index, 1)
    }
  }
}
