<template>
  <section>
    <div class="container">
      <div class="card text-center" style="margin-top: 20%; height: 400px">
        <div class="row">
          <div class="col">
            <div class="card-body" style="margin-top: 5%; margin-left: 10%">
              <h1>Trivia.io</h1>
              <div class="card-text" style="margin-top: 15%">
                <form>
                  <div class="form-group row">
                    <label class="col-sm-5 col-form-label">Nickname</label>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nickname"
                        v-model="data.nickname"
                        required
                      />
                    </div>
                  </div>
                  <div class="row" style="margin-top: 15%">
                    <div class="col">
                      <a href="#" class="btn btn-secondary" @click="makeRoom"
                        >Make your own room</a
                      >
                    </div>
                    <div class="col">
                      <a href="#" class="btn btn-secondary" @click="freeTrial"
                        >Start free trial!</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="../assets/chat.png"
                        alt="Chatting with your friends!"
                        style="width: 17.5%"
                      />
                    </h5>
                    <p class="card-text">
                      Trivia.io is a trivia game, that can be used as a media to
                      communicate also play some game in real time with your
                      friends!
                    </p>
                    <a href="#" class="btn btn-outline-secondary">Try it!</a>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="card-body">
                    <a
                      href="#"
                      class="btn btn-secondary"
                      @click="login"
                      v-if="!isLoggedIn"
                      >Login</a
                    >
                    <a
                      href="#"
                      class="btn btn-outline-secondary"
                      aria-disabled="falsetrue"
                      v-if="isLoggedIn"
                      >Logged In</a
                    >
                    <br />
                    <br />
                    <div class="row">
                      <div class="col">
                        <a href="#" class="btn btn-secondary"
                          >Sign in with Google</a
                        >
                      </div>
                      <div class="col">
                        <a href="#" class="btn btn-secondary"
                          >Sign in with Discord</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  name: "Home",
  data() {
    return {
      data: {
        nickname: "",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    nickname() {
      return this.$store.state.nickname;
    },
  },
  methods: {
    freeTrial() {
      if (!localStorage.getItem("nickname")) {
        if (!this.data.nickname) {
          Vue.swal({
            title: "Your nickname, please!",
            confirmButtonText: `OK!`,
            confirmButtonColor: "gray",
          });
        } else {
          localStorage.setItem("nickname", this.data.nickname);
          this.$router.push("/room");
        }
      } else {
        if (this.isLoggedIn) {
          localStorage.setItem("nickname", this.nickname);
          this.$router.push("/room");
        }
      }
    },
    makeRoom() {
      if (!this.isLoggedIn) {
        Vue.swal({
          title: "Please login first!",
          confirmButtonText: `OK!`,
          confirmButtonColor: "gray",
        });
      } else {
        this.$router.push("/lobby");
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
  components: {},
};
</script>

<style scoped></style>
