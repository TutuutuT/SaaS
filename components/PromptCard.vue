<template>
    <div class="card text-center">
        <img :src="prompt.image" alt="prompt thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ prompt.title }}</p>
        <NuxtLink :to="`/prompts/${prompt.id}`" class="btn">View</NuxtLink>
    </div>
</template>

<script setup>
    const { prompt } = defineProps(['prompt'])
</script>

<style lang="scss" scoped>

.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}

</style>