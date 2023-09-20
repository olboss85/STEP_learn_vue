<script setup>
import Footer from '@/components/Footer.vue'
import CarAddModal from '@/components/CarAddModal.vue'  
import NavBar from './components/layouts/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <NavBar />
    <CarAddModal />
    <router-view />
    <Footer></Footer>
</template>

<style scoped>
body {
  width: 1170px;
  margin: 0 auto;
}

</style>