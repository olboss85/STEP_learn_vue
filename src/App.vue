<script setup>
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue'  
import NavBar from './components/layouts/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <Background> 
    <NavBar />
    <router-view />
    <Footer></Footer>
  </Background>
</template>

<style scoped>
body {
  width: 1170px;
  margin: 0 auto;
}

</style>