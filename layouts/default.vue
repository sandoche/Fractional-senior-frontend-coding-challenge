<template>
  <div class="bg-slate-200">
    <TheNavbar />
    <base-container>
      <main class="py-8">
        <Nuxt />
      </main>
    </base-container>
    <TheSearchBox />
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>
