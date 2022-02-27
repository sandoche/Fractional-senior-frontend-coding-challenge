<template>
  <div>
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div>
        <base-card>
          <div class="flex mb-8">
            <img :src="image" class="w-16 h-16 mr-6" :alt="`Icon ${name}`" />
            <div>
              <h1
                class="
                  text-4xl
                  font-bolder
                  text-gray-900
                  mb-1
                  flex
                  items-center
                "
              >
                {{ name }}
              </h1>
              <p class="text-xl text-gray-500 uppercase">{{ symbol }}</p>
            </div>
            <div class="flex-1 text-right">
              <p
                class="
                  text-4xl
                  font-bolder
                  text-gray-900
                  mb-2
                  inline-flex
                  justify-end
                "
              >
                <span>{{ price | formatDollar }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="[
                    'h-10',
                    'w-10',
                    't-2',
                    'relative',
                    'cursor-pointer',
                    'fill-gray-300',
                    'hover:fill-yellow-500',
                    { 'fill-yellow-500': isFavourite }
                  ]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  @click="toggleFavorite(id)"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
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
        <CoinMarketData v-if="marketData.length > 0" :data="marketData" />
      </div>
      <base-card> <CoinMarketChart :coin="id" /> </base-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import formatDollar from '@/filters/formatDollar'
import loadStoredData from '@/mixins/loadStoredData'

export default {
  filters: {
    formatDollar
  },
  mixins: [loadStoredData],
  async fetch({ store, route }) {
    await store.dispatch('coin/fetchCoin', route.params.id)
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      basicInfo: 'coin/basicInfo',
      marketInfo: 'coin/marketInfo',
      loading: 'coin/loading',
      error: 'coin/error',
      favouritesIds: 'list/favouritesIds',
      marketData: 'coin/marketData'
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
      return 'https://www.coingecko.com/en/coins/' + this.id
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
    isFavourite() {
      return this.favouritesIds.includes(this.id)
    }
  },
  methods: {
    ...mapActions({ toggleFavorite: 'list/toggleFavorite' })
  }
}
</script>
