<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
      <h1>Modelo Parcial</h1>
      <hr />
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
 
}
 h1 {
    color: black;    
  }

</style>
