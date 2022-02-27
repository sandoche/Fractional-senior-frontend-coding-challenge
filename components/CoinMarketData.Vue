<template>
  <div>
    <dl
      class="
        mt-5
        grid grid-cols-1
        rounded-lg
        bg-white
        overflow-hidden
        shadow
        divide-y divide-gray-200
        md:grid-cols-4 md:divide-y-0 md:divide-x
      "
    >
      <CoinMarketDataItem
        v-for="(data, index) of data"
        :key="index"
        :name="data.name"
        :value="data.value"
      />
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
