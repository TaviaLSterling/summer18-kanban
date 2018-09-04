<template>
  <div class="board">
    {{boardId}}
    <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
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
    computed: {
      activeBoard() {
        return this.$store.state.activeBoard;
      }
    },
  };
</script>