<script setup>
import ButtonDelete from '@/components/ButtonDelete.vue'
import CarList from '@/components/CarList.vue';
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue' 
import CarTable from '@/components/CarTable.vue' 
import NavBar from './components/layouts/NavBar.vue';
import CarAddModal from './components/CarAddModal.vue';

</script>

<template>
  <!-- VUE ROOTER  -->
<!-- <RouterLink to="'/">Главная страница</RouterLink>
  или можно записать как 
  @click='$router.push({ name: 'Home', params: { id: 4 } })'
  <RouterView /> -->
  <!-- //***//// -->
  <Background> 
    <NavBar />
    <CarAddModal />
    <CarList />
    <CarTable />
    <Footer></Footer>
  </Background>
</template>

<style scoped>
body {
  width: 1170px;
  margin: 0 auto;
}

</style>