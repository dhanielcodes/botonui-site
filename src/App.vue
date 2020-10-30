<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
    <a class="git" href="https://github.com/devdanielcodes/botonui" target="_blank"><img src="./assets/github.svg" alt="" srcset=""></a>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  mounted() {
    
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  *{
    font-family: 'quicksand';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
.git{
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
