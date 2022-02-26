<template>
  <div>
    {{ coins }}
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
      coins: 'list/coins',
      sorting: 'list/sorting',
      loading: 'list/loading',
      error: 'list/error'
    })
  }
}
</script>
