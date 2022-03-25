<template>
  <div>
    <TopPiece></TopPiece>
    <nuxt class="bg-indigo-400"/>
    <BottomPiece />
  </div>
</template>

<script>
import TopPiece from "../components/header.vue"
import BottomPiece from "../components/footer.vue"
import NavBar from "../components/NavBar.vue"

export default {
    components: { TopPiece, BottomPiece}

}
</script>
<style>
body{
  background-color: rgba(129, 140, 248);
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
