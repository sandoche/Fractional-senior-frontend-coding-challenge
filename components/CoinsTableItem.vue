<template>
  <tr class="coin-table-item hover:bg-slate-50">
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="[
            'star',
            'h-5',
            'w-5',
            'mr-5',
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
        <span>{{ rank }}</span>
      </div>
    </td>
    <td class="whitespace-nowrap">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img
              class="h-10 w-10 rounded-full"
              :src="image"
              :alt="`icon ${name}`"
            />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900 name">{{ name }}</div>
            <div class="text-sm text-gray-500 uppercase">{{ symbol }}</div>
          </div>
        </div>
      </nuxt-link>
    </td>
    <td class="whitespace-nowrap">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        <div class="text-sm text-gray-900">{{ price | formatDollar }}</div>
      </nuxt-link>
    </td>
    <td class="whitespace-nowrap">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        <base-change-tag :change="priceChange24h" />
      </nuxt-link>
    </td>
    <td class="whitespace-nowrap text-sm text-gray-500">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        {{ ath | formatDollar }}
      </nuxt-link>
    </td>
    <td class="whitespace-nowrap text-sm text-gray-500">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        {{ athChange | formatPercentage }}
      </nuxt-link>
    </td>
    <td class="whitespace-nowrap text-sm text-gray-500">
      <nuxt-link
        :to="`/coins/${id}`"
        class="cursor-pointer px-6 py-4 inline-block"
      >
        {{ marketCap | formatDollar }}
      </nuxt-link>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import formatDollar from '@/filters/formatDollar'
import formatPercentage from '@/filters/formatPercentage'

export default {
  filters: {
    formatDollar,
    formatPercentage
  },
  props: {
    id: {
      type: String,
      required: true
    },
    rank: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    priceChange24h: {
      type: Number,
      required: true
    },
    ath: {
      type: Number,
      required: true
    },
    athChange: {
      type: Number,
      required: true
    },
    marketCap: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      favouritesIds: 'list/favouritesIds'
    }),
    isFavourite() {
      return this.favouritesIds.includes(this.id)
    }
  },
  methods: {
    ...mapActions({ toggleFavorite: 'list/toggleFavorite' })
  }
}
</script>
