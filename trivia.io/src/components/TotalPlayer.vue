<template>
  <div class="col-3">
    <div class="card-body" style="margin-left: 2%">
      <header
        class="d-flex flex-row justify-content-between"
        style="margin-left: 5%; margin-right: 5%"
      >
        <h6>Players</h6>
      </header>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Player 1</li>
          <li class="list-group-item">Player 2</li>
          <li class="list-group-item">Player 3</li>
          <li class="list-group-item">Tsubasa</li>
        </ul>
      </div>
    </div>
    <div style="margin-bottom: 2%">
      <a
        href="#"
        class="btn btn-outline-secondary btn-sm"
        style="width: 50%; margin-top: 40%"
        @click="backToHome"
        >Back</a
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  name: "TotalPlayer",
  methods: {
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
