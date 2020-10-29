<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
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

</style>
