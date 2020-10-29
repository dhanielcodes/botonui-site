<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
    <h1 class="watermark">Botón</h1>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import { gsap } from "gsap"


export default {
  name: 'App',
  components: {
    Nav
  },
  mounted() {
    let tl = gsap.timeline()
    tl.from('.watermark', 1, {
            ease: 'expo',
            opacity: 1,
            delay: 2,

    })
    tl.from('.watermark', 1, {
          top: '10%',
          ease: 'expo',

    })
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
  .watermark{
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 350px;
    opacity: 3%;
    z-index: -1;
  }
</style>
