<script setup lang="ts">
  defineProps<{
    author: string
    image: string
    message: string
  }>()
</script>
<template>
  <div>
    <span class="profile">
      <h3>{{ author }}</h3>
      <NuxtImg :src="image" />
    </span>
    <span class="message">
      {{ message }}
    </span>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .profile img {
    height: 200px;
    aspect-ratio: 1;
    border-radius: 9999px;
  }

  .message {
    flex: 1;
    padding: 1rem;
    border-radius: 0 20px 20px 20px;
    background-color: var(--bg-chat-input);
  }
</style>