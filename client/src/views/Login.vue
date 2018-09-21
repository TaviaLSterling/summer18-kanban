<template>
  <div class="container-fluid login mt-5">
    <h2>Task Master</h2>
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input type="email" v-model="creds.email" placeholder="email">
      <input type="password" v-model="creds.password" placeholder="password">
      <button type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <input type="password" v-model="newUser.password" placeholder="password">
      <button type="submit">Create Account</button>
    </form>
    <div @click="loginForm = !loginForm">
      <h4 v-if="loginForm">No account? Click here to Register</h4>
      <h4 v-else>Already have an account? Click here to Login</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>
<style scoped>
html, .container-fluid{
  background-image: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/J9H9WF0/videoblocks-beautiful-teal-blue-glowing-bokeh-background-with-floating-light-particles_sdmsnistl_thumbnail-full01.png);
  background-size: cover;
  height: 100vh;
  background-attachment:fixed;
  width:auto;
  color:white;
}
form {
  margin-bottom:20px;
}
h2 {
  margin-bottom:20px;
}
</style>