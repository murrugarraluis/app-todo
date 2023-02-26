<template>
  <ion-list>
    <TaskComponent v-for="task in tasks" :key="task.id" :task="task"></TaskComponent>
  </ion-list>
</template>

<script>
import TaskComponent from "@/components/TaskComponent.vue";
import {IonList} from '@ionic/vue';
import TaskService from "../service/TaskService";
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TasksListComponent',
  components: {TaskComponent, IonList},
  taskService: null,
  props: ['dato'],
  watch: {
    dato: function (newVal) {
      this.tasks.push(newVal)
    }
  },
  created() {
    this.taskService = new TaskService();
  },
  mounted() {
    this.taskService.getAll().then((data) => {
        this.tasks = data
    });
  },
  data() {
    return {
      tasks: [],
    };
  }
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}

ion-list {
  padding: 10px 20px;
}
</style>