<template>
  <div>
    <CoinsTable :coins="coins" :sorting="sorting" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loadStoredData from '@/mixins/loadStoredData'

export default {
  mixins: [loadStoredData],
  async fetch({ store }) {
    await store.dispatch('list/fetchCoins')
  },
  computed: {
    ...mapGetters({
      coins: 'list/coins',
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
