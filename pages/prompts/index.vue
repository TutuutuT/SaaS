<template>
        <section class="max-w-[1420px] mx-auto">
            <PromptList/>
        </section>
</template>

<script setup>
    definePageMeta({
        layout: 'prompts'
    })

    useHead({
        title: 'PromptPilot | List',
    })
</script>

<style lang="scss" scoped>
    .card-wrapper{
        
    }
</style>