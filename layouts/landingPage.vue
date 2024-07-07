<template>
    <div>
      <header>
          <nav>
              <ul>
                  <li><NuxtLink to="/">Home</NuxtLink></li>
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