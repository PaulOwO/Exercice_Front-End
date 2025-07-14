<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div>
  <h1 class="text-3xl font-bold underline flex justify-center items-center">
   Contact page
  </h1>

  <div class="flex justify-center items-center gap-3"> <NuxtLink to="/pdf/CV_PB.pdf" external>
    My CV
  </NuxtLink>

  <NuxtLink to="https://paulbreuza.wixsite.com/paul-breuza">
    My Portfolio
  </NuxtLink>
  </div>
  </div>
  
</template>