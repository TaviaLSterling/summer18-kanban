<template>
  <div>

    <h1>

      {{taskData.title}} {{taskData.description}}
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
    <!-- <Comment v-for="comment in comments" :commentData="comment" /> -->
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
      deleteTask(taskData) {
        this.$store.dispatch("deleteTask", taskData)
      },
      addComment(newComment) {
              this.newComment.boardId = this.listData.boardId
              this.newComment.listId = this.listData._id
              this.newComment.authorId = this.listData.authorId
              this.newComment.taskId = this.listData.taskId
              console.log(this.listData)
              this.$store.dispatch('addComment', this.newComment)
            }
    },
    components: {
      Comment
    }

  }
</script>