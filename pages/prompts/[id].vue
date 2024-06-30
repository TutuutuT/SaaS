<template>

    <Head>
        <Title>PromptPilot | {{ prompt.title }}</Title>
    </Head>

    <div>
        <PromptEditor :prompt="prompt" />
        <p>{{ data }}</p>
    </div>
</template>

<script setup>

    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch prompt
    const { data: prompt } = await useFetch(uri, { key: id })

    if (!prompt.value) {
        throw createError({ statusCode: 404, statusMessage: 'Prompt not found' })
    }

    definePageMeta({
        layout: 'prompts'
    })

    const {data} = await useFetch('/api/prompts')
</script>

<style lang="scss" scoped>

</style>