<script setup>
import CarItem from '@/components/CarItem.vue'; 
import { onMounted } from 'vue'
import { useAuto } from '../composable/useAuto'

const { autoListRemake, getAutoList } = useAuto()

onMounted(async () =>{
  await getAutoList()
})
</script>

<template>
  <div class="car_info">
    <section class="cars" v-for="auto in autoListRemake" :key="auto">
      <CarItem :auto="auto" />
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