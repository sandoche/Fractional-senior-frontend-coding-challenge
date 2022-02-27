<template>
  <!-- Active: "bg-gray-100" -->
  <nuxt-link
    id="option-1"
    :to="`/coins/${id}`"
    class="
      the-seach-box-result
      group
      flex
      select-none
      rounded-xl
      p-3
      cursor-pointer
    "
    role="option"
    tabindex="-1"
    @click.native="clearAndHide"
  >
    <div
      class="
        flex
        h-10
        w-10
        flex-none
        items-center
        justify-center
        rounded-lg
        bg-slate-100
      "
    >
      <img :src="image" class="h-6 w-6" :alt="`icon ${name}`" />
    </div>
    <div class="ml-4 flex-auto">
      <!-- Active: "text-gray-900", Not Active: "text-gray-700" -->
      <p class="name text-sm font-medium text-gray-700">{{ name }}</p>
      <!-- Active: "text-gray-700", Not Active: "text-gray-500" -->
      <p class="symbol text-sm text-gray-500">
        {{ symbol }}
      </p>
    </div>
    <div v-if="rank" class="text-gray-500">#{{ rank }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
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
    rank: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    clearAndHide: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.the-seach-box-result {
  &:hover {
    @apply bg-gray-100;

    & .name {
      @apply text-gray-900;
    }

    & .symbol {
      @apply text-gray-700;
    }
  }
}
</style>