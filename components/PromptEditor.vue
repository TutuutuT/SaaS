<template>
    <div class="card">
        <h1>{{ prompt.title }}</h1>
    </div>
</template>

<script setup>
    const { prompt } = defineProps(['prompt'])
</script>

<style lang="scss" scoped>

</style>