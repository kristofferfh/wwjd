<script setup lang="ts">

</script>
<template>
  <main>
    <slot />
  </main>
</template>
<style scoped>
  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
</style>