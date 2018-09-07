<template>
  <div>

    <h1>

      {{taskData.title}} {{taskData.description}}
    </h1>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <!-- <div class="card-action">
      <form @submit.prevent="addTask">
        <input type="text" placeholder="title" v-model="newTask.title" required>
        <input type="text" placeholder="description" v-model="newTask.description">
        <button type="submit">Create Task</button>
      </form> -->
  </div>
</template>

<script>
  export default {
    name: 'Task',
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    data() {
      return {
        newTask: {
          title: "",
          description: ""
        }
      };
    },
    props: ["taskData"],
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    },

    methods: {
      addTask() {

      },
      deleteTask() {

      }
    }

  }
</script>