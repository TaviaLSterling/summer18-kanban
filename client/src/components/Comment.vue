<template>
  <div>

    <h1>

      {{commentData.title}} {{commentData.description}}
    </h1>
    <button @click="deleteComment(newComment)">Delete Comment</button>
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
          taskId: "",
          _id: ""
        }
      }
    },
    props: ["commentData"],
    computed: {
      tasks() {
        return this.$store.state.tasks;
      },
      comments() {
        return this.$store.state.comments
      }
    },
    // mounted() {
    //   this.$store.dispatch("getTasks");
    // },
    methods: {
      deleteComment(newComment) {
        this.newComment.boardId = this.commentData.boardId
        this.newComment.listId = this.commentData.listId
        this.newComment.authorId = this.commentData.authorId
        this.newComment.taskId = this.commentData.taskid
        this.newComment._id = this.commentData._id
        console.log(newComment)
        this.$store.dispatch("deleteComment", newComment)
      }

    },
    components: {
    }
  };
</script>