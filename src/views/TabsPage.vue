<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

    </ion-content>
    <ion-footer>
      <div @click="logout" style="width: 100%;height: 100%;display: flex;justify-content: center;cursor: pointer">
        <p>Cerrar sesión</p>
      </div>
    </ion-footer>
  </ion-menu>
  <ion-page id="main-content">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tasks">
          <!--          <ion-icon aria-hidden="true" :icon=""/>-->
          <ion-label>Tasks</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonMenu,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonTabs,


} from '@ionic/vue';
import {defineComponent} from "vue";
import router from "@/router";

export default defineComponent({
  name: 'TaskPage',
  components: {
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonMenu,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonTabs
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      router.push({ path: '/login' }).then(() => {
        window.location.reload();
      });
    }
  }
});
</script>
