<template>
    <div class="sponsor">
        <a href='#'>Sponsor this project</a>

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

</style>