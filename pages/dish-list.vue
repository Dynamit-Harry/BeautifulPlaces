<template>
<div class="min-h-screen bg-indigo-400 mb-48">
<!-- <select name="cars" id="cars">
  <option value="New">New</option>
  <option value="Old">Old</option>
  <option value="MaxW">Most viewed</option>
  <option value="MinW">Least viewed</option>
  <option value="RecUpd">Recently Updated</option>
</select> -->
<p class="flex inline-flex ml-2 mr-3">Sort By: </p>
<select v-model="selected">
   <option :selected="option.id==1" v-for="(option, index) in options" :value="option.id" >{{ option.label }}</option>
  </select>
    <div class="flex flex-wrap justify-center relative top-24">
    <div @click="goToDish(destination.id)" class="w-72 m-8 shadow-2xl bg-indigo-300" v-for="destination in places" :key="destination.id">
      <DishListItem :item="destination"></DishListItem>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import SortButton from '../components/sortBtn.vue'
export default {
  async asyncData({$content}) {
    let places = await $content('places').sortBy('id', 'desc').without(['body']).fetch()
    return {
      places
    }
  },
  data() {
    return {
      selected: null,
      options: [
        {id: 1, name: "new", label: "New"},
        {id: 2, name: "old", label: "Old"}
        ]
    }
  },
  methods: {
    goToDish(id) {
      this.$router.push('/places/'+id)
    },
  },
  watch: {
    selected: function(val) {
      console.log(val)
      if(val == 1) {
        this.places = this.places.reverse()
      } else if(val == 2) {
        this.places = this.places.reverse()
      }

    }
  }
}
</script>