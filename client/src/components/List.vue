<template>
  <h1>
    <div class="row">
      <div class="col-sm-4">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{listData.title}}</span>

          </div>
          <div class="card-action">
            <form @submit.prevent="addList">
              <input type="text" placeholder="title" v-model="newList.title" required>
              <input type="text" placeholder="description" v-model="newList.description">
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
        newList: {
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
      deleteList() {
        this.$store.dispatch("deleteList", listData.boardId, listData._id);
      }
    }
  };
</script>

<style scoped>
</style>