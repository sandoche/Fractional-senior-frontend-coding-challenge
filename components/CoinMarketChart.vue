<template>
  <div>
    <coingecko-coin-compare-chart-widget
      :coin-ids="coin"
      currency="usd"
      locale="en"
      height="200px"
    ></coingecko-coin-compare-chart-widget>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: String,
      required: true
    }
  },
  mounted() {
    const plugin = document.createElement('script')
    plugin.setAttribute(
      'src',
      '//widgets.coingecko.com/coingecko-coin-compare-chart-widget.js'
    )
    document.head.appendChild(plugin)
  }
}
</script>

<style lang="postcss">
svg .highcharts-title {
  display: none !important;
}
</style>
