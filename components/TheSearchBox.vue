<template>
  <div
    v-if="isSearchDisplayed"
    class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
      aria-hidden="true"
      @click="clearAndHide"
    ></div>

    <!--
    Command palette, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      class="
        mx-auto
        max-w-xl
        transform
        divide-y divide-gray-100
        overflow-hidden
        rounded-xl
        bg-white
        shadow-2xl
        ring-1 ring-black ring-opacity-5
        transition-all
      "
    >
      <div class="relative">
        <!-- Heroicon name: solid/search -->
        <svg
          class="
            pointer-events-none
            absolute
            top-3.5
            left-4
            h-5
            w-5
            text-gray-400
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          ref="searchbar"
          v-model="query"
          type="text"
          class="
            h-12
            w-full
            border-0
            bg-transparent
            pl-11
            pr-4
            text-gray-800
            placeholder-gray-400
            focus:ring-0
            sm:text-sm
          "
          placeholder="Search..."
          role="combobox"
          aria-expanded="false"
          aria-controls="options"
          @input="search"
        />
      </div>

      <!-- Results, show/hide based on command palette state -->
      <ul
        v-if="results.length > 0"
        id="options"
        class="max-h-96 scroll-py-3 overflow-y-auto p-3"
        role="listbox"
      >
        <TheSearchBoxResult
          v-for="(coin, index) of results"
          :id="coin.id"
          :key="index"
          :name="coin.name"
          :symbol="coin.symbol"
          :rank="coin.market_cap_rank"
          :image="coin.thumb"
          :clear-and-hide="clearAndHide"
        />
        <!-- More items... -->
      </ul>

      <!-- Empty state, show/hide based on command palette state -->
      <div v-if="showNoResults" class="py-14 px-6 text-center text-sm sm:px-14">
        <!-- Heroicon name: outline/exclamation-circle -->
        <svg
          class="mx-auto h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="mt-4 font-semibold text-gray-900">No results found</p>
        <p class="mt-2 text-gray-500">
          No components found for this search term. Please try again.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const MIN_LETTER_START_SEARCH = 2

export default {
  data() {
    return {
      query: ''
    }
  },

  computed: {
    ...mapGetters({
      results: 'search/results',
      isSearchDisplayed: 'search/isSearchDisplayed',
      loading: 'search/loading'
    }),
    showNoResults() {
      return (
        this.results.length === 0 &&
        this.query.length >= MIN_LETTER_START_SEARCH &&
        this.loading === false
      )
    }
  },
  watch: {
    isSearchDisplayed(newValue) {
      if (newValue) {
        // next tick

        this.$nextTick(() => this.$refs.searchbar.focus())
      }
    }
  },
  methods: {
    ...mapActions({
      hide: 'search/hideSearch',
      fetchSearch: 'search/fetchSearch',
      reset: 'search/resetSearch'
    }),
    search() {
      if (this.query.length >= MIN_LETTER_START_SEARCH) {
        this.fetchSearch(this.query)
      } else if (this.query.length === 0) {
        this.reset()
      }
    },
    clear() {
      this.query = ''
    },
    clearAndHide() {
      this.clear()
      this.hide()
      this.reset()
    }
  }
}
</script>
