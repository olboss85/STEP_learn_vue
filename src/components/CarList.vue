<script setup>
import CarItem from '@/components/CarItem.vue'; 
import { defineProps } from 'vue'

defineProps ({
  cars: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div class="car_info">
    <section class="cars" v-for="car in cars" :key="car">
      <CarItem :car="car" />
    </section>
  </div>
</template>

<style scoped>
.car_info {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-inline: 50px;
  text-align: center;
}

.cars {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>