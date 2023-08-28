<script setup>
import {ref} from 'vue' 
const counter = ref(0) 

const increase = () => { 
  counter.value++ 
} 

const decrease = () => { 
  counter.value-- 
} 
</script>

<template>
    <div class="buttons"> 
        {{ counter }} 
        <button class="increase" @click="increase">Увеличить</button> 
        <button class="decrease" @click="decrease">Уменьшить</button> 
      </div> 
</template>

<style scoped>.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .increase {
    background-color: green;
    margin: 5px;
  }
  
  .decrease {
    background-color: red;
    margin: 5px;
  }
</style>