<template>
  <div>
    <base-alert v-if="error && loading" class="mb-8">{{
      $t('generic.error')
    }}</base-alert>
    <CoinsTableLoading v-if="loading && coins.length === 0" />
    <CoinsTable v-else :coins="coins" :sorting="sorting" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loadStoredData from '@/mixins/loadStoredData'

export default {
  mixins: [loadStoredData],
  async fetch({ store }) {
    if (process.server) {
      await store.dispatch('list/fetchCoins')
    }
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
