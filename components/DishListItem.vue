<template>
<div class="text-center object-center">
    <img :src="item.image" alt="destination image" class="h-80 w-64 object-cover" >
    <h3 class="relative right-8">{{item.title}}</h3>
    <p>{{item.description}}</p>
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