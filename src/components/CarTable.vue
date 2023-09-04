<template>
  <DataTable :value="cars">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
      <template #body="{ data }">
        <template v-if="column.field === 'criticScore'">
          <Dropdown @change="changeDropdown(data)" v-model="data.criticalNumber" :options="numberMarks" optionLabel="header" class="dropdown" />
        </template>
        <template v-else> {{ data[column.field] }}</template>
      </template>
    </Column>
  </DataTable>
</template>


<script setup>
import { computed, defineProps, ref } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';

const props = defineProps({
  cars: {
    type: Array,
    required: true,
  }
})

const cars = props.cars

const criticalArray = computed(() => {
  return cars.map((car) => car.criticalNumber)
})

function changeDropdown(){
  console.log(criticalNumber.value)
}

const carColumns = [
  {
    field: 'brand',
    header: 'Марка',
  },
  {
    field: 'price',
    header: 'Цена',
  },
  {
    field: 'year',
    header: 'Год выпуска',
  },
  {
    field: 'volume',
    header: 'Объем двигателя',
  },
  {
    field: 'color',
    header: 'Цвет',
  },
  {
    field: 'criticScore',
    header: 'Оценка критика'
  }
]

const numberMarks = [
  {  mark: 0,
    header: "Очень плохо",
  },
  {  mark: 1,
    header: "Плохо",
  },
  {  mark: 2,
    header: "Нормально",
  },
  {  mark: 3,
    header: "Хорошо",
  },
  {  mark: 4,
    header: "Очень хорошо",
  },
  {  mark: 5,
    header: "Отлично",
  },
]

</script>

<style scoped>
.dropdown {
  width: 100%;
}
</style>