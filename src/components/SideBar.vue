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
          <InputText id="comment" v-model="comment" />
          <label for="comment">Ваш отзыв или вопрос</label>
      </span>

      <Button type="submit" label="Отправить" @click="handleSubmit" />
        
      </Sidebar>
    
      <Button class="side_btn" @click="visible = true">Оставить отзыв</Button>
    </div>
    <div class="card flex justify-content-center">
      <Toast />
      <div class="flex flex-wrap gap-2">
        <Button label="Success" severity="success" @click="showSuccess" />
        <Button label="Info" severity="info" @click="showInfo" />
        <Button label="Warn" severity="warning" @click="showWarn" />
        <Button label="Error" severity="danger" @click="showError" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

export default {
  components: {
    Sidebar,
    Button,
    InputMask,
    InputText,
    Toast,
  },
  data() {
    return {
      visible: false,
      value: "", 
      value2: "",
      comment: "",
    };
  },
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Успех',
        detail: 'Отзыв отправлен успешно',
        life: 3000,
      });
    },
    showInfo() {
      this.$toast.add({
        severity: 'info',
        summary: 'Info Message',
        detail: 'Message Content',
        life: 3000,
      });
    },
    showWarn() {
      this.$toast.add({
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Message Content',
        life: 3000,
      });
    },
    showError() {
      this.$toast.add({
        severity: 'error',
        summary: 'Error Message',
        detail: 'Message Content',
        life: 3000,
      });
    },
    handleSubmit() {
      if (this.value && this.value2 && this.comment) {
        this.showSuccess();
      } else {
        this.showError();
      }
    },
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