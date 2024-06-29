<template>
    <div>
      <header class="shadow-sm bg-red-100">
          <nav>
              <ul>
                  <li><NuxtLink to="/">Home</NuxtLink></li>
                  <li><NuxtLink to="/about">About</NuxtLink></li>
                  <li><NuxtLink to="/prompts">Prompts</NuxtLink></li>
              </ul>
          </nav>
      </header>
      <div>
        <slot />
      </div>
    </div>
  </template>


<style lang="scss" scoped>
    .router-link-exact-active {
        color: aquamarine;
    }
</style>