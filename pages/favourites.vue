<template>
  <div>
    <base-alert v-if="error" class="mb-8">{{ $t('generic.error') }}</base-alert>
    <CoinsTableLoading v-if="loading && coins.length === 0" />
    <CoinsTable
      v-else-if="favourites.length > 0"
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
  computed: {
    ...mapGetters({
      favourites: 'list/favourites',
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
