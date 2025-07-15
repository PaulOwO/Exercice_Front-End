<script setup lang="ts">
const switchTheme = () => {
  document.documentElement.classList.toggle(
    "dark",
  );
}
</script>

<template>
  <div>
    <div class="flex pl-5 h-[100px] gap-2 items-center bg-gray-500">
      <img class="" src='/assets/logo.png' width="50" height="auto" />
      LudoShop
      <!-- can use chadcn separator -->
      <div class="text-4xl flex pb-2">|</div>
      <NuxtLink class=" pl-5 font-serif" to="/"> <Button class="bg-sky-500 hover:bg-sky-700">Shop</Button></NuxtLink>
      <NuxtLink class=" pl-5 font-serif" to="/about"><Button class="bg-sky-500 hover:bg-sky-700"> About page</Button>
      </NuxtLink>
      <NuxtLink class="pl-5 font-serif" to="/contact">
        <Button class="bg-sky-500 hover:bg-sky-700">
          Contact</Button>
      </NuxtLink>
      <div class="flex gap-10 grow items-center justify-end pr-2">
        <Switch @update:model-value="switchTheme()" />
      </div>
    </div>
    <slot />
  </div>
</template>
