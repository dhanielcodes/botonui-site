<template>
    <div class="about">
        <main>
            <img class="mm dev" src="../assets/dev.svg" alt="" srcset="">
            <h2 class="mm">Adekoya Daniel</h2>
            <p class="mm">Creator of Boton</p>
            <div class="link mm">
                <a href="https://twitter.com/daniel_adekoya_" target="_blank"><img src="../assets/twitter.svg" alt="" srcset=""></a>
                <a href="https://www.linkedin.com/in/daniel-adekoya-010810192/" target="_blank"><img src="../assets/linkedin.svg" alt="" srcset=""></a>
                <a href="https://www.instagram.com/danieladekoya_/" target="_blank"><img src="../assets/instagram.svg" alt="" srcset=""></a>
                <a href="https://devdanielcodes.vercel.app/" target="_blank"><img src="../assets/link.svg" alt="" srcset=""></a>
            </div>
        </main>
        <div class="side">
            <h1>Developer.</h1>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
main{
    width: 300px;
    margin: auto;
    margin-top: 70px;
    text-align: center

 
}
.dev{
    width: 200px;
}
.mm{
    margin-bottom: 10px;
}
.mm.link img{
    margin: 0 5px;
}
.side{
        color: white;
        padding: 20px;
        background-color: #789EB2;
        font-size: clamp(20px, 5vw, 50px);
        width: 100%;
        text-align: center;
        border-radius: 200px 200px 0 0;
        margin: auto;
        text-decoration: none;
        font-weight: 600;
        position: absolute;
        bottom: 0
}
</style>