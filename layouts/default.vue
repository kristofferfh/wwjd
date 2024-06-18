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
    gap: 2rem;

    min-width: 360px;
    max-width: 1280px;
  }

  @media only screen and (min-width: 600px) {
  main {
    padding: 2rem;
  }
}
</style>