<template>
  <section>
    <div
      style="margin-left: 2%; max-width: 40%"
      v-if="message.nickname === nickname"
    >
      <small
        class="blockquote d-flex flex-end text-right"
        style="width: 85%; height: 40%; background-color: #8fc1d4"
      >
        {{ message.chat }}
      </small>
    </div>
    <div style="margin-left: 2%; max-width: 40%" v-else>
      <small
        class="card-header d-flex"
        style="width: 40%; height: 15%; background-color: #f9f9f9"
      >
        {{ message.nickname }}
      </small>
      <small
        class="blockquote d-flex flex-end text-right"
        style="
          width: 85%;
          max-width: 85%;
          height: 40%;
          background-color: #b5ffd9;
        "
      >
        {{ message.chat }}
      </small>
    </div>
  </section>
</template>

<script>
export default {
  name: "IncomingChat",
  props: ["message"],
  data() {
    return {
      nickname: localStorage.getItem("nickname"),
    };
  },
};
</script>

<style scoped></style>
