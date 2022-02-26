<template>
  <div>
    {{ marketInfo }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store, route }) {
    await store.dispatch('coin/fetchCoin', route.params.id)
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      basicInfo: 'coin/basicInfo',
      marketInfo: 'coin/marketInfo',
      loading: 'coin/loading',
      error: 'coin/error'
    })
  }
}
</script>
