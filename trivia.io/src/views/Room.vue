<template>
  <div class="container">
    <div class="card text-center" style="margin-top: 20%; height: 400px">
      <div class="row">
        <TotalPlayer></TotalPlayer>
        <QuizBoard
          v-for="question in questions"
          :key="question.id"
          :question="question"
        ></QuizBoard>
        <Chat></Chat>
      </div>
    </div>
  </div>
</template>

<script>
import TotalPlayer from "../components/TotalPlayer.vue";
import QuizBoard from "../components/QuizBoard.vue";
import Chat from "../components/Chat.vue";

export default {
  name: "Room",
  components: {
    TotalPlayer,
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
};
</script>

<style></style>
