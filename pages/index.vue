<template>
<div class="min-h-screen bg-indigo-400">
  <div class="bg-indigo-400 text-center border-rounded">
    <p class="text-xl mt-12">Have you ever dreamed about flying away to an exotic island?</p>
    <p class="text-xl mt-6">Are you having a hard time finding the destination that is right for you?</p>
    <p class="text-xl mt-6">This website will help!</p>
    <p class="text-xl mt-6">Here you wil find lots beautiful and exotic destinations around the world</p>
    <p class="text-xl mt-6">To move around the website, use the navigation section in the top right corner!</p>
  </div>
<div class="flex flex-wrap justify-center relative top-16">
<div class="text-center absolute ">
  <p class="text-xl">These are our latest posts: </p>
</div>
  <div @click="goToDish(destination.id)" class="w-80 m-4 mt-10" v-for="destination in places" :key="destination.id">
      <DishListHome :item="destination"></DishListHome>
      </div>
    </div>
</div>
</template>

<script>
export default {
name: 'IndexPage',
  async asyncData({$content}) {
    let places = await $content('places').sortBy('id', 'desc').limit(3).without(['body']).fetch()
    return {
      places
    }
  },
  methods: {
    goToDish(id) {
      this.$router.push('/places/'+id)
    }
  }
}
</script>
