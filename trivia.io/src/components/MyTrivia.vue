<template>
  <div class="col-4 card" style="height: 400px">
    <header
      class="d-flex flex-row justify-content-between"
      style="margin-top: 5%; margin-left: 5%; margin-right: 5%"
    >
      <h6>{{ trivia.category }}</h6>
      <h6>{{ trivia.difficulty }}</h6>
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
        {{ trivia.question }}
      </h6>
    </div>
    <br />
    <div class="row" style="margin-top: 4%">
      <div class="col">
        <a class="btn btn-outline-success btn-sm" style="width: 100%"
          >The answer is: {{ trivia.correct_answer }}</a
        >
      </div>
      <button
        class="btn btn-outline-danger btn-sm"
        style="margin-left: 2%; margin-top: 3%; margin-right: 4%; width: 96%"
        @click="deletingTrivia(trivia.id)"
      >
        Delete this trivia!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTrivia",
  props: ["trivia"],
  methods: {
    deletingTrivia(id) {
      this.$store.dispatch("deleteMyTrivia", id);
    },
  },
};
</script>

<style></style>
