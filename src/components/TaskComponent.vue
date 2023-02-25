<template>
  <ion-item v-if="visible">
    <ion-checkbox @ionChange="onCheckChanged" slot="start"></ion-checkbox>
    <ion-label class="ion-text-wrap">{{ task.title }}</ion-label>
  </ion-item>
</template>

<script>
import {IonCheckbox, IonItem, IonLabel} from '@ionic/vue';
import TaskService from "../service/TaskService";
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TaskComponent',
  components: {IonCheckbox, IonItem, IonLabel},
  taskService: null,
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.taskService = new TaskService();
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    onCheckChanged(event) {
      if (event.detail.checked) {
        const id = this.task.id;
        const payload ={
          done:true
        }
        this.taskService.update(id,payload).then((data) => {
          setTimeout(() => {
            this.visible = !data.done;
          }, 1000)
        });
      }
    },
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}
</style>