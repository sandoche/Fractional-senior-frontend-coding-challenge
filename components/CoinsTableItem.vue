<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ rank }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            :src="image"
            :alt="`icon ${name}`"
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{ name }}</div>
          <div class="text-sm text-gray-500 uppercase">{{ symbol }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ price | formatDollar }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <base-change-tag :change="priceChange24h" />
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ ath | formatDollar }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ athChange | formatPercentage }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ marketCap | formatDollar }}
    </td>
  </tr>
</template>

<script>
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
  }
}
</script>
