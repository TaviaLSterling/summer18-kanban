<template>
  <div>

    <h1>

      {{taskData.title}} <br>{{taskData.description}}
    </h1>
    <button @click="deleteTask(taskData)">Delete Task</button>
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
    <div>
      <Comment v-for="comment in comments[taskData._id]" :commentData="comment" />
      <!-- <button @click="addComment(commentData)">Create Comment</button>
      <button @click="deleteComment(commentData)">Delete Comment</button> -->
      <h1>...</h1>
      <div class="card-action">
        <form @submit.prevent="addComment(newComment)">
          <input type="text" placeholder="title" v-model="newComment.title" required>
          <input type="text" placeholder="description" v-model="newComment.description">
          <button type="submit">Create Comment</button>
        </form>
        <button @click="deleteList(listData)">Delete List</button>
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
      }
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
        console.log(this.listData)
        this.$store.dispatch('addComment', this.newComment)
      }
    },
    components: {
      Comment
    }

  };
</script>

<style scoped>
</style>