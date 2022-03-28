<template>
<div class="text-center object-center w-64">
    <img :src="item.image" alt="destination image" class="h-80 w-64 object-cover" >
    <h3 class="relative">{{item.title}}</h3>
    <p class="text-center">{{item.description}}</p>
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