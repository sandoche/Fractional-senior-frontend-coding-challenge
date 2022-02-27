<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="market_cap_rank"
                    >#</coin-table-sorting-button
                  >
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="name">
                    {{ $t('list.heading.coin') }}
                  </coin-table-sorting-button>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="current_price">
                    {{ $t('list.heading.price') }}
                  </coin-table-sorting-button>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button
                    field="price_change_percentage_24h"
                  >
                    {{ $t('list.heading.price_change_24h') }}
                  </coin-table-sorting-button>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="ath">
                    {{ $t('list.heading.ath') }}
                  </coin-table-sorting-button>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="ath_change_percentage">
                    {{ $t('list.heading.ath_change') }}
                  </coin-table-sorting-button>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <coin-table-sorting-button field="market_cap">
                    {{ $t('list.heading.market_cap') }}
                  </coin-table-sorting-button>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <coins-table-item
                v-for="(coin, index) of coins"
                :id="coin.id"
                :key="index"
                :rank="coin.market_cap_rank"
                :name="coin.name"
                :symbol="coin.symbol"
                :price="coin.current_price"
                :price-change24h="coin.price_change_percentage_24h"
                :ath="coin.ath"
                :ath-change="coin.ath_change_percentage"
                :market-cap="coin.market_cap"
                :image="coin.image"
              ></coins-table-item>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
