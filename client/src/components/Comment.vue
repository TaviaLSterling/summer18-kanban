<template>
  <div>

    <h1>

      {{commentData.title}} {{commentData.description}}
    </h1>
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

    },
    components: {

    }
  };
</script>