<template>
  <div class="container">
    <h6>My Trivia</h6>
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <MyTrivia
          v-for="(trivia, i) in myTrivia"
          :key="i"
          :trivia="trivia"
        ></MyTrivia>
      </div>
    </div>
  </div>
</template>

<script>
import MyTrivia from "../components/MyTrivia.vue";

export default {
  name: "SavedTrivia",
  components: {
    MyTrivia,
  },
  computed: {
    myTrivia() {
      return this.$store.state.myTrivia;
    },
  },
  created() {
    this.$store.dispatch("getMyTrivia");
  },
  methods: {},
};
</script>

<style></style>
