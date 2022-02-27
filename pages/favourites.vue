<template>
  <div>
    <CoinsTable
      v-if="favourites.length > 0"
      :coins="favourites"
      :sorting="sorting"
    />
    <FavouritesEmptyState v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('list/fetchCoins')
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      favourites: 'list/favourites',
      sorting: 'list/sorting',
      loading: 'list/loading',
      error: 'list/error'
    })
  }
}
</script>
