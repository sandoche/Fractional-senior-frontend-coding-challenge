const fetchCoin = async ($axios, id) => {
  const coin = await $axios.$get(`/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
  return coin
}

export default {
  fetchCoin
}