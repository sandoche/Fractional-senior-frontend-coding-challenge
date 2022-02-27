<template>
  <a
    :href="url"
    target="_blank"
    class="
      inline-flex
      items-center
      px-4
      py-2
      rounded-md
      shadow-sm
      text-sm
      font-medium
      text-gray-800
      bg-gray-200
      hover:bg-gray-300
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>