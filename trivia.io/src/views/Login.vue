<template>
  <div class="container">
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <div class="col card" style="height: 400px">
          <div style="margin-top: 1%">
            <h3>Login</h3>

            <form method="POST" action="#" @submit.prevent="loggingIn">
              <div class="form-group" style="margin-top: 2%">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  v-model="dataLogin.email"
                />
              </div>

              <div class="form-group" style="margin-top: 1%">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="dataLogin.password"
                />
              </div>
              <button
                href="#"
                class="btn btn-outline-secondary btn-sm"
                style="width: 100%; margin-top: 2%"
                type="submit"
              >
                Let's go!
              </button>
            </form>
            <br />

            <a
              href="#"
              class="btn btn-secondary btn-sm"
              style="width: 100%"
              @click="backToHome"
              >Back</a
            >
            <p style="margin-top: 2%">
              Don't have an account?
              <a href="#" @click="toRegisterPage">Register here!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    nickname() {
      return this.$store.state.user.nickname;
    },
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    toRegisterPage() {
      this.$router.push("/register");
    },
    loggingIn() {
      this.$store.dispatch("login", this.dataLogin);
      this.$socket.emit("logining", this.nickname);
    },
  },
  created() {
    this.$store.dispatch("getUserInfo");
  },
};
</script>

<style></style>
