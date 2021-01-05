<template>
  <div id="app">

    <Footer />
    <router-view/>
  </div>

</template>

<script>

  import Footer from "@/components/Navigation/Footer"

  export default {
    components : {
      Footer,
    },
    // created:{
      
    // }
  }
</script>
<style lang="scss"></style>