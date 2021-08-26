<template>
  <div class="container">
    <div class="card" style="margin-top: 20%; height: 400px">
      <div class="row">
        <div class="col-4 card" style="height: 400px">
          <div style="margin-top: 5%">
            <form method="POST" action="">
              <div class="form-group">
                <label for="players">Room Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Misaki's Room"
                  v-model="roomName"
                  required
                />
              </div>
              <br />
              <div class="form-group">
                <label for="maxpoints">Players</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="5 players"
                  v-model="maxPlayer"
                  required
                />
              </div>
              <br />
              <div class="form-group">
                <label for="maxpoints">Max Points</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="150 Points"
                  v-model="maxPoint"
                  required
                />
              </div>
              <button
                href=""
                class="btn btn-outline-secondary btn-sm"
                style="width: 100%; margin-top: 20.5%"
                type="button"
                @click.prevent="createRoom"
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
              class="d-flex flex-row justify-content-between overflow-auto"
              style="margin: 2%; max-height: 222px; max-width: 750px"
              v-if="rooms.length > 0"
            >
              <div
                class="card"
                style="width: 18rem; margin-left: 2%"
                v-for="room in rooms"
                :room="room"
                :key="room.id"
              >
                <div class="card-body">
                  <h6 class="card-title">{{ room.roomName }}</h6>
                  <br />
                  <ul class="list-group" style="width: 100%; height: 50%">
                    <li class="list-group-item">
                      {{ room.users.length }}/{{ room.maxPlayer }} Players
                    </li>
                    <li class="list-group-item">
                      Max Points: {{ room.maxPoint }} Points
                    </li>
                  </ul>
                  <div>
                    <a
                      href="#"
                      class="btn btn-secondary btn-sm"
                      style="width: 100%; margin-top: 9%"
                      @click="joinRoom(room.roomName)"
                      >Join</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col" v-if="rooms.length === 0">
              <div class="card-body">
                <h1>No available room yet!</h1>
              </div>
            </div>
            <div style="margin-top: 7.5%; margin-right: 2%; margin-left: 1%">
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
  </div>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  name: "Lobby",
  data() {
    return {
      roomName: "",
      maxPlayer: 0,
      maxPoint: 0,
    };
  },
  methods: {
    joinRoom(name) {
      const payload = {
        roomName: name,
        nickname: localStorage.nickname,
      };
      this.$socket.emit("joinRoom", payload);
      this.$router.push(`/room/${name}`);
    },
    createRoom() {
      const payload = {
        roomName: this.roomName,
        maxPlayer: this.maxPlayer,
        maxPoint: this.maxPoint,
        admin: localStorage.getItem("nickname"),
      };
      this.$socket.emit("createRoom", payload);
      this.roomName = "";
      this.maxPlayer = 0;
      this.maxPoint = 0;
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
  sockets: {
    updatedRooms(data) {
      this.$store.commit("GET_ROOMS", data);

      console.log(data, `sampai client`);
    },
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    },
  },
  created() {
    this.$socket.on("getRooms", (data) => {
      this.rooms = data;
    });
    this.$socket.on("updatedRooms", (data) => {
      this.rooms.push(data);
    });
  },
};
</script>

<style></style>
