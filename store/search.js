import api from '@/api'

import {
  SEARCH_SET_RESULTS,
  SEARCH_SET_LOADING,
  SEARCH_SET_ERROR,
  SEARCH_SET_DISPLAY,
} from '@/constants/mutation-types'

export const state = () => ({
  results: [],
  loading: false,
  error: false,
  showSearch: false
})

export const getters = {
  results: (state) => state.results,
  loading: (state) => state.loading,
  error: (state) => state.error,
  isSearchDisplayed: (state) => state.showSearch
}

export const actions = {
  async fetchSearch({ commit }, query) {
    try {
      commit(SEARCH_SET_ERROR, false)
      commit(SEARCH_SET_LOADING, true)
      const results = await api.search.fetchQuery(this.$axios, query)
      commit(SEARCH_SET_RESULTS, results)
    } catch (error) {
      commit(SEARCH_SET_ERROR, true)
    } finally {
      commit(SEARCH_SET_LOADING, false)
    }
  },
  showSearch({ commit }) {
    commit(SEARCH_TOGGLE_DISPLAY, true)
  },
  hideSearch({ commit }) {
    commit(SEARCH_TOGGLE_DISPLAY, false)
  }
}

export const mutations = {
  [SEARCH_SET_RESULTS](state, value) {
    state.results = value
  },
  [SEARCH_SET_LOADING](state, value) {
    state.loading = value
  },
  [SEARCH_SET_ERROR](state, value) {
    state.error = value
  },
  [SEARCH_SET_DISPLAY](state, value) {
    state.showSearch = value
  }
}
