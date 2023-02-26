<template>
  <div class="login-form">
    <ion-list class="card">
      <ion-text color="dark">
        <h1 style="text-align: center;padding: 50px 0">Inicio de Sesión</h1>
      </ion-text>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input v-model="email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input v-model="password" type="password"></ion-input>
      </ion-item>
      <div style="padding: 50px 0">
        <ion-button expand="block" @click="login">Ingresar</ion-button>
        <ion-text style="display: flex;justify-content: center;padding: 10px 0">
          <a href="/register" style="color: whitesmoke;font-size: 0.9rem">¿No tienes una cuenta? Registrate</a>
        </ion-text>
      </div>
    </ion-list>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import AuthService from "@/service/AuthService";
import {
  IonText,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonList
} from '@ionic/vue';
import router from "@/router";

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonText,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    IonList
  },
  authService: null,
  data() {
    return {
      email: null,
      password: null
    }
  },
  created() {
    this.authService = new AuthService();
  },
  methods: {
    login() {
      const payload = {email: this.email, password: this.password};
      // console.log(payload)
      this.authService.login(payload).then((data) => {
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

.card {
  padding: 10px 30px;
  width: 100%;
  max-width: 460px;
  /*background: red;*/
  /*width: 100px;*/
  /*height: 100px;*/
}
</style>