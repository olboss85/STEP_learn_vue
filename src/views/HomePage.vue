<template>
    <div class="card">
    <Card>
        <template #title> Купить или Продать автомобили - это легко! </template>
        <template #content>
            <p>
                Купить и продать Легковые автомобили - Вы можете на нашем сайте! 
            </p>
            <Divider />
            <p>
                Выставляйте Ваши автомобили - Вы сможете быстро оформить сделку!
            </p>
            <Divider />
            <p>
                Мы помогаем с оформлением сделки!
            </p>
            <Divider />
            <p>
                Подберем автомобиль под Ваш запрос - оставляйте вопрос!
            </p>
            <Divider />
            <p>
                Вы можете недорого купить новые и подержанные автомобили с пробегом!
            </p>
        </template>
    </Card>


    <div class="card cars">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</div>

</template>

<script setup>
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import { ref, onMounted } from "vue";
import { PhotoService } from '@/services/PhotoService';
import Galleria from 'primevue/galleria';


onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<style scoped>

.card {
    text-align: center;
}

.cars {
    margin-top: 50px;
    text-align: -webkit-center;
}
</style>