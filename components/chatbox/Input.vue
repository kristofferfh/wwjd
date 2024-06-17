<script setup lang="ts">
  import { ref } from 'vue';

  const input = ref()

</script>
<template>
  <input type="text" :ref="input">
  {{ input }}
</template>
<style scoped>

</style>