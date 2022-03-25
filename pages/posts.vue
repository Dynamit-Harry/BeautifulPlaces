<template>
  <div class="inline-flex text-center 2xl:text-center relative left-64 min-h-screen bg-indigo-400">
    <nuxt-content :document="markdown"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    let markdown = await $content('1').fetch()

    return {
      markdown
    }
  }
}
</script>