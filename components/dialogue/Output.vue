<script setup lang="ts">
  const jesusImg = ref("jesusbeach2.jpg")

  defineProps<{
    message: string
  }>()
</script>
<template>
  <div>
    <span id="message">
      {{ message }}
    </span>
    <span id="profile">
      <h3>Jesus</h3>
      <NuxtImg :src="jesusImg" />
    </span>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    width: 100%;
  }

  #profile img {
    height: 200px;
    aspect-ratio: 1;
    border-radius: 9999px;
  }

  #message {
    flex: 1;
    background-color: var(--bg-chat-input);
  }
</style>