<script setup lang="ts">

const currentItem = ref(0);

const {add} = useUtils(); //composable test//

// could use a file and a for loop to add new item freely
const item1 = new item("Cat in the Box", 25.90, description1, '/image/1.jpg');
const item2 = new item("Dune Imperium", 54.50, description2, '/image/2.jpg');
const item3 = new item("Slay the Spire", 109.90, description3, '/image/3.jpg');
const item4 = new item("Sleeping Gods", 118.95, description4, '/image/4.jpg');
const item5 = new item("Love Letter", 11.95, description5, '/image/5.jpg');

const items = [item1, item2, item3, item4, item5];

const utils = useUtils();
</script>

<template>
  <div>
    <h1 class="flex pt-10 justify-center items-center text-5xl">
      Shop
    </h1>
    <p class=" pt-5 flex justify-center items-center">
      Browse our hand-picked best seller !
    </p>


    <div class="flex items-center w-full justify-around">
      <div>
      <div class=" text-4xl"> {{ items[currentItem].name }}</div>
      <div > {{ items[currentItem].price }} €</div>
      </div>

      

      <div class="flex pt-5 justify-center items-center">
        <div class="pr-10">
          <Button v-if="currentItem > 0" v-on:click="currentItem--">&lt;</Button>
          <Button class=" bg-gray-500 hover:bg-gray-500" v-else>&lt;</Button>
        </div>
        <Card class="w-[600px]   flex justify-center items-center">
          <NuxtImg class="" :src="items[currentItem].image" width="auto" height="500" />
          <div class="whitespace-pre-wrap flex p-2 justify-center items-center">  {{ items[currentItem].description }} </div>
        </Card>
        <div class="px-10">
          <Button v-if="currentItem < 4" v-on:click="currentItem++">&gt;</Button>
          <Button class=" bg-gray-500 hover:bg-gray-500" v-else>&gt;</Button>
        </div>
      </div>
      <Button v-on:click="add(item1)">add to cart</Button>


    </div>













    <!-- <div v-for="(prices , index) in ItemPrice" class="flex pt-8 justify-center items-center">
      {{ItemPrice[index]}}
    </div>  !!v-for Test!!    -->

  </div>

</template>