<template>
<div class="text-center object-center">
    <img :src="item.image" alt="destination image" class="h-80 w-64 mt-4 object-cover relative left-4" >
    <h3 class="relative">{{item.title}}</h3>
    <p class="text-center ml-1 mr-1 mb-2">{{item.description}}</p>
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