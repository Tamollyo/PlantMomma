<template>
  <div class='task'>
    <div>
      <h3>Add a Task</h3>
      <TaskForm @createTask="createTask" :plantId="plantId"/>
    </div>
    <h2>Tasks</h2>
    <TaskCard :key="task.id"  v-for="task in tasks" :tag="task.tag" :description="task.description" :schedule="task.schedule" @deleteTask="deleteTask" :id="task._id" />
  </div>
</template>

<script>
  import axios from 'axios'
  import TaskCard from '../components/TaskCard.vue'
  import TaskForm from '../components/TaskForm.vue'

  const BASE_URL = 'https://plantmommabackend.herokuapp.com/api'

  export default {
    name: 'PlantTasks',
    data: () => ({
      tasks: [], 
      plantId: ''
    }),
    components: {
      TaskCard, 
      TaskForm
    }, 
    mounted() {
      this.plantId = this.$route.params.pid
      this.getTasksByPlantId()
    },
    methods: {
      async getTasksByPlantId() {
        const res = await axios.get(`${BASE_URL}/plant/${this.plantId}/task`)
        console.log(res)
        this.tasks = res.data
      },
      createTask() {
        this.getTasksByPlantId()
      },
      deleteTask() {
        this.getTasksByPlantId()
      }
    }
  }
</script>

<style>

  .task {
  font-family: 'Square Peg', cursive;
  color: antiquewhite;
  }

</style>