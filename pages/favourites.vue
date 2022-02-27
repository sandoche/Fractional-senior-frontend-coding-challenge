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
