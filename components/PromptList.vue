<template>
  <h2 class="text-center py-20 font-secondary text-white/20 font-bold bg-[#121212]">PromptPilot</h2>
  <div class="card__wrapper">
    <NuxtLink :to="`/prompts/${prompt.id}`" v-if="prompts" v-for="prompt in prompts" :style="{ backgroundImage: `url(${prompt.image})` }" class="card ring-white hover:ring-2 bg-no-repeat">
      <div class=" px-6 pb-4 flex items-end font-semibold bg-gradient-to-t from-black/50 w-full h-1/4 justify-center">
        <p class=" card__text  text-center">{{ prompt.title }}</p>
      </div>
    </NuxtLink>
</div>
            
</template>

<script setup>
    const { data: prompts } = await useFetch('https://fakestoreapi.com/products')
    const { prompt } = defineProps(['prompt'])
</script>

<style lang="scss" scoped>
  .card__wrapper{
      margin: 0 15px;
      display: flex;
      flex-wrap: wrap;
  }

  .card__text{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>