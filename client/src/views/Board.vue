<template>
  <div class="board container">

    <div v-if="activeBoard._id">
      <h1>
        {{activeBoard.title}} - {{activeBoard.description}}
      </h1>
    </div>
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required>

      <button type="submit">Create List</button>
    </form>
    <div class="">
      <div class="">
        <div class="container-fluid">
          <div class="row">
            <List class="col-4 m-5" v-for="list in lists" :listData="list" />
          </div>
        </div>
      </div>
    </div>
    <button class="btn-primary" @click="logout">Log Out</button>
  </div>
</template>


<script>
  import List from '../components/List'
  export default {
    name: "board",
    data() {
      return {
        newList: {
          title: "",
          boardId: ""

        }
      };
    },

    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    props: ["boardId"],
    mounted() {
      this.$store.dispatch("setActiveBoard", this.boardId);
      this.$store.dispatch("getTasks", this.boardId)
      this.$store.dispatch("getComments", this.boardId)
    },
    computed: {
      activeBoard() {
        return this.$store.state.activeBoard || {}
      },
      lists() {
        return this.$store.state.lists;
      }
    },
    methods: {
      addList() {
        this.newList.boardId = this.activeBoard._id
        this.$store.dispatch("addList", this.newList);
        // this.newList = { title: "", description: "" };
      },
      deleteList(listId) {
        this.$store.dispatch("deleteList", boardId);
      },
      logout() {
        this.$store.dispatch('logout');
      }
    },
    components: {
      List
    }
  };


</script>