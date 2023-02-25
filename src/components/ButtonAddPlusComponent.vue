<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button id="open-modal">
      <ion-icon></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <!--  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>-->

  <ion-modal ref="modal" trigger="open-modal" :initial-breakpoint="0.1" cssClass="full-width-modal">
    <ion-content class="ion-padding">
      <div style="display: flex">
        <div style="width: 100%">
          <ion-input ref="modalInput" v-model="task" @keyup.enter="saveTask"
                     placeholder="Ejm.Sacar a pasear a los perros" autofocus></ion-input>
        </div>
        <div>
          <ion-button color="light" @click="saveTask">
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script>
import {
  IonFab, IonFabButton, IonIcon,
  IonModal,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/vue';
import {defineComponent} from 'vue';
import TaskService from "@/service/TaskService";

export default defineComponent({
  name: 'ButtonAddPlusComponent',
  emits: ['dato-enviado'],
  taskService: null,
  components: {
    IonFab, IonFabButton, IonIcon,
    IonModal,
    IonContent,
    IonInput,
    IonButton
  },
  created() {
    this.taskService = new TaskService();
  },
  data() {
    return {
      task: '',
    };
  },
  methods: {
    saveTask() {
      const userId = 1;
      const payload = {title: this.task, description: '',userId:userId};
      this.taskService.create(payload).then((data) => {
        this.$emit('dato-enviado', data);
        this.task = ''
      });
    },
  },
});
</script>

<style scoped>
.full-width-modal {
  --width: 100%;
}
</style>