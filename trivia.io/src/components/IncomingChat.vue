<template>
  <div class="card">
    <small class="card-header" style="width: 30%; height: 25%">
      {{ message.nickname }}
    </small>
    <small class="blockquote" style="width: 100%; height: 40%">
      {{ message.chat }}
    </small>
  </div>
</template>

<script>
export default {
  name: "IncomingChat",
  props: ["message"],
};
</script>

<style></style>
