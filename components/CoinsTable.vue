<template>
  <div>
    {{ coins }}
  </div>
</template>

<script>
export default {
  props: {
    coins: {
      type: Array,
      required: true
    },
    sorting: {
      type: Object,
      required: true
    }
  }
}
</script>
