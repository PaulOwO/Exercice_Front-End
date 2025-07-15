<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold flex justify-center items-center">
      <DefaultTitle>
        Contact
      </DefaultTitle>
    </h1>
    <p class="text-2xl flex justify-center items-center pt-10">
      Stay in touch
    </p>
    <div class=" flex pt-10 justify-center items-center gap-3">
      <NuxtLink target="_blank" to="/pdf/CV_PB.pdf" external>
        <Button class="h-10 text-3xl">My CV</Button>
      </NuxtLink>
      <NuxtLink target="_blank" to="https://paulbreuza.wixsite.com/paul-breuza">
        <Button class="h-10 text-3xl">
          My Portfolio
        </Button>
      </NuxtLink>
    </div>
    <p class="text-2xl flex justify-center items-center pt-10">
      Mail : paul.breuza@gmail.com
    </p>
  </div>
</template>