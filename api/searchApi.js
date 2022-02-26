const fetchSearch = async ($axios, query) => {
  const searchResults = await $axios.$get(`/search?query=${query}`)
  return searchResults
}

export default {
  fetchSearch
}
