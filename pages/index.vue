<script setup lang="ts">
  const input = ref()
  const output = ref()

  onMounted(() => {
    input.value = {
      author: "npc man",
      image: "npc.jpg",
      message: "This is my question for you..."
    }

    output.value = {
      message: "hello my child!"
    }
  })

</script>
<template>
  <div id="input">
    <ChatboxLogo />
    <ChatboxInput />
  </div>
  <div id="output">
    <TransitionGroup>
      <DialogueInput v-if="input" v-bind="input"/>
      <DialogueOutput v-if="output" v-bind="output"/>
    </TransitionGroup>
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