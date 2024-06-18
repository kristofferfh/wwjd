<script setup lang="ts">
  const jesusImg = ref("jesusbeach2.jpg")

  defineProps<{
    message: string
  }>()
</script>
<template>
  <div>
    <span class="message">
      {{ message }}
    </span>
    <span class="profile">
      <h3>Jesus</h3>
      <NuxtImg :src="jesusImg" />
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
    border-radius: 20px 0 20px 20px;
    background-color: var(--bg-chat-output);
  }
</style>