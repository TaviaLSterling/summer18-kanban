<template>
  <h1>
    {{listData}}
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
    props: ["listData"],

    methods: {
      // addList() {
      //   this.$store.dispatch("addList", this.newList);
      //   this.newList = { title: "", description: "" };
      addList() {
        this.newList.boardId = this.activeBoard._id
        console.log(this.newList)
        this.$store.dispatch("addList", this.newList);
      },
      // deleteList(listId) {
      //   this.$store.dispatch("deleteList", listId);
      // }
    }
  };
</script>

<style scoped>
</style>