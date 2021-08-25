<template>
  <div class="container">
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <div class="col card" style="height: 400px">
          <div style="margin-top: 1%">
            <h3>Register</h3>
            <form method="POST" action="#" @submit.prevent="registering">
              <div class="form-group" style="margin-top: 1%">
                <label for="nickname">Nickname</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Nickname"
                  v-model="dataRegister.nickname"
                />
              </div>
              <div class="form-group" style="margin-top: 1%">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  v-model="dataRegister.email"
                />
              </div>
              <div class="form-group" style="margin-top: 1%">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="dataRegister.password"
                />
              </div>
              <button
                href="#"
                class="btn btn-outline-secondary btn-sm"
                style="width: 100%; margin-top: 2%"
                type="submit"
              >
                Create an account!
              </button>
            </form>
            <br />
            <p>
              Already have an account?
              <a href="#" @click="toLoginPage">Login here!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      dataRegister: {
        nickname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toLoginPage() {
      this.$router.push("/login");
    },
    registering() {
      this.$store.dispatch("register", this.dataRegister);
    },
  },
};
</script>

<style></style>
