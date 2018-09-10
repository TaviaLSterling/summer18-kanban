<template>
  <div>

    <h1>

      {{commentData.title}} {{commentData.description}}
    </h1>
    <button @click="deleteComment()">Delete Comment</button>
  </div>
</template>
<script>

  export default {
    name: 'Comment',
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    data() {
      return {
        newComment: {
          description: "",
          boardId: "",
          listId: "",
          authorId: "",
          taskId: ""
        }
      }
    },
    props: ["commentData"],
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    },
    // mounted() {
    //   this.$store.dispatch("getTasks");
    // },
    methods: {
      deleteComment(newComment) {
        // this.newComment.boardId = this.taskData.boardId
        // this.newComment.listId = this.taskData.listId
        // this.newComment.authorId = this.taskData.authorId
        // this.newComment.taskId = this.taskData._id
        console.log(newComment)
        this.$store.dispatch("deleteComment", newComment)
      }

    },
    components: {
    }
  };
</script>