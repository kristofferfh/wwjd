<script setup lang="ts">

</script>
<template>
  <div id="input">
    <ChatboxLogo />
    <ChatboxInput />
  </div>
  <div id="output">
    <DialogueInput author="npc man" image="npc.jpg" message="hi there!"/>
    <DialogueOutput message="hello my child!"/>
  </div>
</template>
<style scoped>
  #input {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
  }

  #output {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
  }
</style>