<template>
    <div>
        <h1>Отзывы</h1>
        <div class="card" v-for="review in reviews" :key="index">
          <h3>{{ review.name }}</h3>
          <p>{{ review.phone }}</p>
          <p>{{ review.text }}</p>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>