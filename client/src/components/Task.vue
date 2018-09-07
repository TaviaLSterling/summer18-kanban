<template>
  <div>

    <h1>

      {{taskData.title}} {{taskData.description}}
    </h1>
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

    },
    methods: {
      addTask() {

      },
      deleteTask() {

      }
    }

  }
</script>