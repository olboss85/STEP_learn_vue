import './assets/main.css'
import PrimeVue from 'primevue/config'
// import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
// import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtNXkwABbAgk4TVupsmcxqkGaFereqG3Y",
  authDomain: "learn-vue-b9740.firebaseapp.com",
  projectId: "learn-vue-b9740",
  storageBucket: "learn-vue-b9740.appspot.com",
  messagingSenderId: "381949457395",
  appId: "1:381949457395:web:f7b40c5a5aaebac5525886"
};

const app = createApp(App)

initializeApp(firebaseConfig);

app.use(router)
app.use(PrimeVue)

app.use(ToastService);

app.mount('#app')
