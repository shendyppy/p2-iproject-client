<template>
  <div class="col-2">
    <div class="card-body" style="margin-left: 2% max-height: 250px">
      <header
        class="d-flex flex-row justify-content-between"
        style="margin-left: 5%; margin-right: 5%"
      >
        <h6>Players</h6>
      </header>
      <div class="card" style="height: 275px; max-height: 275px; overflow-auto">
        <div v-for="(user, i) in roomDetail.users" :key="i" :user="user">
          <small class="flex" v-if="user === nickname"
            >{{ user }}
            <button class="btn btn-secondary btn-sm">You</button></small
          >
          <small class="flex" v-else>{{ user }}</small>
          <hr />
        </div>
      </div>
    </div>
    <div class="col">
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
        style="width: 50%"
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
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueSweetalert2);
Vue.use(VueToast, { position: "top-right" });

export default {
  name: "TotalPlayer",
  data() {
    return {
      nickname: localStorage.getItem("nickname"),
      roomDetail: {},
    };
  },
  sockets: {
    detailRoom(data) {
      this.roomDetail = data;
    },
  },
  created() {
    this.$socket.on("detailRoom", (data) => {
      this.roomDetail = data;
    });
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    },
  },
  methods: {
    refreshTrivia() {
      Vue.$toast.open({
        message: "Please wait....",
        type: "info",
      });
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
