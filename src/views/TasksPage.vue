<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>List Task</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ButtonAddPlusComponent @dato-enviado="recibirDato"></ButtonAddPlusComponent>
      <TaskListsComponent :dato="datoRecibido"></TaskListsComponent>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonMenuButton, IonButtons} from '@ionic/vue';
import TaskListsComponent from '@/components/TaskListsComponent.vue'
import ButtonAddPlusComponent from '@/components/ButtonAddPlusComponent.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TaskPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonMenuButton,
    IonButtons,
    TaskListsComponent,
    ButtonAddPlusComponent
  },
  data() {
    return {
      datoRecibido: ''
    }
  },
  methods: {
    recibirDato(dato) {
      this.datoRecibido = dato;
    }
  }
});
</script>