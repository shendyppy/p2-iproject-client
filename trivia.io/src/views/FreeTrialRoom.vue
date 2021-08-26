<template>
  <section>
    <div class="container">
      <div class="card text-center" style="margin-top: 20%; height: 400px">
        <div class="row">
          <QuizBoard
            v-for="question in questions"
            :key="question.id"
            :question="question"
          ></QuizBoard>
          <Chat></Chat>
        </div>
      </div>
    </div>
    <div class="col" style="margin-bottom: 2%">
      <a
        href="#"
        class="btn btn-outline-secondary btn-sm"
        style="width: 50%; margin-top: 2%"
        @click="refreshTrivia"
        >Refresh</a
      >
    </div>
    <div style="margin-bottom: 2%">
      <a
        href="#"
        class="btn btn-outline-secondary btn-sm"
        style="width: 50%; margin-top: 2%"
        @click="backToHome"
        >Back</a
      >
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

import QuizBoard from "../components/QuizBoard.vue";
import Chat from "../components/Chat.vue";

export default {
  name: "Room",
  components: {
    QuizBoard,
    Chat,
  },
  computed: {
    questions() {
      return this.$store.state.questions.results;
    },
  },
  created() {
    this.$store.dispatch("getTrivia");
  },
  methods: {
    refreshTrivia() {
      this.$store.dispatch("getTrivia");
    },
    loggingOut() {
      this.$store.dispatch("logout");
    },
    backToHome() {
      Vue.swal({
        title: "Are you sure want to quit?",
        showDenyButton: true,
        confirmButtonText: `Yes`,
        confirmButtonColor: "gray",
        denyButtonText: `No`,
        denyButtonColor: "gray",
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.loggingOut();
          } else if (result.isDenied) {
            Vue.swal({
              title: "Happy trivia-ing again!",
              confirmButtonText: `OK!`,
              confirmButtonColor: "gray",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
