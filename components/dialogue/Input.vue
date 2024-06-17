<script setup lang="ts">
defineProps<{
  author: string
  image: string
  message: string
}>()
</script>
<template>
  <div>
    <span id="profile">
      <h3>{{ author }}</h3>
      <NuxtImg :src="image" />
    </span>
    <span id="message">
      {{ message }}
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