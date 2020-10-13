<template>
  <button v-on:click="$emit ('delete-contact', contact.id)">Delete!</button>
</template>
<style scoped>
button {
  background-color: crimson;
  width: 15%;
  /* font-size: 2.5rem; */
  border-radius: 20%;
  height:100%
  
}
</style>