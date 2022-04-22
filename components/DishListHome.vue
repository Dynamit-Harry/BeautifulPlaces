<template>
<div class="text-center object-center mb-12">
  <h3 class="text-2xl text-center flex inline-flex">{{item.title}}</h3>
  <img :src="item.image" alt="destination image" class="h-80 w-64 object-cover object-center flex inline-flex" >
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