<template>
    <div>
        <div class="main">
            <h1>Botón.</h1>
            <router-link to="/docs"><button class="docs_link">Get started</button></router-link>
        </div> 
        <div class="misc">
            <h2 class="mis">Get amazing button and hover styles for your website and webapp UIs.</h2>
            <div class="btns mis">
                <a href="#"><button class="docs_link">Download</button></a>
                <a href="#"><button class="docs_link">CDN</button></a>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap"

export default {
    mounted() {
        let tl = gsap.timeline({delay: 3})

        tl.from('.main', 1, {
            opacity: 0,
            ease: 'expo'
        })
        .from('.misc', 1, {
            transform: 'scaleY(0)',
            ease: "expo"
        })
        .from('.mis', 1, {
            transform: "scaleY(0)",
            ease: "expo"
        },"-=.5")
    },
}
</script>

<style scoped>
.main{
    text-align: center;
    margin-top: 20vh
}
.main h1{
    font-size: 50px
}
.docs_link{
    padding: 15px 30px;
    border-radius: 10px;
    text-decoration: none;
    background: #46F496;
    color: white;
    margin-top: 20px;
    border: none;
    outline: none;
    font-size: 20px;
    cursor: pointer;
}
.misc{
    width: 100%;
    height: 45vh;
    background: #789EB2;
    border-radius: 200px 200px 0 0;
    text-align: center;
    padding: 35px;
    color: white;
    position: absolute;
    bottom: 0;
}
.misc h2{
    width: 400px;
    margin: auto;
}
.btns{
    margin-top: 30px
}
.btns .docs_link{
    margin: 0 10px;
    width: 150px;
    margin-bottom: 10px;
}
@media screen and (max-width: 600px){
    .misc h2{
        font-size: 16px;
        width: 90%;
    }
    .misc{
        border-radius: 100px 100px 0 0;
    }
}
</style>