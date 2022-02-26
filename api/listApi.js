const fetchCoins = async ($axios) => {
  const coins = await $axios.$get('/coins/markets?vs_currency=usd&order=market_cap_desc')
  return coins
}

export default {
  fetchCoins
}
