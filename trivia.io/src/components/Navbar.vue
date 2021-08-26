<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="backToHome">Trivia.io</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <button
          href="#"
          id="logout"
          class="btn btn-secondary"
          @click="login"
          v-if="!isLoggedIn"
        >
          Login
        </button>
        <div v-if="isLoggedIn" id="logout">
          <button href="#" class="btn btn-secondary" @click="toMyTrivia">
            My Trivia
          </button>
          <button
            id="logout"
            href="#"
            class="btn btn-secondary"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  name: "Navbar",
  data() {
    return {
      params: {
        client_id:
          "897974078034-vko3ugbcp4qfqmq3kh47ui56pqkr9mnd.apps.googleusercontent.com",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    backToHome() {
      this.$router.push("/");
    },
    toMyTrivia() {
      this.$store.dispatch("getMyTrivia");
    },
  },
};
</script>

<style>
button#logout {
  position: fixed;
  right: 20px;
}

p#user {
  position: fixed;
  right: 130px;
  color: white;
}

p#email {
  position: fixed;
  right: 130px;
  top: 30px;
  color: white;
}
</style>
