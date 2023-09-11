<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />

<Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="`width: '50vw'`">
    <template #default>
        <div class="p-fluid">
          <div class="p-field">
            <label for="brand">Бренд</label>
            <Dropdown id="brand" v-model="car.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
          </div>
          <div class="p-field">
            <label for="price">Цена</label>
            <InputNumber id="price" v-model="car.price" inputId="currency-us" mode="currency" currency="KZT" locale="ru-ru" />
          </div>
          <div class="p-field">
            <label for="year">Год</label>
            <Calendar id="year" v-model="car.year" view="year" dateFormat="yy" />
          </div>
          <div class="p-field">
            <label for="volume">Объем</label>
            <InputNumber id="volume" v-model="car.volume" :minFractionDigits="1" :maxFractionDigits="1" />
          </div>
          <div class="p-field">
            <label for="color">Цвет</label>
            <ColorPicker id="color" v-model="car.color" />
          </div>
          <div class="p-field">
            <label for="city">Город</label>
            <Dropdown id="city" v-model="car.city" editable :options="carCity" option-label="city" option-value="city" placeholder="Город" />
          </div>
          <div class="p-field">
            <label for="carcase">Кузов</label>
            <Dropdown id="carcase" v-model="car.carcase" editable :options="carCase" option-label="carcase" option-value="carcase" placeholder="Кузов" />
          </div>
          <div class="p-field">
            <label for="gear">Коробка</label>

            <div class="flex flex-wrap gap-3">
            
                    <RadioButton id="gear" v-model="car.gear" name="mechanic" value="mechanic" />
                    <label for="ingredient1" class="ml-2">Механика</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton id="gear" v-model="car.gear" name="auto" value="auto" />
                    <label for="ingredient2" class="ml-2">Автомат</label>
                </div>
          </div>
          <div class="p-field">
            <label for="travel">Пробег</label>
            <InputText id="travel" v-model.number="car.travel" />
            <Slider v-model="car.travel" min="0" max="500000" />
          </div>
        </div>
      </template>
    <template #footer>
        <Button label="Сбросить" icon="pi pi-times" @click="toggleVisible" text />
        <Button label="Добавить" icon="pi pi-check" @click="toggleVisible" autofocus />
    </template>
</Dialog>

</template>

<script setup>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import {ref} from 'vue'
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';

const visible = ref(false);

const toggleVisible = () => {
    visible.value = !visible.value
}

const car = ref({
  brand: '',
  price: '',
  year: '',
  volume: '',
  color: '',
  saled: '',
  city: '',
  carcase: '',
  gear: '',
  travel: '',
})

const brandLabel = [
  { brand: 'BMW' },
  { brand: 'Audi' },
  { brand: 'Mercedes' },
  { brand: 'Volkswagen' },
  { brand: 'Volvo' },
  { brand: 'Toyota' },
  { brand: 'Nissan' },
  { brand: 'Mazda' },
  { brand: 'Honda' },
  { brand: 'Hyundai' },
  { brand: 'Kia' },
  { brand: 'Lexus' },
  { brand: 'Ford' },
  { brand: 'Chevrolet' },
  { brand: 'Skoda' },
  { brand: 'Renault' },
  { brand: 'Peugeot' },
]

const carCity = [
    {city: 'Алматы'},
    {city: 'Астана'},
    {city: 'Актобе'},
    {city: 'Актау'},
    {city: 'Усть-Каменогорск'},
]

const carCase = [
    {carcase: 'седан'},
    {carcase: 'кабриолет'},
    {carcase: 'джип'},
    {carcase: 'универсал'},
    {carcase: 'внедорожник'},
    {carcase: 'пикап'},
    {carcase: 'хэтчбек'},

]


</script>

<style scoped>

</style>