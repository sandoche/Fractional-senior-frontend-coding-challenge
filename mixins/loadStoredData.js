export default {
  beforeMount() {
    this.$store.dispatch('list/initState')
  }
}

