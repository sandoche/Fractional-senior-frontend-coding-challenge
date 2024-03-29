import api from '@/api'
import localStorageHelper from '@/utils/localStorageHelper'
import createSortingFunction from '@/utils/createSortingFunction'
import { FAVOURITES, COINS } from '@/constants/storages-types'
import {
  LIST_SET_COINS,
  LIST_APPLY_SORTING,
  LIST_SET_LOADING,
  LIST_SET_ERROR,
  LIST_TOGGLE_FAVORITE,
  LIST_SET_FAVOURITES
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
    const { field, direction } = state.sorting
    const sortingFunction = createSortingFunction(field, direction)

    const favourites = state.favourites.map(favourite => {
      const coin = state.coins.find(coin => coin.id === favourite)
      return coin
    })

    return favourites.sort(sortingFunction)
  },
  favouritesIds: (state) => state.favourites,
  favouritesCount: (state) => state.favourites.length
}

export const actions = {
  initState({ commit }) {
    commit(LIST_SET_COINS, localStorageHelper.retrieve(COINS, []))
    commit(LIST_SET_FAVOURITES, localStorageHelper.retrieve(FAVOURITES, []))
  },
  async fetchCoins({ commit, state }) {
    try {
      commit(LIST_SET_ERROR, false)
      commit(LIST_SET_LOADING, true)
      const coins = await api.list.fetchCoins(this.$axios)
      commit(LIST_SET_COINS, coins)
      commit(LIST_APPLY_SORTING, state.sorting)
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
    localStorageHelper.store(COINS, state.coins)
  },
  [LIST_APPLY_SORTING](state, { field, direction }) {
    state.sorting = { field, direction }
    const sortingFunction = createSortingFunction(field, direction)
    state.coins = state.coins.sort(sortingFunction)
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
    localStorageHelper.store(FAVOURITES, state.favourites)
  },
  [LIST_SET_FAVOURITES](state, value) {
    state.favourites = value
  }
}
