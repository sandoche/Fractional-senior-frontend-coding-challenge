<template>
  <div class="px-4 py-5 sm:p-6">
    <dt class="text-base font-normal text-gray-900">{{ $t(name) }}</dt>
    <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
      <div
        :class="[
          'flex',
          'items-baseline',
          'text-2xl',
          'font-semibold',
          {
            'text-red-500': value < 0,
            'text-green-500': value > 0
          }
        ]"
      >
        {{ value | formatPercentage }}
      </div>
    </dd>
  </div>
</template>

<script>
import formatPercentage from '@/filters/formatPercentage'

export default {
  filters: {
    formatPercentage
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>