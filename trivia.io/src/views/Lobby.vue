<template>
  <div class="container">
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <div class="col-4 card" style="height: 400px">
          <div style="margin-top: 5%">
            <form>
              <div class="form-group">
                <label for="players">Players</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="5 players"
                />
              </div>
              <br />
              <div class="form-group">
                <label for="maxpoints">Max Points</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="150 Points"
                />
              </div>
              <br />
              <div class="form-group">
                <label for="roomtype">Difficulty</label>
                <br />
                <select name="roomtype" style="width: 100%">
                  <option value="" disabled selected>Please select</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <button
                href="#"
                class="btn btn-outline-secondary btn-sm"
                style="width: 100%; margin-top: 20.5%"
                type="button"
              >
                Create a room
              </button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="card-body">
            <header class="d-flex flex-row justify-content-between">
              <h6>Rooms</h6>
            </header>
            <div
              class="d-flex flex-row justify-content-between"
              style="margin-top: 2%"
            >
              <div class="card" style="width: 18rem; margin-left: 2%">
                <div class="card-body">
                  <h6 class="card-title">Player 5's Room</h6>
                  <br />
                  <ul class="list-group" style="width: 100%; height: 50%">
                    <li class="list-group-item">4/10 Players</li>
                    <li class="list-group-item">Max Points: 120 Points</li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-secondary btn-sm"
                    style="width: 100%; margin-top: 9%"
                    >Join</a
                  >
                </div>
              </div>
              <div class="card" style="width: 18rem; margin-left: 2%">
                <div class="card-body">
                  <h6 class="card-title">Misaki's Room</h6>
                  <br />
                  <ul class="list-group" style="width: 100%; height: 50%">
                    <li class="list-group-item">8/10 Players</li>
                    <li class="list-group-item">Max Points: 100 Points</li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-secondary btn-sm"
                    style="width: 100%; margin-top: 9%"
                    >Join</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 4%; margin-right: 2%; margin-left: 1%">
            <a
              href="#"
              class="btn btn-outline-secondary btn-sm"
              style="width: 100%"
              @click="backToHome"
              >Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  name: "Lobby",
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
              title: "Go get your room, mate!",
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
