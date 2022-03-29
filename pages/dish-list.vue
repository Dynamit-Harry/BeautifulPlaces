<template>
<div class="min-h-screen bg-indigo-400 mb-48">
    <div class="flex flex-wrap justify-center relative top-24">
    <div @click="goToDish(destination.id)" class="w-64 m-8 shadow-2xl" v-for="destination in places" :key="destination.id">
      <DishListItem :item="destination"></DishListItem>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$content}) {
    let places = await $content('places').sortBy('id', 'desc').without(['body']).fetch()
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