<template>
  <div class="side">
    <button type="button" class="p-link p-ml-auto btn" @click="googleRegister">
      Enter
    </button>
    <button type="button" class="p-link p-ml-auto btn" @click="createAuto">
      Add car
    </button>
  </div>
  </template>
  
  <script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { onMounted } from 'vue'
import { useAuto } from '@/composable/useAuto'

const { auto, createAuto } = useAuto()

onMounted(async () => {
  await createAuto()
})

const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
</script>

<style scoped>
.side {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.btn{
  color: black; 
  width: 170px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
</style>