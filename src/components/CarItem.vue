<script setup> 
import { defineProps } from 'vue'; 
import Card from 'primevue/card'; 
import Chip from 'primevue/chip'; 
import ColorPicker from 'primevue/colorpicker';

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
        <div class="color-container">
          <p style="margin:0px; margin-right:10px">Цвет:</p>
          <ColorPicker v-model="auto.color" disabled />
        </div>
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
</style>