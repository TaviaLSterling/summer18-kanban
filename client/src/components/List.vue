<template>
  a test
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
    mounted() {
      this.$store.dispatch("getLists");
    },
    data() {
      return {
        newList: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      lists() {
        return this.$store.state.lists;
      }
    },
    methods: {
      addList() {
        this.$store.dispatch("addList", this.newList);
        this.newList = { title: "", description: "" };
      },
      deleteList(listId) {
        this.$store.dispatch("deleteList", listId);
      }
    }
  };
</script>

<style scoped>
</style>