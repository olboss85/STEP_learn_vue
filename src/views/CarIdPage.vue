<template>
    <Card v-if="auto">
      <template #header>
        <img :src="auto.image" class="car-image" />
      </template>
      <template #title>{{ auto.brand }}</template>
      <template #content>
        <p>Цена: {{ auto.price = `${parseInt(auto.price)} KZT` }}</p>
        <p>Год выпуска: {{ formatDate(auto.year) + ' г' }}</p>
        <p>Объем двигателя: {{ auto.volume + ' л' }}</p>
        <p>Город: {{ auto.city }} </p>
        <p>Кузов машины: {{ auto.carcase }} </p>
        <p>Пробег: {{ auto.travel + ' км' }} </p>
        <div class="color-container">
          <p style="margin:0px; margin-right:10px">Цвет:</p>
          <ColorPicker v-model="auto.color" disabled />
        </div>
        <Button class="buyCar" label="Купить машину" severity="success" />
        <div class="buttons">
            <div class="counter-container">
                {{ counter }}
              </div>
              <button class="increase" @click="increase">
                <i class="pi pi-thumbs-up-fill"></i>
              </button>
              <button class="decrease" @click="decrease">
                <i class="pi pi-thumbs-down-fill"></i>
              </button>
        </div>
      </template>
    </Card>
  </template>

<script setup>
import { useAuto } from '../composable/useAuto'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Card from 'primevue/card'; 
import ColorPicker from 'primevue/colorpicker';
import { formatDate } from '@/services/methods'
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

const { auto, getAuto, loading } = useAuto()
const route = useRoute()


onMounted(async () => {
    await getAuto(route.params.id)
})

import {ref} from 'vue'
    const counter = ref(0)

    const increase = () => {
    counter.value++
  }

  const decrease = () => {
    counter.value--
  }

</script>

<style scoped>
.car-image {
    height: 168px;
    width: 278px;
  }
  
  .color-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .color-box {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
    border: 1px solid black;
  }
  .p-card {text-align: center;}

  .buttons {
    margin: 0 auto;
    width: 200px;
      display: flex;
      justify-content: space-around;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s, color 0.3s;
  }
  .increase {
    background-color: white;
    width: 35px;

}
  .decrease {
    background-color: white;
    width: 35px;
  }
    .counter-container {
        border: 2px solid black; 
        padding: 5px; 
        width: 35px;
      }
.buyCar {margin: 10px 0px 10px;}
</style>