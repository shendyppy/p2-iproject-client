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
          >{{ question.incorrect_answers[0] }}</a
        >
      </div>
      <div class="col">
        <a
          href="#"
          class="btn btn-outline-secondary btn-sm"
          style="width: 50%"
          >{{ question.correct_answer }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizBoard",
  props: ["question"],
};
</script>

<style></style>
