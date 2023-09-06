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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s", 
  },
  {
  brand: "Audi",
    price: "1000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    criticalNumber: 2,
    image: "https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2019/December/16/audi-q3-sportback2.jpeg",
  },
  {
  brand: "Mercedes",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#00FF00",
    criticalNumber: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s",
  },
  {
  brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    criticalNumber: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s"
  },
  {
  brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    criticalNumber: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s"
  },
  {
  brand: "BMW",
    price: "2000000",
    year: 1994,
    volume: 2.4,
    color: "#FF0000",
    criticalNumber: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s"
  },
]

</script>

<template>
  
  <Background> 
    <NavBar />
    <Header></Header>
    <Sidebar />
    <CarList :cars="cars" />
    <CarTable :cars="cars" />
    <Footer></Footer>
  </Background>
</template>

<style scoped></style>