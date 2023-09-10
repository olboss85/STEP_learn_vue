<script setup>
import ButtonDelete from '@/components/ButtonDelete.vue'
import CarList from '@/components/CarList.vue';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Background from '@/components/Background.vue' 
import CarTable from '@/components/CarTable.vue' 
import Sidebar from '@/components/SideBar.vue';
import NavBar from './components/layouts/NavBar.vue';

const cars = [
  {
    brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    criticalNumber: 1,
    image: "https://avatars.mds.yandex.net/i?id=a544e40a89a92a7fdde1e7fa0bf93c643faefade-10209290-images-thumbs&n=13", 
  },
  {
  brand: "Audi",
    price: "1000000",
    year: 2002,
    volume: 2.4,
    color: "#008000",
    criticalNumber: 2,
    image: "https://avatars.mds.yandex.net/i?id=18051e7592f438df2b79bceafdd52cac-5209520-images-thumbs&n=13",
  },
  {
  brand: "Mercedes",
    price: "4000000",
    year: 2022,
    volume: 3.6,
    color: "#000000",
    criticalNumber: 3,
    image: "https://avatars.mds.yandex.net/i?id=8c1f33d58544089a2c2c16bdeffaa5f1ec030f7c-8485874-images-thumbs&n=13",
  },
  {
  brand: "Zeekr",
    price: "5000000",
    year: 2023,
    volume: 2.4,
    color: "#FFA500",
    criticalNumber: 4,
    image: "https://avatars.mds.yandex.net/i?id=6e6846f9ba8b5c1c4559ee0c102bd7e057dc5c8f-9852567-images-thumbs&n=13"
  },
  {
  brand: "Haval Jolion",
    price: "2000000",
    year: 2021,
    volume: 2.4,
    color: "#4682B4",
    criticalNumber: 5,
    image: "https://avatars.mds.yandex.net/i?id=fc34c56a5315cc6ac98cba7f6c25380057fa86e1-8453627-images-thumbs&n=13"
  },
  {
  brand: "Range Rover",
    price: "2000000",
    year: 2023,
    volume: 2.4,
    color: "#808080",
    criticalNumber: 5,
    image: "https://avatars.mds.yandex.net/i?id=da14b177a406251e0b3cb8cce717703d2fab11e8-9151245-images-thumbs&n=13"
  },
]

</script>

<template>
  <Background> 
 
    <Header></Header>
    <NavBar />
    <Sidebar />
    <CarList :cars="cars" />
    <CarTable :cars="cars" />
    <Footer></Footer>
  </Background>
</template>

<style scoped>
</style>