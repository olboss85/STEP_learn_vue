<script setup> 
import { defineProps } from 'vue'; 
import Card from 'primevue/card'; 
import Chip from 'primevue/chip'; 
 
defineProps({ 
  auto: { 
    type: Object, 
    required: true, 
  }, 
}) 
 
function changeColor(color) { 
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']; 
  if (crappyColors.includes(color)) { 
    return true 
  } 
  return false 
}  
</script> 


<template>
    <Card>
      <template #header>
        <img :src="auto.image" class="car-image" />
      </template>
      <template #title>{{ auto.brand }}</template>
      <template #content>
        <p>Цена: {{ auto.price }}</p>
        <p>Год выпуска: {{ auto.year }}</p>
        <p>Объем двигателя: {{ auto.volume }}</p>
        <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
      </template>
      <template #footer>
        <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
        <Chip v-else-if="Number(auto.year) <= 1960" label="Старый" icon="pi pi-history" />
        <Chip v-else label="Скучный" icon="pi-briefcase" />
        <Chip v-if="changeColor(auto.color)" label="Беспонтовый цвет" icon="pi pi-eye-slash"/>
      </template>
    </Card>
</template>
 
<style scoped> 
.car-image {
  height: 168px;
  width: 278px;
}
</style>