<script setup lang="ts">
import type { Title } from '#components';

import { toast } from 'vue-sonner'

const {cartItems,remove} = useUtils(); //composable test//




const switchTheme = () => {
  document.documentElement.classList.toggle(
  "dark",
);
}


const handleToast = () => {
  toast('Not Available', {
     action: {
     label: 'X',
     onClick: () => console.log('Undo'),
     },
  })
}
</script>


<template>
  <div>
    <div class="flex pl-5 h-[100px] gap-2 items-center bg-gray-500">
      <img class="" src='/assets/logo.png' width="50" height="auto" />
      LudoShop
      <!-- can use chadcn separator -->
      <div class="text-4xl flex pb-2">|</div>
      <NuxtLink class=" pl-5 font-serif" to="/"> <Button class="bg-sky-500 hover:bg-sky-700">Main Menu</Button></NuxtLink>
      <NuxtLink class=" pl-5 font-serif" to="/about"><Button class="bg-sky-500 hover:bg-sky-700"> About page</Button>
      </NuxtLink>
      <NuxtLink class="pl-5 font-serif" to="/contact">
          <Button class="bg-sky-500 hover:bg-sky-700">
            Contact</Button>
        </NuxtLink>
      <div class="flex gap-10 grow items-center justify-end pr-2">

        <Switch @update:model-value="switchTheme()"/>


        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">
              My Cart
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-60">
            <div class="grid gap-4">

              <div class="grid gap-2">

                <div v-for="cartItem in cartItems">{{ cartItem.name }}<Button @click="remove">X</Button>
                  
                </div>

              </div>
            </div>
            <div class="flex gap-2 grow items-center justify-end pr-5">
              <Button variant="outline" @click="handleToast()">
                Buy
              </Button>

            </div>
          </PopoverContent>
        </Popover>


        
        
      </div>
    </div>
    <slot />
  </div>

</template>

<!-- <style scoped>
.pt-1 pl-0 {
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 1rem;
  padding-left: 0rem;
}
</style> -->
