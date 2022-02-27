<template>
  <div>
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div>
        <base-card>
          <div class="flex flex-row mb-8">
            <img :src="image" class="w-16 h-16 mr-6" :alt="`Icon ${name}`" />
            <div>
              <h1 class="text-4xl bolder text-gray-900 mb-1">{{ name }}</h1>
              <p class="text-xl text-gray-500 uppercase">{{ symbol }}</p>
            </div>
            <div class="flex-1 text-right">
              <p class="text-4xl bolder text-gray-900 mb-2">
                {{ price | formatDollar }}
              </p>
              <p class="text-sm text-gray-500">
                {{ $t('coin.marketCap') }}
                {{ marketCap | formatDollar }}
              </p>
            </div>
          </div>
          <div>
            <base-button-link :url="coingecko">
              {{ $t('coin.coingecko') }}
            </base-button-link>
            <base-button-link v-if="website" :url="website">
              {{ $t('coin.website') }}
            </base-button-link>
          </div>
        </base-card>
        <CoinMarketData :data="marketData" />
      </div>
      <base-card> <CoinMarketChart :coin="id" /> </base-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import formatDollar from '@/filters/formatDollar'

export default {
  filters: {
    formatDollar
  },
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
    }),
    id() {
      return this.basicInfo.id || this.marketInfo.id
    },
    name() {
      return this.basicInfo.name || this.marketInfo.name
    },
    image() {
      return (
        this.basicInfo.image ||
        (this.marketInfo.image && this.marketInfo.image.large)
      )
    },
    symbol() {
      return this.basicInfo.symbol || this.marketInfo.symbol
    },
    price() {
      return (
        this.basicInfo.current_price ||
        (this.marketInfo.market_data &&
          this.marketInfo.market_data.current_price &&
          this.marketInfo.market_data.current_price.usd) ||
        0
      )
    },
    marketCap() {
      return (
        this.basicInfo.market_cap ||
        (this.marketInfo.market_data &&
          this.marketInfo.market_data.market_cap &&
          this.marketInfo.market_data.market_cap.usd) ||
        0
      )
    },
    coingecko() {
      return 'https://www.coingecko.com/en/coins/' + this.symbol
    },
    website() {
      return (
        this.basicInfo.website ||
        (this.marketInfo.links &&
          this.marketInfo.links.homepage &&
          this.marketInfo.links.homepage[0] !== '' &&
          this.marketInfo.links.homepage[0]) ||
        null
      )
    },
    marketData() {
      const marketData = []

      if (this.marketInfo.market_data) {
        marketData.push({
          name: this.$t('coin.market.evolution24'),
          value: this.marketInfo.market_data.price_change_percentage_24h
        })
        marketData.push({
          name: this.$t('coin.market.evolution7d'),
          value: this.marketInfo.market_data.price_change_percentage_7d
        })
        marketData.push({
          name: this.$t('coin.market.evolution14d'),
          value: this.marketInfo.market_data.price_change_percentage_14d
        })
        marketData.push({
          name: this.$t('coin.market.evolution30d'),
          value: this.marketInfo.market_data.price_change_percentage_30d
        })
      }

      return marketData
    }
  }
}
</script>
