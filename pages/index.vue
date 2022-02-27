<template>
  <div>
    <CoinsTable :coins="coins" :sorting="sorting" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    // for a better seo, without blocking the performance
    if (store.state.list.coins.length === 0) {
      await store.dispatch('list/fetchCoins')
    }
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      coins: 'list/coins',
      sorting: 'list/sorting',
      loading: 'list/loading',
      error: 'list/error'
    })
  },
  mounted() {
    this.$store.dispatch('list/initState')
    this.$store.dispatch('list/fetchCoins')
  }
}
</script>
