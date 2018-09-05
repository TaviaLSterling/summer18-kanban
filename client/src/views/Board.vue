<template>
  <div class="board">
    {{boardId}} {{activeBoard.title}}

  </div>
</template>

<script>
  export default {
    name: "board",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    props: ["boardId"],
    mounted() {
      this.$store.dispatch("getBoard", boardId);
      //where is boardId coming from? this.?
    },
    computed: {
      activeBoard() {
        return this.$store.state.activeBoard;
      }
    },
  };
</script>