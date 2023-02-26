<template>
  <div class="login-form">
    <ion-list class="card">
      <ion-text color="dark">
        <h1 style="text-align: center;padding: 50px 0">Registrate</h1>
      </ion-text>
      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input v-model="name" type="text"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input v-model="email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input v-model="password" type="password"></ion-input>
      </ion-item>
      <div style="padding: 50px 0"><ion-button @click="register" expand="block">Registrar</ion-button></div>
    </ion-list>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import AuthService from "@/service/AuthService";
import router from "@/router";
import {
  IonText,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonList
} from '@ionic/vue';

export default defineComponent({
  name: 'RegisterPage',
  components: {
    IonText,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    IonList
  },
  authService: null,
  created() {
    this.authService = new AuthService();
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register() {
      const payload = {name: this.name,email: this.email, password: this.password};
      this.authService.register(payload).then((data) => {
        const {accessToken,...user} = data
        if (accessToken) {
          localStorage.setItem('token', accessToken)
          localStorage.setItem('user', JSON.stringify(user))
          router.push({name: 'tasks'})
        }
      });
    }
  }
});
</script>
<style>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
.card{
  padding: 10px 30px;
  width: 100%;
  max-width: 460px;
  /*background: red;*/
  /*width: 100px;*/
  /*height: 100px;*/
}
</style>