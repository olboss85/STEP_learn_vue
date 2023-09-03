<template>
    <div class="side">
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button class='side_btn' @click="visible = true">Выбор машины</Button>
    </div>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button class='side_btn' @click="visible = true">Связаться с нами</Button>
    </div>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button class='side_btn' @click="visible = true">Оставить отзыв</Button>
    </div>
    </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';

export default {
  components: {
    Sidebar,
    Button,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
.side {
    display: flex;
    flex-direction: column;
}
.side_btn{
  background-color: rgb(238, 238, 228); 
  color: black; 
  width: 170px;
  margin-bottom: 10px;
}
</style>