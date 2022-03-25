<template>
  <div class="bg-indigo-400">
    <div class="w-1/2 mx-auto relative top-24 mb-48">
    <div class="text-center absolute">
      <p class="text-4xl">{{destination.id}}</p>
    </div>
      <img :src="destination.image" />
      <h1 class="text-5xl mt-2">{{destination.title}}</h1>
      <p>{{destination.description}}</p>
      <nuxt-content :document="destination"></nuxt-content>
    </div>
  </div>
</template>
<script>
export default {
    async asyncData({$content, params}) {

        let destination = await $content('places/destination'+params.id).fetch()
        console.log(destination)

        return {
            destination
        }
    },
}
</script>