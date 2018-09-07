<template>
  <h1>
    <div class="row">
      <div class="col-sm-4">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{listData.title}}</span>

          </div>
          <div class="card-action">
            <form @submit.prevent="addTask(newTask)">
              <input type="text" placeholder="title" v-model="newTask.title" required>
              <input type="text" placeholder="description" v-model="newTask.description">
              <button type="submit">Create Task</button>
            </form>
            <button @click="deleteList(listData)">Delete List</button>
          </div>
          <Task v-for="task in tasks" :taskData="task" />

        </div>
      </div>
    </div>

  </h1>

</template>

<script>
  import Task from '../components/Task'
  export default {
    name: 'List',
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
          description: "",
          boardId: "",
          listId: "",
          authorId: ""
        }
      }
    },
    props: ["listData"],
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    },

    methods: {
      // addList() {
      //   this.$store.dispatch("addList", this.newList);
      //   this.newList = { title: "", description: "" };
      addList() {
        debugger
        this.newList.boardId = this.activeBoard._id
        console.log(this.newList)
        this.$store.dispatch("addList", this.newList);
      },
      deleteList(listData) {
        this.$store.dispatch("deleteList", listData);
      },
      addTask(newTask) {
        this.newTask.boardId = this.listData.boardId
        this.newTask.listId = this.listData._id
        this.newTask.authorId = this.listData.authorId
        console.log(this.listData)
        this.$store.dispatch('addTask', this.newTask)
      }
    },
    components: {
      Task
    }
  };
</script>

<style scoped>
</style>