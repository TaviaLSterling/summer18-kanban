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
        </div>
      </div>
    </div>

  </h1>

</template>

<script>
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
          description: ""
        }
      };
    },
    props: ["listData"], //WHAT IS THIS???

    methods: {
      // addList() {
      //   this.$store.dispatch("addList", this.newList);
      //   this.newList = { title: "", description: "" };
      addList() {
        this.newList.boardId = this.activeBoard._id
        console.log(this.newList)
        this.$store.dispatch("addList", this.newList);
      },
      deleteList(listData) {
        this.$store.dispatch("deleteList", listData);
      },
      addTask(taskList) {
        this.newTask.boardId = this.activeTask._id
        this.$store.dispatch('addTask', taskList)
      }
    }
  };
</script>

<style scoped>
</style>