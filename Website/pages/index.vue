<script setup lang="ts">
import { toast } from 'vue-sonner'
const { add, remove, cartItems, getTotalPrice } = useUtils(); //composable//
const currentItem = ref(0);

// could use a file and a for loop to add new item freely
const item1 = new item("Cat in the Box", 25.90, description1, '/image/1.jpg');
const item2 = new item("Dune Imperium", 54.50, description2, '/image/2.jpg');
const item3 = new item("Slay the Spire", 109.90, description3, '/image/3.jpg');
const item4 = new item("Sleeping Gods", 118.95, description4, '/image/4.jpg');
const item5 = new item("Love Letter", 11.95, description5, '/image/5.jpg');

const items = [item1, item2, item3, item4, item5];

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
    <div class="flex justify-end p-5">
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">
            My Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-70">
          <div class="grid gap-4">
            <div class="flex grid gap-5">
              <div v-for="(cartItem, index) in cartItems" :key="index">{{ cartItem.price }}€ {{ cartItem.name }}
                <Button @click="remove(index)">X</Button>
              </div>
            </div>
          </div>
          <div class="flex pt-5 grow items-center justify-end pr-3">
            <div class="flex grow justify-start"> {{ getTotalPrice() }} €</div>
            <Button variant="outline" @click="handleToast()">
              Buy
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <h1 class=" flex justify-center items-center">
      <DefaultTitle>
        Shop
      </DefaultTitle>
    </h1>
    <p class=" pt-5 flex justify-center items-center">
      Browse our hand-picked best seller !
    </p>

    <div class="flex items-center w-full justify-around">
      <div class="">
        <div class=" text-4xl"> {{ items[currentItem].name }}</div>
        <div class=" pt-5 flex justify-center text-4xl"> {{ items[currentItem].price }} €</div>
      </div>

      <div class="flex pt-5 justify-center items-center">
        <div class="pr-10">
          <Button v-if="currentItem > 0" v-on:click="currentItem--">&lt;</Button>
          <Button class=" bg-gray-500 hover:bg-gray-500" v-else>&lt;</Button>
        </div>
        <Card class="w-[600px]   flex justify-center items-center">
          <NuxtImg class="" :src="items[currentItem].image" width="auto" height="500" />
          <div class="whitespace-pre-wrap flex p-2 justify-center items-center"> {{ items[currentItem].description }}
          </div>
        </Card>
        <div class="px-10">
          <Button v-if="currentItem < 4" v-on:click="currentItem++">&gt;</Button>
          <Button class=" bg-gray-500 hover:bg-gray-500" v-else>&gt;</Button>
        </div>
      </div>
      <div>
        <Button class="text-3xl w-40 h-20" v-on:click="add(items[currentItem])">add to cart</Button>
      </div>
    </div>
  </div>
</template>