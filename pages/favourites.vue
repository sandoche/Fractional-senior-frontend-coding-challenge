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
import loadStoredData from '@/mixins/loadStoredData'

export default {
  mixins: [loadStoredData],
  async fetch({ store }) {
    if (process.env.isBuilding) {
      await store.dispatch('list/fetchCoins')
    }
  },
  computed: {
    ...mapGetters({
      favourites: 'list/favourites',
      sorting: 'list/sorting',
      loading: 'list/loading',
      error: 'list/error'
    })
  },
  mounted() {
    this.$store.dispatch('list/fetchCoins')
  }
}
</script>
