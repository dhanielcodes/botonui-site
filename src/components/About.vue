<template>
    <div class="about">
        <div class="team">
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
            <main>
                <img class="mm dev" src="../assets/peter.svg" alt="" srcset="">
                <h2 class="mm">Amugen Peter</h2>
                <p class="mm">Co-Developer</p>
                <div class="link mm">
                    <a href="https://twitter.com/daniel_adekoya_" target="_blank"><img src="../assets/twitter.svg" alt="" srcset=""></a>
                    <a href="https://www.linkedin.com/in/daniel-adekoya-010810192/" target="_blank"><img src="../assets/linkedin.svg" alt="" srcset=""></a>
                    <a href="https://www.instagram.com/danieladekoya_/" target="_blank"><img src="../assets/instagram.svg" alt="" srcset=""></a>
                    <a href="https://devdanielcodes.vercel.app/" target="_blank"><img src="../assets/link.svg" alt="" srcset=""></a>
                </div>
            </main>
        </div>
        
        <div class="side">
            <h1>Developers.</h1>
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
    text-align: center
}
.team{
    display: flex;
    margin-top: 70px;
    flex-wrap: wrap;
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
    position: fixed;
    bottom: 0
}
@media screen and (max-width: 615px){
    .side{
        position: relative;
    }
}
</style>