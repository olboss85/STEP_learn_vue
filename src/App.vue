<script setup>
import Footer from '@/components/Footer.vue'
import NavBar from './components/layouts/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>

    <NavBar />
    <router-view />
    <Footer></Footer>
</template>

<style>

body {
  width: 1170px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-bottom: 50px; 
}


</style>