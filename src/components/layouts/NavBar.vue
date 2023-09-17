<template>
  <div class="container">
    <div>
      <Image src="https://avatars.mds.yandex.net/i?id=a30e1ec6bdf37c28ba2dac675e20b2412136e69a-9066494-images-thumbs&n=13" alt="Image" width="150" height="115" margin-top="10" />
    </div>
  <div class="card">
    <TabMenu v-model:activeIndex="active" :model="items">
        <template #item="{ label, item, props }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
        </template>
    </TabMenu>
    <router-view />
</div>

<div class="side">
  <button v-if="!user" type="button" class="p-link p-ml-auto btn" @click="googleRegister">
    Войти <i class="pi pi-user"></i>
  </button>
  <button v-else type="button" class="p-link p-ml-auto btn" @click="logout">
    Выйти <i class="pi pi-user"></i>
  </button>
</div>

<div class="card flex justify-content-center">
  <Sidebar v-model:visible="visible">
    <h2>Ваш отзыв</h2>
    <p>Оставьте Ваш отзыв здесь, или напишите вопрос к нам, и мы свяжемся с Вами в ближайшее время!</p>

    <span class="p-float-label">
      <InputText id="username" v-model="value" />
      <label for="username">Ваше имя</label>
    </span>
  <div class="flex-auto">
      <label for="phone"></label>
      <InputMask v-model="value2" date="phone" mask="+7(999) 999-9999" placeholder="+7(705) 111-1234" />
  </div>
  <span class="p-float-label">
    <InputText id="comment" v-model="comment" />
    <label for="comment">Ваш отзыв или вопрос</label>
</span>
<Button type="submit" label="Отправить" @click="handleSubmit" />
</Sidebar>
<Button class="btn" @click="visible = true">Оставить отзыв  <i class="pi pi-star"></i></Button>
</div>
  <Toast />

</div>

  
  
  </template>
  
  <script setup>
import Button from 'primevue/button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import TabMenu from 'primevue/tabmenu'
import Sidebar from 'primevue/sidebar'
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import Image from 'primevue/image';


const auth = getAuth()
const user = ref(JSON.parse(localStorage.getItem('user')))

const googleRegister = () => {
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
      location.reload()
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}

const availabilityTrue = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user === null
}

const logout = () => {
  localStorage.removeItem('user')
  location.reload()
}



import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/settings'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})


import { useToast } from 'primevue/usetoast';

const visible = ref(false);
const value = ref('');
const value2 = ref('');
const comment = ref('');

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const handleSubmit = () => {
    if (value.value && value2.value && comment.value) {
        showSuccess();
    } else {
        showError();
    }
};
</script>

<style scoped>

.btn {
  color: black;
  width: 170px;
  padding: 12px 15px;
  background: white;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
}

.center-content {
  text-align: center; 
}

.side_btn{
color: black; 
width: 170px;
margin-bottom: 10px;
padding: 10px 15px;
background: none;
color: rgb(83, 111, 111);
border: 1px solid rgb(83, 111, 111);
}

.side_bar {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

</style>