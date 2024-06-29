<template>
    <div>
        <PromptEditor :prompt="prompt" />
    </div>
</template>

<script setup>

    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch prompt
    const { data: prompt } = await useFetch(uri, { key: id })

    definePageMeta({
        layout: 'prompts'
    })

</script>

<style lang="scss" scoped>

</style>