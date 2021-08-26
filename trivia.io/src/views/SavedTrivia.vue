<template>
  <div class="container">
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <MyTrivia></MyTrivia>
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
  methods: {},
};
</script>

<style></style>
