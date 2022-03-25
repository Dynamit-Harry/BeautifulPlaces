<template>
<div class="text-center">
  <h3 class="relative right-8 text-2xl">{{item.title}}</h3>
  <img :src="item.image" alt="destination image" class="h-80 w-64 object-cover" >
</div>
</template>

<script>
export default {
    props:['item'],
    data() {
        return {

        }
    }
}
</script>