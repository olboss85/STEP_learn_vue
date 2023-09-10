<template>
  <div class="side">
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
          <InputText id="username" v-model="value" />
          <label for="username">Ваш отзыв или вопрос</label>
      </span>

      <Button type="submit" label="Отправить" />
        
      </Sidebar>
      <Button class='side_btn' @click="visible = true">Оставить отзыв</Button>
  </div>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';

export default {
components: {
  Sidebar,
  Button,
  InputMask,
  InputText,
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
  width: 1170px;
  margin: 0 auto;
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
</style>