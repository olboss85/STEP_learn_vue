<script setup>
import ButtonDelete from '@/components/ButtonDelete.vue'
import CarList from '@/components/CarList.vue';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue' 
import Table from '@/components/Table.vue' 
</script>

<template>
  <Background> 
    <Header></Header>
    <ButtonDelete />
    <CarList />
    <Table />
    <Footer></Footer>
  </Background>
</template>

<style scoped></style>