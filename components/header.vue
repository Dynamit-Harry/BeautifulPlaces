<template>
<nav class="justify-between flex-wrap bg-indigo-500 p-6">
  <div class="text-center flex-shrink-0 text-black mr-6">
  <div>
  <img src="../static/logo full.png" alt="Our Logo" class="flex inline-flex justify-center object-center h-160 w-160">
  </div>
  <div>
    <span class="text-center font-semibold text-3xl tracking-tight mt-2 relative left-3">Beautiful Places</span>
  </div>
  </div>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow text-center">
      <NuxtLink to="/" class="text-center block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </NuxtLink>
      <NuxtLink to="/dish-list" class="text-center block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Posts
      </NuxtLink>
      <NuxtLink to="/about-us" class="text-center block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        About Me
      </NuxtLink>
    </div>
  </div>
</nav>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  data() {

  },
  methods: {
    SignIn() {
       this.$modal.show({
         type: '',
          title: 'Sign In',
          body: '<form> Username: <input type="text" name="Username" placeholder="Type Your Username"> <br><br> Password: <input type="text" name="Password" placeholder="Type Your Password"> </form>',
          primary: {
            label: 'Sign In',
            theme: 'blue',
            action: () => {console.log("Sucess!")},
          }
        })
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
 border-bottom: 2px solid blue;
}
</style>