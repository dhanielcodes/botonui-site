<template>
    <div class="sponsor">
    <h1 class="watermark">Botón</h1>

        <a href='https://www.patreon.com/devdanielcodes' target="_blank">Sponsor this project</a>

        <img src="../assets/sponsor.svg" alt="" srcset="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sponsor{
    color: #000;
    display: grid;
    width: 100%;
    height: 80vh;
    place-items: center;

    
}
a{
    color: white;
    padding: 20px;
    background-color: #789EB2;
    font-size: clamp(20px, 5vw, 60px);
    width: 60%;
    text-align: center;
    border-radius: 100px;
    margin: auto;
    text-decoration: none;
    font-weight: 600;
}  

img{
    position: absolute;
    bottom: 0;
    left: 0;
}
 .watermark{
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 350px;
    opacity: 10%;
    z-index: -1;
  }
</style>