<template>
  <div>

    <h3>

      {{taskData.title}}</h3> <br>
    <h4>{{taskData.description}}</h4>

    <button class="btn-danger" @click="deleteTask(taskData)">Delete Task</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        Move to ...
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div v-for="list in lists" :listData="lists">
          <a class="dropdown-item" @click="changeList(list._id)">{{list.title}}</a>

        </div>
      </div>


      <!-- <button class="btn-danger" @click="deleteTask(taskData)">Delete Task</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        Move to ...
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div> -->
      <div class="card bg-info">
        <Comment v-for="comment in comments[taskData._id]" :commentData="comment" />

        <!-- <button @click="addComment(commentData)">Create Comment</button>
          <button @click="deleteComment(commentData)">Delete Comment</button> -->
      </div>

      <div class="card-action">
        <form @submit.prevent="addComment(newComment)">

          <input type="text" placeholder="description" v-model="newComment.description" required>
          <button class="btn-info" type="submit">Create Comment</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
  import Comment from '../components/Comment'
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
        newComment: {
          title: "",
          description: "",
          boardId: "",
          listId: "",
          authorId: "",
          taskId: ""
        }
      };
    },
    props: ["taskData"],
    computed: {
      comments() {
        return this.$store.state.comments;
      },
      lists() {
        return this.$store.state.lists
      },
      boards() {
        return this.$store.state.boards
      },
    },

    methods: {
      addTask() {

      },
      deleteTask(taskData) {
        this.$store.dispatch("deleteTask", taskData)
      },
      addComment(newComment) {
        this.newComment.boardId = this.taskData.boardId
        this.newComment.listId = this.taskData.listId
        this.newComment.authorId = this.taskData.authorId
        this.newComment.taskId = this.taskData._id
        console.log(newComment)
        this.$store.dispatch('addComment', this.newComment)
      },
      changeList(newId) {
        this.taskData.listId = newId
        this.$store.dispatch("changeList", this.taskData)
      }

    },
    components: {
      Comment
    }

  };
</script>

<style scoped>
</style>