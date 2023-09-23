<template>
  <div class="card">
    <h1>Отзывы</h1>
    <div v-for="review in reviews" :key="review.id">
      <Panel :header="`Отзыв пользователя: ` + review.name" toggleable>
        <p>{{ review.text }}</p>
      </Panel>
    </div>
  </div>
</template>

<!-- 


<template>
  <div class="card">
    <h1>Отзывы</h1>
    <div class="card" v-for="review in reviews" :key="review">
      <h3>{{ review.name }}</h3>
      <p>{{ review.phone }}</p>
      <p>{{ review.text }}</p>
  </div>

</template> -->

<script setup>
// import Review from '@/components/Review.vue'
import Panel from 'primevue/panel';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebases'
import { ref, onMounted } from 'vue';

const reviews = ref([]);

onMounted(async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'reviews'))

        querySnapshot.forEach((doc) => {
            reviews.value.push({
                id: doc.id,
                ...doc.data(),
            });
        });
    } catch (error) {
        console.error('Error getting reviews:', error);
    }
});
</script>

<style scoped>

</style>