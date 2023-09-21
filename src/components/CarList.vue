<script setup>
import CarItem from '@/components/CarItem.vue'; 
import { onMounted } from 'vue'
import { useAuto } from '../composable/useAuto'
import { useRouter } from 'vue-router'

const router = useRouter();

const { autoListRemake, getAutoList } = useAuto()

onMounted(async () =>{
  await getAutoList()
})

function goToCarUrl(id) {
  router.push({ name: 'car', params: { id }})
}
</script>

<template>
  <div class="car_info">
    <section class="cars" v-for="auto in autoListRemake" :key="auto">
      <CarItem :auto="auto" @click="goToCarUrl(auto.id)" />
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

:deep(.p-card) {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

:deep(.p-card:hover) {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>