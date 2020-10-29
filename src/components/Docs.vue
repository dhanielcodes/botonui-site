<template>
    <div>
    <h1 class="watermark">Botón</h1>
        
        &lt;h1&gt;Docs&lt;/h1&gt;
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
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