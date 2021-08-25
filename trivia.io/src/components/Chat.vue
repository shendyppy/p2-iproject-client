<template>
  <div class="col">
    <div class="card-body">
      <header class="d-flex flex-row justify-content-between">
        <h6>Chat</h6>
      </header>
      <div class="card">
        <div class="overflow-auto" style="height: 300px; max-height: 300px">
          <IncomingChat
            v-for="message in messages"
            :message="message"
            :key="message.id"
          ></IncomingChat>
        </div>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Type your message..."
          v-model="incomingMsg"
          @keyup.enter="chatting"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button" @click="chatting">
            Chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IncomingChat from "../components/IncomingChat.vue";
export default {
  name: "Chat",
  data() {
    return {
      incomingMsg: "",
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  methods: {
    chatting() {
      const data = {
        nickname: localStorage.getItem("nickname"),
        chat: this.incomingMsg,
      };
      this.$socket.emit("chatting", data);
      this.incomingMsg = "";
    },
  },
  sockets: {
    broadcastMsg(data) {
      this.$store.commit("PUSH_MESSAGES", data);
    },
  },
  components: {
    IncomingChat,
  },
};
</script>

<style></style>
