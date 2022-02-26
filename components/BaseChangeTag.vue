<template>
  <span
    :class="[
      'px-2',
      'inline-flex',
      'text-sm',
      'leading-5',
      'font-semibold',
      'rounded-full',
      {
        'bg-red-100 text-red-800': change < 0,
        'bg-green-100 text-green-800': change > 0
      }
    ]"
    >{{ change | formatPercentage }}</span
  >
</template>

<script>
import formatPercentage from '@/filters/formatPercentage'

export default {
  filters: {
    formatPercentage
  },
  props: {
    change: {
      type: Number,
      required: true
    }
  }
}
</script>
