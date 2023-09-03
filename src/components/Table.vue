<template>
    <TreeTable :value="nodes">
        <Column field="brand" header="Марка" expander></Column>
        <Column field="price" header="Цена"></Column>
        <Column field="year" header="Год выпуска"></Column>
        <Column field="volume" header="Объем двигателя"></Column>
        <Column field="color" header="Цвет"></Column>
    </TreeTable>
</template>


<script>
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

export default {
  data() {
    return {
      data: [
        {  },
        {  },
        // Добавьте другие данные по необходимости
      ],
    };
  },
  components: {
    TreeTable,
    Column,
  },
};
</script>

<style scoped>

</style>