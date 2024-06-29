<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in prompts">
                <PromptCard :prompt="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'prompts'
    })

    //fetch prompts
    const { data: prompts } = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>