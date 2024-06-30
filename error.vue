<template>
  <div class="mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-7xl font-bold">Ooops..."></p>
    <p class="mt-7 text-7xl font-bold">{{ error.message }}</p>
  </div>
</template>

<script setup>
    defineProprs(['error'])
</script>

<style lang="scss" scoped>

</style>