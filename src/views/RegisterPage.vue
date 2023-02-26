<template>
  <div class="login-form">
    <ion-list class="card">
      <ion-text color="dark">
        <h1 style="text-align: center;padding: 50px 0">Registrate</h1>
      </ion-text>
      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>
      <div style="padding: 50px 0"><ion-button expand="block">Registrar</ion-button></div>
    </ion-list>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'RegisterPage',
  components: {},
  data() {
    return {
    }
  },
  methods: {
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