<template>
  <div class="col-5 card" style="height: 400px">
    <header
      class="d-flex flex-row justify-content-between"
      style="margin-top: 5%; margin-left: 5%; margin-right: 5%"
    >
      <h6>{{ question.category }}</h6>
      <h6>{{ question.difficulty }}</h6>
    </header>
    <div
      class="card text-center overflow-auto"
      style="margin-top: 2%; margin-left: 5%; margin-right: 5%; height: 175px"
    >
      <h6
        class="justify-content-between blockquote"
        style="
          margin-top: 2%;
          margin-bottom: 2%;
          margin-left: 1%;
          margin-right: 1%;
        "
      >
        {{ question.question }}
      </h6>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <a
          href="#"
          class="btn btn-outline-secondary btn-sm"
          style="width: 50%"
          @click="wrongAnswer"
          >{{ question.incorrect_answers[0] }}</a
        >
      </div>
      <div class="col">
        <a
          href="#"
          class="btn btn-outline-secondary btn-sm"
          style="width: 50%"
          @click="rightAnswer"
          >{{ question.correct_answer }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast, { position: "top-right" });

export default {
  name: "QuizBoard",
  data() {
    return {
      nickname: localStorage.getItem("nickname"),
      points: localStorage.getItem("points"),
    };
  },
  props: ["question"],
  methods: {
    rightAnswer() {
      this.points += 10;
      Vue.$toast.open({
        message: `${this.nickname} have the right answer! 10 points for you!`,
        type: "default",
      });
      this.fetchQuestion();
    },
    wrongAnswer() {
      Vue.$toast.open({
        message: `Try harder next time!`,
        type: "default",
      });
      this.fetchQuestion();
    },
    fetchQuestion() {
      this.$store.dispatch("getTrivia");
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    this.$store.dispatch("getUserInfo");
  },
};
</script>

<style></style>
