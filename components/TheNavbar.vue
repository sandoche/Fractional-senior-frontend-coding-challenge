<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white shadow">
    <base-container>
      <div>
        <div class="relative flex justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleMenu"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="
              flex-1 flex
              items-center
              justify-center
              sm:items-stretch sm:justify-start
            "
          >
            <nuxt-link to="/" class="flex-shrink-0 flex items-center">
              <img
                class="block h-6 w-auto rounded-full"
                src="/icon.png"
                alt="CoinSlim"
              />
              <p class="hidden lg:block ml-3">
                <span class="font-semibold text-xl tracking-tight"
                  >CoinSlim</span
                >
              </p>
            </nuxt-link>
            <div class="desktop-menu hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <nuxt-link
                to="/"
                class="
                  inline-flex
                  items-center
                  px-1
                  pt-1
                  border-b-2
                  text-sm
                  font-medium
                  border-transparent
                  text-gray-500
                  hover:border-gray-300 hover:text-gray-700
                "
              >
                {{ $t('navigation.coins') }}
              </nuxt-link>
              <nuxt-link
                to="/favourites"
                class="
                  inline-flex
                  items-center
                  px-1
                  pt-1
                  border-b-2
                  text-sm
                  font-medium
                  border-transparent
                  text-gray-500
                  hover:border-gray-300 hover:text-gray-700
                "
              >
                {{ $t('navigation.favourites') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              sm:static sm:inset-auto sm:ml-6 sm:pr-0
            "
          >
            <button
              type="button"
              class="
                bg-white
                p-1
                rounded-full
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </base-container>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      id="mobile-menu"
      :class="['mobile-menu', 'sm:hidden', { hidden: !menuOpen }]"
    >
      <div class="pt-2 pb-4 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <nuxt-link
          to="/"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
          "
          >{{ $t('navigation.coins') }}</nuxt-link
        >
        <nuxt-link
          to="/favourites"
          class="
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
          "
          >{{ $t('navigation.favourites') }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="postcss" scoped>
.desktop-menu a.nuxt-link-exact-active {
  @apply border-indigo-500 text-gray-900;
}

.mobile-menu a.nuxt-link-exact-active {
  @apply bg-indigo-50 border-indigo-500 text-indigo-700;
}
</style>