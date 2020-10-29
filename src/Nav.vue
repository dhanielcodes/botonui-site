<template>
    <div class="nav">   
        <h1 class="nav_logo"> <a href="/">Botón.</a></h1>
        <ul class="nav_links">
            <li><router-link to="/sponsor">Sponsor</router-link></li>
            <li><router-link to="/docs">Docs</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
</template>

<script>
import { gsap } from "gsap"

export default {
    setup () {
        

        return {}
    },
    mounted() {
    const tl = gsap.timeline({})
        tl.from('.nav', 1, {
            opacity: 0,
            ease: 'expo',
            delay: 5,
        })
  },
}
</script>

<style scoped>
.router-link-active::after{
    content: "";
    padding: 5px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    background: #789EB2;
}
.router-link-active{
    position: relative;
}
.nav{
    width: 100%;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto
}
.nav_logo a{
    text-decoration: none;
    color: black;
    font-size: 24px;
}
.nav_links{
    display: flex;
    justify-content: space-around;
    align-items: center
}
.nav_links li{
    margin: 0px 20px;
    list-style: none;
}
.nav_links li a{
    text-decoration: none;
    color: black;
}
@media screen and (max-width: 600px){
    .nav_links{
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 0;
        margin: 20px;
    }
    .nav_links li{
        margin-bottom: 10px;
    }
}
</style>