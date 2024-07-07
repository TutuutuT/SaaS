<template>
  <div>
    <header class="flex items-center pt-6 pb-12">
      <div class="w-40 flex justify-center">
        <img src="../public/favicon.ico" class="w-12 h-12" >
      </div>
      <nav>
        <ul class="flex gap-2">
          <li><NuxtLink class="menu__item" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="menu__item" to="/about">About</NuxtLink></li>
          <li><NuxtLink class="menu__item" to="/prompts">Prompts</NuxtLink></li>
          <li><NuxtLink class="menu__item" to="/landingPage">Landing</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="w-40 fixed h-[100svh] z-50">
      <nav>
        <ul class="flex gap-2 flex-col items-center">
          <li class="flex items-center justify-center mt-28 mb-20">
            <NuxtLink
              class="menu__item__nav bg-[url('')] flex items-center justify-center"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                viewBox="0 0 18 18"
              >
                <title>chevron left</title>
                <g class="nc-icon-wrapper">
                  <path
                    d="M11.5,16c-.192,0-.384-.073-.53-.22l-6.25-6.25c-.293-.293-.293-.768,0-1.061L10.97,2.22c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-5.72,5.72,5.72,5.72c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
                    class="nc-icon-wrapper"
                  />
                </g>
              </svg>
            </NuxtLink>
          </li>

          <li class="flex items-center justify-center">
            <NuxtLink
              class="menu__item__nav bg-[url('')] flex items-center justify-center"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                viewBox="0 0 18 18"
              >
                <title>sparkle 3</title>
                <g class="nc-icon-wrapper">
                  <path
                    d="M3.025,5.623c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263Z"
                    data-color="color-2"
                  />
                  <path
                    d="M16.525,8.803l-4.535-1.793-1.793-4.535c-.227-.572-1.168-.572-1.395,0l-1.793,4.535-4.535,1.793c-.286,.113-.475,.39-.475,.697s.188,.584,.475,.697l4.535,1.793,1.793,4.535c.113,.286,.39,.474,.697,.474s.584-.188,.697-.474l1.793-4.535,4.535-1.793c.286-.113,.475-.39,.475-.697s-.188-.584-.475-.697Z"
                  />
                </g>
              </svg>
            </NuxtLink>
          </li>
          <li class="flex items-center justify-center">
            <NuxtLink class="menu__item__nav" to="/about">A</NuxtLink>
          </li>
          <li class="flex items-center justify-center">
            <NuxtLink class="menu__item__nav" to="/prompts">P</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="pl-40 w-full relative z-0 mt-28">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu__item {
  @apply px-8 py-4 rounded-full w-auto bg-[#202020] duration-300;
}

.menu__item__nav {
  @apply h-14 w-14 rounded-full bg-[#202020] duration-300;
  & svg {
    @apply fill-white;
  }
}

.router-link-exact-active {
  @apply text-[#121212] bg-white;
  & svg {
    @apply fill-[#121212];
  }
}
</style>
